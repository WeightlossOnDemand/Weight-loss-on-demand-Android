import {useIsFocused} from '@react-navigation/native';
import moment from 'moment';
import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {removeData} from '../../store/actions';
import GetCare from '../../components/GetCare';
import Loader from '../../components/Loader';
import {sizes, colors} from '../../services';
import {
  getAllTrainers,
  getAppointmentTrainer,
  getTrainer,
  getUser,
  recentVisit,
  trainerAppointmentTime,
} from '../../services/utilities/api/auth';
import images from '../../services/utilities/images';
import {storeUserData} from '../../store/actions';
import {styles} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TrainerAppointment({navigation}) {
  const [userName, setUserName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loader, setLoader] = useState(false);
  const [trainerName, setTrainerName] = useState('');
  const [appointmentList, setAppointmentList] = useState([]);
  const [currentDate, setCurrentDate] = useState('');
  const token = useSelector(state => state.token);
  console.log(token, '0000');
  const isVisible = useIsFocused();

  useEffect(() => {
    getUserVisit();
    getTrainerInfo();
    getTrainerAppointments();
    getRecentAppointment();
    getFcmToken();
  }, [isVisible]);

  useEffect(() => {
    let date = new Date().toJSON();
    let current = moment(date).format('DD/MM/YYYY');
    setCurrentDate(current);
  }, []);

  const getTime = () => {
    const time = new Date().getTime();
    let currentTime = ` ${moment(time).format('hh:mm:ssA')}`;
    console.log(currentTime);
    let date = new Date().toJSON();
    let currentDate = moment(date).format('YYYY-MM-DD');
    let currentFinalDate = currentDate + currentTime;
    console.log(currentFinalDate, 'date-----------<><');
  };

  const getFcmToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    // console.log('----------------------------->>>>', fcmToken, '----->>');
    var myHeaders = new Headers();
    myHeaders.append('Authorization', token);
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      fcm: fcmToken,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('https://dashboard.weightlossondemand.com/backend/api/updateTrtoken', requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  const getTrainerInfo = async () => {
    try {
      let response = await getTrainer(token);
      setTrainerName(response.data.data.tr_name);
    } catch (error) {
      console.log(error);
    }
  };
  const getTrainerAppointments = async () => {
    const time = new Date().getTime();
    let currentTime = ` ${moment(time).format('hh:mm:ssA')}`;
    console.log(currentTime);
    let date = new Date().toJSON();
    let currentDate = moment(date).format('YYYY-MM-DD');
    let currentFinalDate = currentDate + currentTime;
    console.log(currentFinalDate, 'res-------------------------------------->>>>');
    try {
      console.log('works0000-->');
      let response = await getAppointmentTrainer(token, currentFinalDate);
      console.log('appoint-->>>>>>', response.data);
      setAppointmentList(response.data.data);
    } catch (error) {
      console.log('---------->>>>>>ssee', error);
    }
  };
  const dispatch = useDispatch();
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const handleSignOut = () => {
    console.log(token);
    var myHeaders = new Headers();
    myHeaders.append('Authorization', token);

    var formdata = new FormData();

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      // body: formdata,
      redirect: 'follow',
    };

    fetch('https://dashboard.weightlossondemand.com/backend/api/logout', requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.staus == 200) {
          dispatch(removeData());
        }
      })
      .catch(error => alert('error', error));
  };

  const getUserVisit = async () => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', token);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch('https://dashboard.weightlossondemand.com/backend/api/question_review', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log('result---------->>>>', result.data.visit_id);
        if (result.data.visit_id) {
          console.log('works', result.data.visit_id);
          // setVistId(result.data.visit_id);
          // dispatch(viewClientDetails(true));
          // setTimeout(() => {
          //   navigation.navigate('session');
          // }, 2000);

          // setAppId('');
        }
        console.log('---eers----->>>', result.message);
        if (result.data.ap_id) {
          // setAppId(result.data.ap_id);
          // dispatch(viewClientDetails(true));
          // setVistId('');
        } else {
          // setVistId('');
          // setAppId('');
        }
      })
      .catch(error => console.log(error));
  };
  const getRecentAppointment = async () => {
    try {
      const time = new Date().getTime();
      let currentTime = ` ${moment(time).format('HH:MM:SS')}`;
      let date = new Date().toJSON();
      let currentDate = moment(date).format('YYYY-MM-DD');
      let currentFinalDate = currentDate + currentTime;

      let response = await trainerAppointmentTime(token);
      if (currentFinalDate == response.data.data.apt_time) {
        navigation.navigate('trainervideocall');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.paddingTop}>
        <View style={[styles.row, styles.padding]}>
          <Image source={images.icon2} style={styles.icon} />
          <View>
            <Text style={styles.heading}> Hi {trainerName},</Text>
            <Text style={styles.welcomeText}> Welcome back</Text>
          </View>
          <View style={styles.transparentView}></View>
          <View style={styles.left}>
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
              <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={styles.color}>
        {isModalVisible && (
          <Modal style={styles.modalView} isVisible={isModalVisible}>
            {/* <TouchableOpacity onPress={toggleModal}>
              <View
                style={{
                  position: 'relative',
                  bottom: sizes.screenHeight * 0.25,
                  left: sizes.screenWidth * 0.85,
                }}>
                <Entypo name="cross" color={colors.secondary} size={30} />
              </View>
            </TouchableOpacity> */}

            <View style={styles.texcon}>
              <Text style={styles.text111}>Are you sure?</Text>
            </View>
            <View style={styles.texcon1}>
              <Text style={styles.text1}>
                Are you sure you want to sign out?
              </Text>
            </View>
            <View style={styles.buttnView}>
              <TouchableOpacity onPress={handleSignOut}>
                <View style={styles.buttonView}>
                  <Text style={styles.buttonText}>Yes</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.noBtn}>
              <TouchableOpacity onPress={toggleModal}>
                <View style={styles.buttonView1}>
                  <Text style={styles.buttonText}>No</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
        )}
        {loader && <Loader />}
        <View>
          <Text style={styles.appointmentText}>Your upcoming sessions</Text>
        </View>
        {appointmentList?.length ? (
          appointmentList?.map((item, index) => {
            return (
              <View>
                {item.status == 'pending' && (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      navigation.navigate('userDetailTrainer', {
                        ap_id: item.ap_id,
                      })
                    }>
                    <View style={[styles.row, styles.card]}>
                      <Text style={styles.cardText}>
                        {moment(item.apt_time).format('DD/MM/YY hh:mm: A')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              </View>
            );
          })
        ) : (
          <View style={styles.noRecentView}>
            <Text style={styles.noRecent}>No sessions found.</Text>
          </View>
        )}

        <View style={styles.paddingBottom2}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
// : (
//   <Text>No recent appointments</Text>
// )
