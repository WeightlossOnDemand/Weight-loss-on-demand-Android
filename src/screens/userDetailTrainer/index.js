import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {CustomTextFiel} from '../../component/textFiled';
import {colors, sizes, fontSize, fontFamily} from '../../services';
import ladyy from '../../assets/assets/ladyy.jpg';
import calender from '../../assets/assets/calender.png';
import favourite from '../../assets/assets/favourite.jpeg';
import book from '../../assets/assets/book.png';
import question from '../../assets/assets/question.png';
import share from '../../assets/assets/share.png';
import {useIsFocused} from '@react-navigation/native';
import {selectedTrainer} from '../../services/utilities/api/auth';
import Loader from '../../components/Loader';
import moment from 'moment';

export const userDetailTrainer = ({navigation, route}) => {
  const [show, setshow] = useState(false);
  const [loader, setLoader] = useState(false);
  const [trainer, setTrainer] = useState();
  const [currentDate, setCurrentDate] = useState('');
  const [slot, setSlot] = useState([]);
  const [user, setUser] = useState('');
  const [appointTime, setAppointTime] = useState('');
  const [description, setDescription] = useState('');

  const [questions, setQuestions] = useState('');
  // const {tr_id} = route?.params?.trainer;
  const isVisible = useIsFocused();

  const Toogle = () => {
    setshow(!show);
  };

  useEffect(() => {
    getSession();
  }, [isVisible]);
  console.log(route?.params);

  useEffect(() => {
    let date = new Date().toJSON();
    let current = moment(date).format('DD/MM/YYYY');
    setCurrentDate(current);
  }, []);

  const getSession = () => {
    console.log(route?.params?.ap_id);
    setLoader(true);

    if (route?.params?.ap_id) {
      var requestOptions = {
        method: 'POST',
        redirect: 'follow',
      };
      fetch(
        `https://dashboard.weightlossondemand.com/backend/api/apt_details/${route?.params?.ap_id}`,
        // `https://dashboard.weightlossondemand.com/backend/api/apt_details/1`,
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          // console.log('-------------->>>', result.data.response_1);
          let questions = {
            response_1: result.data.response_1,
            response_2: result.data.response_2,
            response_3: result.data.response_3,
            response_4: result.data.response_4,
            response_5: result.data.response_5,
            response_6: result.data.response_6,
            response_7: result.data.response_7,
            response_8: result.data.response_8,
            response_9: result.data.response_9,
            response_10: result.data.response_10,
            response_11: result.data.response_11,
            response_12: result.data.response_12,
            response_13: result.data.response_13,
            response_14: result.data.response_14,
            response_15: result.data.response_15,
            response_16: result.data.response_16,
            response_17: result.data.response_17,
            response_18: result.data.response_18,
            response_19: result.data.response_19,
            response_20: result.data.response_20,
            response_21: result.data.response_21,
            response_22: result.data.response_22,
            response_23: result.data.response_23,
            response_24: result.data.response_24,
            response_25: result.data.response_25,
            response_26: result.data.response_26,
            response_27: result.data.response_27,
            response_28: result.data.response_28,
            response_29: result.data.response_29,
            response_30: result.data.response_30,
            response_31: result.data.response_31,
            response_32: result.data.response_32,
            response_33: result.data.response_33,
            response_34: result.data.response_34,
            response_35: result.data.response_35,
            response_36: result.data.response_36,
            response_37: result.data.response_37,
            response_38: result.data.response_38,
            response_39: result.data.response_39,
            response_40: result.data.response_40,
            response_41: result.data.response_41,
            response_42: result.data.response_42,
            response_43: result.data.response_43,
            response_44: result.data.response_44,
            response_45: result.data.response_45,
            response_46: result.data.response_46,
            response_47: result.data.response_47,
            response_48: result.data.response_48,
            response_49: result.data.response_49,
            response_50: result.data.response_50,
          };
          setQuestions(questions);
          setAppointTime(result.data.apt_time);
          setUser(result.user);
          setLoader(false);
        })
        .catch(error => {
          console.log('error', error);
          setLoader(false);
        });
    } else if (route?.params?.visit_id) {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      console.log('works--------------->>>');
      fetch(
        `https://dashboard.weightlossondemand.com/backend/api/visit_details/${route?.params?.visit_id}`,
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          let questions = {
            response_1: result.data.response_1,
            response_2: result.data.response_2,
            response_3: result.data.response_3,
            response_4: result.data.response_4,
            response_5: result.data.response_5,
            response_6: result.data.response_6,
            response_7: result.data.response_7,
            response_8: result.data.response_8,
            response_9: result.data.response_9,
            response_10: result.data.response_10,
            response_11: result.data.response_11,
            response_12: result.data.response_12,
            response_13: result.data.response_13,
            response_14: result.data.response_14,
            response_15: result.data.response_15,
            response_16: result.data.response_16,
            response_17: result.data.response_17,
            response_18: result.data.response_18,
            response_19: result.data.response_19,
            response_20: result.data.response_20,
            response_21: result.data.response_21,
            response_22: result.data.response_22,
            response_23: result.data.response_23,
            response_24: result.data.response_24,
            response_25: result.data.response_25,
            response_26: result.data.response_26,
            response_27: result.data.response_27,
            response_28: result.data.response_28,
            response_29: result.data.response_29,
            response_30: result.data.response_30,
            response_31: result.data.response_31,
            response_32: result.data.response_32,
            response_33: result.data.response_33,
            response_34: result.data.response_34,
            response_35: result.data.response_35,
            response_36: result.data.response_36,
            response_37: result.data.response_37,
            response_38: result.data.response_38,
            response_39: result.data.response_39,
            response_40: result.data.response_40,
            response_41: result.data.response_41,
            response_42: result.data.response_42,
            response_43: result.data.response_43,
            response_44: result.data.response_44,
            response_45: result.data.response_45,
            response_46: result.data.response_46,
            response_47: result.data.response_47,
            response_48: result.data.response_48,
            response_49: result.data.response_49,
            response_50: result.data.response_50,
          };
          setQuestions(questions);
          console.log('works-------------->>>', result.data.session_desc);
          setDescription(result.data.session_desc);
          setAppointTime(result.data.updated_at);
          setUser(result.user);
          setLoader(false);
        })

        .catch(error => {
          console.log('error', error);
          setLoader(false);
        });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header dark={true} />
      </View>
      <ScrollView>
        <View style={styles.container1}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {route?.params?.ap_id ? (
              <Text
                style={
                  Platform.OS !== 'ios' ? styles.hedtext : styles.hedtextIOS
                }>
                Appointment Time:{' '}
                {moment(appointTime).format('DD/MM/YY hh:mm: A')}
              </Text>
            ) : (
              <Text
                style={
                  Platform.OS !== 'ios' ? styles.hedtext : styles.hedtextIOS
                }>
                Session Time:
                {moment(appointTime).format('DD/MM/YY hh:mm: A')}
              </Text>
            )}
          </View>
          <View style={styles.flex}>
            <View>
              <Text style={styles.providertex}>{trainer?.type}</Text>
            </View>
            <View>
              {/* <View style={styles.img}>
                <Image
                  style={Platform.OS !== 'ios' ? styles.trImg : styles.trImgIOS}
                  source={{uri: route?.params?.trainer?.images}}
                />
              </View> */}
            </View>
          </View>

          <View style={styles.crd}>
            <Text style={styles.providertex}>Client Name</Text>
            {user?.middle_name ? (
              <Text style={[styles.subhead, styles.border]}>
                {user?.first_name} {user?.middle_name} {user?.last_name}
              </Text>
            ) : (
              <Text style={[styles.subhead, styles.border]}>
                {user?.first_name} {user?.last_name}
              </Text>
            )}

            {/* {show ? (
              <View>
                <Text style={[styles.subhead, styles.border]}>
                  She completed her Medical Degree from Gandhi Medical College,
                  Hyderabad, Andhra Pradesh, India, M.B.B.S. She completed her
                  Family Practice residency from The Brooklyn Hospital Center,
                  Member of the New York-Presbyterian Healthcare System,
                  affiliate of Weill Medical College of Cornell University.
                  Brooklyn, New York. She completed her Obstetrics Fellowship
                  from Santa Clara Valley Medical Center, San Jose, California.
                </Text>
                <Text style={[styles.subhead, styles.border]}>
                  Brooklyn, New York. She completed her Obstetrics Fellowship
                  from Santa Clara Valley Medical Center, San Jose, California.
                  She is Family Practice Board Certified physician. Besides
                  English she speaks Hindi, Telugu, and medical Spanish. She is
                  a member of the American Academy of Family Medicine.
                </Text>
              </View>
            ) : null} */}

            {/* <View style={styles.borderbottom}></View> */}
            {/* <View>
              {show ? (
                <TouchableOpacity onPress={Toogle}>
                  <Text style={styles.addanother}>READ LESS</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={Toogle}>
                  <Text style={styles.addanother}>READ MORE</Text>
                </TouchableOpacity>
              )}
            </View> */}
          </View>
          <View style={styles.crd}>
            <Text style={styles.providertex}>Email</Text>

            <Text style={[styles.subhead, styles.border]}>{user?.email}</Text>
          </View>
          <View style={styles.crd}>
            <Text style={styles.providertex}>DOB</Text>

            <Text style={[styles.subhead, styles.border]}>
              {user?.date_of_birth}
            </Text>
          </View>
          {/* <View style={styles.crd}>
            <Text style={styles.providertex}>Age</Text>

            <Text style={[styles.subhead, styles.border]}>{user?.age}</Text>
          </View> */}
          <View style={styles.crd}>
            <Text style={styles.providertex}>Gender</Text>

            <Text style={[styles.subhead, styles.border]}>{user?.gender}</Text>
          </View>
          <View style={styles.crd}>
            <Text style={styles.providertex}>Smoking Status</Text>

            <Text style={[styles.subhead, styles.border]}>
              {user?.smoking_status}
            </Text>
          </View>
          <View style={styles.crd}>
            <Text style={styles.providertex}>Marital Status</Text>

            <Text style={[styles.subhead, styles.border]}>
              {user?.marital_status}
            </Text>
          </View>
          {/* <View style={styles.crd}>
            <Text style={styles.providertex}>Occupation</Text>

            <Text style={[styles.subhead, styles.border]}>
              {user?.occupation}
            </Text>
          </View> */}
          {/* <View style={styles.crd}>
            <Text style={styles.providertex}>Working Hour</Text>

            <Text style={[styles.subhead, styles.border]}>
              {user?.work_hours}
            </Text>
          </View> */}
          {/* <View style={styles.crd}>
            <Text style={styles.providertex}>Last Education</Text>

            <Text style={[styles.subhead, styles.border]}>
              {user?.last_education}
            </Text>
          </View> */}
          <View style={styles.crd}>
            <Text style={styles.providertex}>Phone</Text>

            <Text style={[styles.subhead, styles.border]}>{user?.phone}</Text>
          </View>
          <View style={styles.crd}>
            <Text style={styles.providertex}>City</Text>

            <Text style={[styles.subhead, styles.border]}>{user?.city}</Text>
          </View>
          <View style={styles.crd}>
            <Text style={styles.providertex}>Notes</Text>

            <Text style={[styles.subhead, styles.border]}>{description}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttnView}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AllQuestions', {questions: questions})
          }>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>View Questionnaires</Text>
          </View>
        </TouchableOpacity>
      </View>
      {loader && <Loader />}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container1: {
    padding: sizes.screenWidth * 0.05,
    paddingBottom: sizes.screenHeight * 0.2,
  },
  hedtext: {
    // marginBottom: sizes.screenHeight * 0.0,
    fontSize: fontSize.h6,
    color: colors.black,
    fontWeight: 'bold',
  },
  hedtextIOS: {
    // marginBottom: sizes.screenHeight * 0.0,
    fontSize: fontSize.h6,
    color: colors.black,
    fontWeight: 'bold',
  },
  hedtext1: {
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextHeading,
  },
  img: {
    marginTop: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.5,
    height: sizes.screenHeight * 0.27,
  },
  flex: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  providertex: {
    top: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.01,
    fontSize: fontSize.large,
    color: colors.gray,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextCondensed,
  },
  subhead: {
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextLight,
  },
  subheadIOS: {
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextLight,
  },
  flex2: {
    flexDirection: 'row',
    marginBottom: sizes.screenHeight * 0.02,
    alignItems: 'center',
  },
  litext: {
    fontSize: fontSize.large,
    color: colors.gray,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextLight,
    marginLeft: sizes.screenWidth * 0.03,
  },
  litext1: {
    fontSize: fontSize.large,
    color: colors.gray,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextLight,
  },
  litext3: {
    fontSize: fontSize.large,
    color: colors.secondary,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextLight,
  },

  imgicon: {
    width: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.04,
  },
  crd: {
    paddingBottom: sizes.screenHeight * 0.03,
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.0,
    borderRadius: sizes.screenWidth * 0.02,
    // height:sizes.screenHeight * 0.24,
    width: sizes.screenWidth * 0.9,
    borderWidth: 1,
    borderColor: colors.lightGray,
    padding: sizes.screenWidth * 0.04,
    shadowColor: '#000',
    backgroundColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  padding: {
    paddingRight: sizes.screenWidth * 0.1,
  },
  border: {
    marginTop: sizes.baseMargin,
    fontSize: fontSize.h6,
    color: colors.gray,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextLight,
    // marginLeft:sizes.screenWidth*0.03,
  },
  borderbottom: {
    paddingTop: sizes.screenHeight * 0.03,

    borderBottomWidth: sizes.screenWidth * 0.002,
  },
  addanother: {
    paddingTop: sizes.screenHeight * 0.04,
    fontSize: fontSize.large,
    color: colors.secondary,
    fontWeight: 'bold',
  },
  flex3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: sizes.screenHeight * 0.03,
  },
  mt: {
    marginTop: sizes.screenHeight * 0.02,
  },
  avialbox: {
    width: sizes.screenWidth * 0.25,
    height: sizes.screenHeight * 0.12,
    borderWidth: sizes.screenWidth * 0.002,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.secondary,
  },
  tex: {
    fontSize: fontSize.large,
    color: colors.secondary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  texIOS: {
    fontSize: fontSize.medium,
    color: colors.secondary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttnView: {
    marginLeft: sizes.screenWidth * 0.06,
    // marginTop: sizes.screenHeight * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: sizes.screenHeight * 0.9,
  },
  buttonView: {
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.07,
    width: sizes.screenWidth * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.2,
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextHeading,
    fontWeight: '600',
  },
  trImg: {
    width: '100%',
    height: '100%',
    borderRadius: sizes.screenWidth * 0.5,
  },
  trImgIOS: {
    width: sizes.screenWidth * 0.45,
    height: sizes.screenHeight * 0.21,
    borderRadius: sizes.screenWidth * 0.5,
    alignSelf: 'center',
  },
});
