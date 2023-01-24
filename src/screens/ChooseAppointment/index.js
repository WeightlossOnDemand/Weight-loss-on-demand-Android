import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Linking,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import {styles} from './style';
import {Calendar} from 'react-native-calendars';
import {colors, fontFamily} from '../../services';
import moment from 'moment';
import {
  getAllList,
  getAllSlotDate,
  getSlotDate,
  getSlotList,
  getSlotTime,
} from '../../services/utilities/api/auth';
export default function ChooseAppointment({navigation, route}) {
  const [calendar, setCalendar] = useState(true);
  const [list, setList] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [markedDates, setMarkedDates] = useState('');
  const [timeSlot, setTimeSlot] = useState([]);
  const [dateSlot, setDateSlot] = useState([]);
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [date, setDate] = useState('');
  const [noSlot, setNoSLot] = useState(false);
  const [currentDTime, setCurrentTime] = useState('');

  const handleCalendar = () => {
    setCalendar(true);
    setList(false);
  };
  const handleList = () => {
    setCalendar(false);
    setList(true);
    getTimeSlots();
  };
  useEffect(() => {
    var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
    setCurrentDate(utc);
    const time = new Date().getTime();
    let currentTime = `${moment(time).format('hh:mma')}`;
    console.log(currentTime);
    setCurrentTime(currentTime);
  }, []);

  useEffect(() => {}, [list]);

  const getSelectedDayEvents = (date, day) => {
    setDate(day.day);
    let oneDate = moment(date, 'DD-MM-YYYY');
    let monthName = oneDate.format('MMM');
    setMonth(monthName);
    let weekDayName = moment(date).format('ddd');
    setDay(weekDayName);
    let markedDates = {};
    markedDates[date] = {
      selected: true,
      color: '#00B0BF',
      textColor: '#FFFFFF',
    };
    let serviceDate = moment(date);
    serviceDate = serviceDate.format('DD/MM/YYYY');
    setMarkedDates(markedDates);
    getDateSlots(serviceDate);
    if (route?.params?.from === 'All Trainer') {
      let selectedDate = moment(date).format('DD/MM/YYYY');
      getAllDateSlots(selectedDate);
    }
  };

  const getDateSlots = async date => {
    console.log(currentDTime);

    try {
      let response = await getSlotDate(
        route?.params?.trainer?.tr_id,
        date,
        currentDTime,
      );
      setDateSlot(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTimeSlots = async () => {
    try {
      let response = await getSlotTime(
        route?.params?.trainer?.tr_id,
        currentDTime,
      );
      console.log(response.data.data);
      setTimeSlot(response.data.data);
    } catch (error) {
      console.log(error);
    }
    if (route?.params?.from === 'All Trainer') {
      getAllSlotList();
    }
  };

  const getAllDateSlots = async updatedDate => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
      date: updatedDate,
      time: currentDTime,
    });
    console.log(raw);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    fetch('https://dashboard.weightlossondemand.com/backend/api/all_trCalenderSlots', requestOptions)
      .then(response => response.json())
      .then(result => setDateSlot(result.data))
      .catch(error => console.log('error', error));
  };

  const getAllSlotList = async () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(`https://dashboard.weightlossondemand.com/backend/api/Slots/${currentDTime}`, requestOptions)
      .then(response => response.json())

      .then(result => {
        console.log('--------->>>>', result);
        setTimeSlot(result.data);
      })
      .catch(error => console.log('error', error));
  };
  return (
    <SafeAreaView>
      <View>
        <Header title={'Choose Session'} />
      </View>
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <View style={styles.row}>
            <View style={styles.border}>
              <TouchableOpacity onPress={handleCalendar}>
                <View style={[styles.view, calendar && styles.selected]}>
                  <Text style={[calendar ? styles.whiteText : styles.text]}>
                    Calendar
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleList}>
                <View style={[styles.view, list && styles.selected]}>
                  <Text style={[list ? styles.whiteText : styles.text]}>
                    List
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {calendar ? (
            <View>
              <Calendar
                onDayPress={day => {
                  console.log(day);
                  getSelectedDayEvents(day.dateString, day);
                }}
                markedDates={markedDates}
                initialDate={currentDate}
                theme={styles.calendar}
              />
              {day !== '' ? (
                <View style={styles.padding}>
                  <Text style={styles.text2}>
                    {day}, {month} {date}
                  </Text>
                </View>
              ) : (
                <Text style={styles.text2}>
                  {moment(currentDate).format('ddd')},{' '}
                  {moment(currentDate).format('MMM')}{' '}
                  {moment(currentDate).format('DD')}
                </Text>
              )}

              <View style={styles.height}>
                {dateSlot?.length ? (
                  <ScrollView style={[styles.card]}>
                    {dateSlot?.map((item, index) => {
                      return (
                        <TouchableOpacity
                          key={index}
                          onPress={() =>
                            navigation.navigate('appointmentreqest', {
                              slot: item,
                            })
                          }>
                          <View style={[styles.row2, styles.card]}>
                            <Text style={styles.cardText}>{item?.sl_time}</Text>
                            <View>
                              <Text style={styles.symbol}> ›</Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </ScrollView>
                ) : (
                  <View style={[styles.row2, styles.card]}>
                    <Text style={styles.noSlotText}>No slot available</Text>
                  </View>
                )}
              </View>
            </View>
          ) : (
            <View>
              {timeSlot?.length ? (
                timeSlot?.map((item, index) => {
                  return (
                    <View>
                      {/* {
                        item?.tr_date > currentDate ||
                          (item?.tr_date === currentDate ? ( */}
                      <TouchableOpacity
                        key={index}
                        onPress={() =>
                          navigation.navigate('appointmentreqest', {
                            slot: item,
                          })
                        }>
                        <View style={[styles.row2, styles.card]}>
                          <Text style={styles.cardText}>{item?.sl_time}</Text>
                          <View>
                            <Text style={styles.symbol}> ›</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                      {/* ) : (
                            index == 0 && (
                              <View style={[styles.row2, styles.card]}>
                                <Text style={styles.noSlotText}>
                                  No slot available
                                </Text>
                              </View>
                            )
                          ))
                        // <View style={[styles.row2, styles.card]}>
                        //   <Text style={styles.noSlotText}>
                        //     No slot available
                        //   </Text>
                        // </View>
                      } */}
                    </View>
                  );
                })
              ) : (
                <View style={[styles.row2, styles.card]}>
                  <Text style={styles.noSlotText}>No slot available</Text>
                </View>
              )}
              <View></View>
            </View>
          )}
          {noSlot && <Text>dddddd</Text>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
