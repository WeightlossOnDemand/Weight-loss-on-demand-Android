import React, {useRef, useState} from 'react';
import {
  BackHandler,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {styles} from './style';
import {colors, sizes} from '../../services';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

import {useSelector} from 'react-redux';
import {
  getAmount,
  getUser,
  timeAppointment,
  trainerAppointment,
} from '../../services/utilities/api/auth';
import moment from 'moment';
import Error from '../../components/Error';
import {useIsFocused} from '@react-navigation/native';
import {useEffect} from 'react';
import Loader from '../../components/Loader';

export default function UserVisit({navigation, route}) {
  const [username, setUsername] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [appointMsg, setAppointMsg] = useState('');
  const [loader, setLoader] = useState(false);
  const [amount, setAmount] = useState('');
  const [discount, setDiscount] = useState('');
  const [oops, setOops] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const coupon = useSelector(state => state.coupon);
  const payment = useSelector(state => state.payment);

  const token = useSelector(state => state.token);
  const reason = useSelector(state => state.reason);
  const q1 = useSelector(state => state.q1);
  const q2 = useSelector(state => state.q2);
  const q3 = useSelector(state => state.q3);
  const q4 = useSelector(state => state.q4);
  const q5 = useSelector(state => state.q5);
  const q6 = useSelector(state => state.q6);
  const q7 = useSelector(state => state.q7);
  const q8 = useSelector(state => state.q8);
  const q9 = useSelector(state => state.q9);
  const q10 = useSelector(state => state.q10);
  const q11 = useSelector(state => state.q11);
  const q12 = useSelector(state => state.q12);
  const q13 = useSelector(state => state.q13);
  const q14 = useSelector(state => state.q14);
  const q15 = useSelector(state => state.q15);
  const q16 = useSelector(state => state.q16);
  const q17 = useSelector(state => state.q17);
  const q18 = useSelector(state => state.q18);
  const q19 = useSelector(state => state.q19);
  const q20 = useSelector(state => state.q20);
  const q21 = useSelector(state => state.q21);
  const q22 = useSelector(state => state.q22);
  const q23 = useSelector(state => state.q23);
  const q24 = useSelector(state => state.q24);
  const q25 = useSelector(state => state.q25);
  const q26 = useSelector(state => state.q26);
  const q27 = useSelector(state => state.q27);
  const q28 = useSelector(state => state.q28);
  const q29 = useSelector(state => state.q29);
  const q30 = useSelector(state => state.q30);
  const q31 = useSelector(state => state.q31);
  const q32 = useSelector(state => state.q32);
  const q33 = useSelector(state => state.q33);
  const q34 = useSelector(state => state.q34);
  const q35 = useSelector(state => state.q35);
  const q36 = useSelector(state => state.q36);
  const q37 = useSelector(state => state.q37);
  const q38 = useSelector(state => state.q38);
  const q39 = useSelector(state => state.q39);
  const q40 = useSelector(state => state.q40);
  const q41 = useSelector(state => state.q41);
  const q42 = useSelector(state => state.q42);
  const q43 = useSelector(state => state.q43);
  const q44 = useSelector(state => state.q44);
  const q45 = useSelector(state => state.q45);
  const q46 = useSelector(state => state.q46);
  const q47 = useSelector(state => state.q47);
  const q48 = useSelector(state => state.q48);
  const q49 = useSelector(state => state.q49);
  const q50 = useSelector(state => state.q50);
  const isVisible = useIsFocused();

  console.log(
    '===========>>>',
    route?.params?.sessionStart,
    route?.params?.appointByTrainer,
    route?.params?.appointByTime,
    route?.params?.trainer,
  );
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('backPress', () => true);
    return () => backHandler.remove();
  }, []);
  useEffect(() => {
    getUserDetails();
    getPrice();
  }, [isVisible]);

  const getUserDetails = async () => {
    try {
      let response = await getUser(token);
      setUsername(response.data.data.first_name);
    } catch (error) {
      console.log(error);
    }
  };
  const getPrice = async () => {
    try {
      let response = await getAmount();
      setAmount(response.data.amount);
      setDiscount(response.data.discount);
    } catch (error) {
      console.log(error);
    }
  };
  const confirmAndPay = () => {
    console.log(route?.params);
    setLoader(true);
    if (route?.params?.appointByTrainer == true && payment.cardNum) {
      console.log('appointByTrainer--------->>');
      let price =
        coupon == null
          ? amount * 100
          : (amount - (amount / 100) * discount) * 100;
      var formdata = new FormData();
      formdata.append('number', payment.cardNum);
      formdata.append('expr_num', payment.expirationMonth);
      formdata.append('exp_year', payment.expirationYear);
      formdata.append('cvc', payment.cvv);
      formdata.append('amount', price);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };

      fetch('https://dashboard.weightlossondemand.com/backend/api/pay', requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          if (result.message == 'succeeded') {
            setLoader(false);
            bookAppointmentByTrainer(price);
          }
        })
        .catch(error => console.log('error', error));
    } else if (route?.params?.appointByTime == true && payment.cardNum) {
      let price =
        coupon == null
          ? amount * 100
          : (amount - (amount / 100) * discount) * 100;

      var formdata = new FormData();
      formdata.append('number', payment.cardNum);
      formdata.append('expr_num', payment.expirationMonth);
      formdata.append('exp_year', payment.expirationYear);
      formdata.append('cvc', payment.cvv);
      formdata.append('amount', price);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };

      fetch('https://dashboard.weightlossondemand.com/backend/api/pay', requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.message == 'succeeded') {
            setLoader(false);
            bookAppointmentByTime(price);
          }
        })
        .catch(error => console.log('error', error));
    } else if (route?.params?.sessionStart == true && payment.cardNum) {
      console.log('works000000000|>');
      let price =
        coupon == null
          ? amount * 100
          : (amount - (amount / 100) * discount) * 100;

      var formdata = new FormData();
      formdata.append('number', payment.cardNum);
      formdata.append('expr_num', payment.expirationMonth);
      formdata.append('exp_year', payment.expirationYear);
      formdata.append('cvc', payment.cvv);
      formdata.append('amount', price);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };

      fetch('https://dashboard.weightlossondemand.com/backend/api/pay', requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          if (result.message == 'succeeded') {
            setLoader(false);
            console.log('done------------>>');
            setTimeout(() => {
              toggleModal();
            }, 500);
          } else {
            alert(result.message);
            setLoader(false);

          }
        })
        .catch(error => console.log('error', error));
    }
  };

  const bookAppointmentByTrainer = async price => {
    console.log('bookAppointmentByTrainer------>>');
    try {
      let response = await trainerAppointment(
        token,
        q1,
        q2,
        q3,
        q4,
        q5,
        q6,
        q7,
        q8,
        q9,
        q10,
        q11,
        q12,
        q13,
        q14,
        q15,
        q16,
        q17,
        q18,
        q19,
        q20,
        q21,
        q22,
        q23,
        q24,
        q25,
        q26,
        q27,
        q28,
        q29,
        q30,
        q31,
        q32,
        q33,
        q34,
        q35,
        q36,
        q37,
        q38,
        q39,
        q40,
        q41,
        q42,
        q43,
        q44,
        q45,
        q46,
        q47,
        q48,
        q49,
        q50,
        route?.params?.trainer?.tr_id,
        route?.params?.trainer?.tr_name,
        reason,
        moment(route?.params?.slot?.tr_date, 'DD/MM/YYYY').format('MM/DD/YYYY'),
        route?.params?.slot?.tr_day,
        route?.params?.slot?.sl_time,
        `$${amount}`,
      );
      console.log(response.data.message);
      if (response.data.message !== 'Session not created successfully') {
        setTimeout(() => {
          setAppointMsg(response.data.message);
        }, 1000);
      } else {
        setTimeout(() => {
          setAppointMsg(response.data.message);
        }, 1000);
        setOops(true);
      }
    } catch (error) {
      console.log('err-->', error);
    }
  };

  const bookAppointmentByTime = async price => {
    try {
      let response = await timeAppointment(
        token,
        q1,
        q2,
        q3,
        q4,
        q5,
        q6,
        q7,
        q8,
        q9,
        q10,
        q11,
        q12,
        q13,
        q14,
        q15,
        q16,
        q17,
        q18,
        q19,
        q20,
        q21,
        q22,
        q23,
        q24,
        q25,
        q26,
        q27,
        q28,
        q29,
        q30,
        q31,
        q32,
        q33,
        q34,
        q35,
        q36,
        q37,
        q38,
        q39,
        q40,
        q41,
        q42,
        q43,
        q44,
        q45,
        q46,
        q47,
        q48,
        q49,
        q50,
        reason,
        moment(route?.params?.slot?.tr_date, 'DD/MM/YYYY').format('MM/DD/YYYY'),
        route?.params?.slot?.tr_day,
        route?.params?.slot?.sl_time,
        `$${amount}`,
      );
      setTimeout(() => {
        setAppointMsg(response.data.message);
      }, 1000);
    } catch (error) {
      console.log('err-->', error);
    }
  };
  return (
    <SafeAreaView>
      <View>
        <Header title={`${username}'s Session`} />
      </View>
      <ScrollView style={styles.color}>
        <View style={styles.userView}>
          <View style={styles.padding2}>
            <Text style={styles.text}>First available consultant</Text>
            {!route?.params?.sessionStart && (
              <Text style={styles.heading}>Estimated wait: {'<'} 5 min</Text>
            )}
          </View>
        </View>
        <View style={styles.padding}>
          {/* <Text style={styles.head2}>Payment</Text> */}
        </View>
        <TouchableOpacity
          onPress={() =>
            !payment?.cardNum &&
            navigation.navigate('AddPaymentMethod', {
              to: 'UserVisit',
              // appointByTrainer: route?.params?.appointByTrainer,
              sessionStart: route?.params?.sessionStart ? true : false,
              appointByTrainer: route?.params?.appointByTrainer ? true : false,
              appointByTime: route?.params?.appointByTime ? true : false,
              trainer: route?.params?.trainer,
              slot: route?.params?.slot,
            })
          }>
          <View style={[styles.row, styles.card, styles.borderTop]}>
            <Text style={styles.cardText}>Pay with</Text>
            {payment?.cardNum ? (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('AddPaymentMethod', {
                      to: 'UserVisit',
                      // appointByTrainer: route?.params?.appointByTrainer,
                      payment: payment,
                      trainer: route?.params?.trainer,
                      sessionStart: route?.params?.sessionStart ? true : false,
                      appointByTrainer: route?.params?.appointByTrainer
                        ? true
                        : false,
                      appointByTime: route?.params?.appointByTime
                        ? true
                        : false,
                      slot: route?.params?.slot,
                    })
                  }>
                  <Feather
                    name="edit"
                    color={colors.black}
                    size={18}
                    style={styles.icon}
                  />
                </TouchableOpacity>

                <Text style={styles.addPaymentText}> {payment?.cardNum}</Text>
              </View>
            ) : (
              <View style={{flexDirection: 'row'}}>
                <Ionicons
                  name="add-circle"
                  color={colors.greenIcon}
                  size={18}
                  style={styles.icon}
                />
                <Text style={styles.addPaymentText}>Add payment type</Text>
              </View>
            )}
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            !coupon && navigation.navigate('ApplyCoupon');
          }}>
          <View style={[styles.row, styles.card, styles.borderBottom]}>
            <Text style={styles.cardText}>Coupon</Text>

            <View>
              <Text style={styles.symbol}>
                {' '}
                <Text style={[styles.addPaymentText, styles.size]}>
                  {coupon}{' '}
                </Text>
                ›
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={[styles.padding, styles.row]}>
          <Text style={styles.head2}>Your Cost</Text>
          <Text style={styles.head2}>${amount}</Text>
        </View>

        <TouchableOpacity
          disabled={payment?.cardNum ? false : true}
          onPress={confirmAndPay}>
          <View
            style={payment?.cardNum ? styles.buttonView : styles.disabledBtn}>
            <Text style={styles.buttonText}> Confirm and Pay</Text>
          </View>
        </TouchableOpacity>
        {isModalVisible && (
          <Modal style={styles.modalView} isVisible={isModalVisible}>
            <Image source={images.greenCheck} style={styles.greenIcon} />
            <TouchableOpacity onPress={toggleModal}>
              <View
                style={{
                  position: 'relative',
                  bottom: sizes.screenHeight * 0.25,
                  left: sizes.screenWidth * 0.85,
                }}></View>
            </TouchableOpacity>

            <View style={styles.texcon}>
              <Text style={styles.text111}>You're All Set!</Text>
            </View>
            <View style={styles.texcon1}>
              <Text style={styles.text1}>
                When you're ready, tap below and we'll connect you with your
                consultant.
              </Text>
            </View>
            <View style={[styles.texcon1, styles.paddingTop]}>
              <Text style={styles.text1}>
                To help your session go smoothly, we recommend that you:
              </Text>
              <View style={[styles.row2, styles.paddingTop]}>
                <Entypo
                  name="dot-single"
                  color={colors.disabledBg2}
                  size={25}
                />
                <Text style={styles.text2}> Sit in a quiet, private space</Text>
              </View>
              <View style={[styles.row2]}>
                <Entypo
                  name="dot-single"
                  color={colors.disabledBg2}
                  size={25}
                />
                <Text style={styles.text2}> Connect to strong WiFi</Text>
              </View>
              <View style={[styles.row2]}>
                <Entypo
                  name="dot-single"
                  color={colors.disabledBg2}
                  size={25}
                />
                <Text style={styles.text2}>
                  {' '}
                  Turn off other devices, like TV or music
                </Text>
              </View>
            </View>
            <View style={styles.buttnView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('FindingProvider');
                  setIsModalVisible(false);
                }}>
                <View style={styles.buttonView2}>
                  <Text style={styles.buttonText}>Start session now</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* <View style={styles.noBtn}>
              <TouchableOpacity onPress={toggleModal}>
                <View style={styles.buttonView1}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </View>
              </TouchableOpacity>
            </View> */}
          </Modal>
        )}
        {appointMsg !== '' && (
          <Error
            title={oops ? 'Oops!' : 'Congratulations!'}
            message={appointMsg}
            screen={'Home'}
          />
        )}
        {loader && <Loader />}
      </ScrollView>
    </SafeAreaView>
  );
}
