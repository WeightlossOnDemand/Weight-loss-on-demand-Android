import React, {useEffect, useState} from 'react';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors, fontFamily, fontSize, sizes} from '../../services';
import moment from 'moment';

import Header from '../../components/Header';
import Modal from 'react-native-modal';
import {getUser} from '../../services/utilities/api/auth';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {trainerAvailable} from '../../store/actions';

export const VisitScreen = ({navigation, route}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [availableTrainer, setAvailableTrainer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const token = useSelector(state => state.token);
  const isVisible = useIsFocused();

  const dispatch = useDispatch();
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    getUserDetails();
  }, [isVisible]);

  const getUserDetails = async () => {
    try {
      let response = await getUser(token);
      setUserName(response.data.data.first_name);
      setMiddleName(response.data.data.middle_name);
      setLastName(response.data.data.last_name);
      // dispatch(storeUserData(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  const handleTrainerAvailability = () => {
    if (route?.params?.bookingStatus == false) {
      const time = new Date().getTime();

      let date = new Date().toJSON();
      let currentDate = moment(date).format('DD/MM/YYYY');
      console.log(currentDate);
      let currentTime = moment(time).format('hh:mma');
      console.log('----->>',currentTime);
      var formdata = new FormData();
      formdata.append('sl_date', currentDate);
      formdata.append('sl_time', currentTime);
      // formdata.append('sl_time', '06:00');

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };

      fetch('https://dashboard.weightlossondemand.com/backend/api/finding_VTr', requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log('-------->>',result);
          if (result.data) {
            console.log(result.data.tr_id);
            dispatch(
              trainerAvailable(
                result?.data.tr_id,
                result?.data.tr_name,
                result?.data.images,
                result?.data.tr_amount,
              ),
            );
            navigation.navigate('reasonVisit');
            // setAvailableTrainer(result.data)
          } else {
            // alert(result.message, 'okkk');
            setModalVisible(true);
            setErrorMessage(result.message);
          }
        })
        .catch(error => console.log('error', error));
    } else {
      navigation.navigate('reasonVisit');
    }

    // () => navigation.navigate('reasonVisit')
  };
  let data = useSelector(state => state.tr_id);
  // console.log(route?.params?.to);

  const handleNext = () => {
    if (route?.params?.to === 'reasonVisit') {
      handleTrainerAvailability();
      // navigation.navigate('reasonVisit');

    } else {
      navigation.navigate('HowToSchedule');
    }

    // ? handleTrainerAvailability
    // : navigation.navigate('HowToSchedule');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Header dark={true} />
        </View>
        <View style={styles.container2}>
          <View>
            <Text style={styles.visitfortext}>Who is this session for?</Text>
          </View>

          <View style={styles.buttondiv}>
            <View style={styles.buttonchilddiv}>
              <TouchableOpacity
                // onPress={handleTrainerAvailability}
                onPress={handleNext}>
                <View style={[styles.row, styles.card]}>
                  <View
                    style={
                      Platform.OS !== 'ios'
                        ? styles.namefirt
                        : styles.namefirtIOS
                    }>
                    <Text style={styles.fname}>{userName.charAt(0)}</Text>
                  </View>
                  <View>
                    {middleName == '' ? (
                      <Text style={styles.cardText}>
                        {userName} {middleName} {lastName}
                      </Text>
                    ) : (
                      <Text style={styles.cardText}>
                        {'    '}
                        {userName} {lastName}
                      </Text>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            {/* style={styles.cardText} */}
            {/* <View style={styles.buttonchilddiv}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('addchildscreen', {
                    to: route?.params?.to,
                    GoogelFit: route?.params?.GoogelFit,
                  })
                }>
                <View style={[styles.row, styles.card]}>
                  <View style={styles.namefirt}>
                    <Text style={styles.fname}>+</Text>
                  </View>
                  <View>
                    <Text style={styles.cardText}>{'   '}My Child</Text>
                    <Text style={styles.faqText}>{'   '}Must be under 18</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonchilddiv}>
              <TouchableOpacity onPress={toggleModal}>
                <View style={[styles.row, styles.card]}>
                  <View>
                    <Text style={styles.cardText}>Someone Else ?</Text>
                    <Text style={styles.faqText2}>
                      If the patient is over 18, they need to create their own
                      account, even if they are dependent on your health plan
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View> */}
          </View>
        </View>
        <View style={styles.color}>
          {isModalVisible && (
            <Modal style={styles.modalView} isVisible={isModalVisible}>
              <View style={styles.texcon}>
                <Text style={styles.text111}>Oops!</Text>
              </View>
              <View style={styles.texcon1}>
                <Text style={styles.text1}>
                  {errorMessage}
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                  }}>
                  <View style={styles.buttonView}>
                    <Text style={styles.buttonText}>OK</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Modal>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  color: {
    backgroundColor: '#fafafa',
    // height: sizes.screenHeight,
  },
  modalView: {
    width: sizes.screenWidth,
    backgroundColor: '#0e0e0e',
    opacity: 0.9,
    marginLeft: sizes.screenWidth * 0.001,
    padding: 10,
    position: 'absolute',
    top: -20,
    height: sizes.screenHeight,
  },
  container2: {
    paddingLeft: sizes.screenWidth * 0.05,
    paddingRight: sizes.screenWidth * 0.05,
  },
  visitfortext: {
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  symbol: {
    color: colors.secondary,
    fontSize: fontSize.h4,
    bottom: 1,
  },

  cardText: {
    color: colors.primary,
    fontSize: fontSize.h6,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextRegular,
  },
  faqText: {
    color: colors.secondary,
    // fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextRegular,
  },
  faqText2: {
    marginTop: sizes.screenHeight * 0.02,
    color: colors.secondary,
    fontSize: fontSize.h7,
    fontFamily: fontFamily.appTextRegular,
  },
  card: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * -0.01,
    width: sizes.screenWidth * 0.9,
    borderRadius: sizes.screenWidth * 0.02,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  namefirt: {
    justifyContent: 'center',
    alignItems: 'center',
    width: sizes.screenWidth * 0.11,
    height: sizes.screenHeight * 0.06,
    backgroundColor: colors.secondary,
    borderRadius: sizes.screenWidth * 0.5,
  },
  namefirtIOS: {
    justifyContent: 'center',
    alignItems: 'center',
    width: sizes.screenWidth * 0.13,
    height: sizes.screenHeight * 0.06,
    backgroundColor: colors.secondary,
    borderRadius: sizes.screenWidth * 0.5,
  },
  fname: {
    color: colors.white,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextMedium,
  },
  buttondiv: {
    marginTop: sizes.screenHeight * 0.05,
  },
  buttonchilddiv: {
    marginBottom: sizes.screenHeight * 0.03,
  },
  text111: {
    fontSize: fontSize.h4,
    color: colors.white,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextHeading,
  },
  texcon: {
    bottom: sizes.screenHeight * 0.1,
  },
  texcon1: {
    bottom: sizes.screenHeight * 0.08,
  },
  text1: {
    fontSize: fontSize.large,
    color: colors.white,
    fontFamily: fontFamily.appTextLight,
  },
  buttnView: {
    // marginRight:sizes.screenWidth*0.06,
    marginTop: sizes.screenHeight * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
  },
  buttonView: {
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.92,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView1: {
    borderWidth: 1,
    borderColor: colors.white,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.91,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
