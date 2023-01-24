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

export const ProviderDetail = ({navigation, route}) => {
  const [show, setshow] = useState(false);
  const [loader, setLoader] = useState(false);
  const [trainer, setTrainer] = useState();
  const [currentDate, setCurrentDate] = useState('');
  const [slot, setSlot] = useState([]);
  const [currentDTime, setCurrentTime] = useState('');
  // const {tr_id} = route?.params?.trainer;
  const isVisible = useIsFocused();

  const Toogle = () => {
    setshow(!show);
  };

  useEffect(() => {
    getTrainer();
  }, [isVisible]);

  useEffect(() => {
    let date = new Date().toJSON();
    let current = moment(date).format('DD/MM/YYYY');
    setCurrentDate(current);
  }, []);

  const getTrainer = () => {
    setLoader(true);
    setTimeout(async () => {
      try {
        const time = new Date().getTime();
        let currentTime =`${moment(time).format('hh:mma')}`;

        let response = await selectedTrainer(
          route?.params?.trainer?.tr_id,
          currentTime,
        );
        setTrainer(response.data.trainers);
        console.log('--------slots-->>', response.data.slots);
        setSlot(response.data.slots);
        setLoader(false);
      } catch (error) {
        console.log('--->', error);
        setLoader(false);
      }
    }, 100);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header dark={true} />
      </View>
      <ScrollView>
        <View style={styles.container1}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={
                Platform.OS !== 'ios' ? styles.hedtext : styles.hedtextIOS
              }>
              {trainer?.tr_name}
            </Text>
          </View>
          <View style={styles.flex}>
            <View>
              <Text style={styles.providertex}>{trainer?.type}</Text>
            </View>
            <View>
              <View style={styles.img}>
                <Image
                  style={Platform.OS !== 'ios' ? styles.trImg : styles.trImgIOS}
                  source={{uri: route?.params?.trainer?.images}}
                />
              </View>
            </View>
          </View>
          <ScrollView horizontal={true} style={styles.scrollWidth}>
            {slot?.map((item, index) => {
              // console.log('curr--->', currentDTime);
              // console.log(item.sl_time);
              return (
                <View style={styles.flex3}>
                  <View style={styles.paddingBottom}>
                    {/* {item?.tr_date > currentDate ||
                      (item?.tr_date === currentDate && ( */}
                        {/* // item?.sl_time  currentDTime &&
                        // moment(item?.sl_time).isAfter(currentDTime) && */}
                        <ScrollView>
                          <View style={styles.avialbox}>
                            <TouchableOpacity
                              onPress={() =>
                                navigation.navigate('appointmentreqest', {
                                  slot: item,
                                  trainer: trainer,
                                })
                              }>
                              <Text
                                style={
                                  Platform.OS !== 'ios'
                                    ? styles.tex
                                    : styles.texIOSaxx
                                }>
                                {item?.tr_day}
                              </Text>
                              <Text
                                style={
                                  Platform.OS !== 'ios'
                                    ? styles.tex
                                    : styles.texIOS
                                }>
                                {item?.tr_date}
                              </Text>
                              <Text
                                style={
                                  Platform.OS !== 'ios'
                                    ? styles.tex
                                    : styles.texIOS
                                }>
                                {item.sl_time}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </ScrollView>
                      {/* ))} */}
                  </View>
                </View>
              );
            })}

            {/* <View style={styles.avialbox}>
              <TouchableOpacity
                onPress={() => navigation.navigate('appointmentreqest')}>
                <Text style={styles.tex}>Thus</Text>
                <Text style={styles.tex}>09/29</Text>
                <Text style={styles.tex}>10:30</Text>
              </TouchableOpacity>
            </View> */}
            {/* <View style={styles.avialbox}>
              <TouchableOpacity
                onPress={() => navigation.navigate('appointmentreqest')}>
                <Text style={styles.tex}>Thus</Text>
                <Text style={styles.tex}>09/29</Text>
                <Text style={styles.tex}>10:30</Text>
              </TouchableOpacity>
            </View> */}
          </ScrollView>

          <View style={styles.crd}>
            <Text style={styles.providertex}>Consultant Description</Text>
            <Text style={[styles.subhead, styles.border]}>
              {trainer?.tr_desc}
            </Text>
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
            <Text
              style={
                Platform.OS !== 'ios' ? styles.subhead : styles.subheadIOS
              }>
              Consultant type
            </Text>
            <Text style={styles.providertex}>{trainer?.focus_area}</Text>
          </View>
          <View style={styles.crd}>
            <Text
              style={
                Platform.OS !== 'ios' ? styles.subhead : styles.subheadIOS
              }>
              Language
            </Text>
            <Text style={styles.providertex}>{trainer?.languages}</Text>
          </View>

          <View style={styles.crd}>
            <Text
              style={
                Platform.OS !== 'ios' ? styles.subhead : styles.subheadIOS
              }>
              Qualifications
            </Text>
            <Text style={styles.providertex}>{trainer?.qualifications}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttnView}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ChooseAppointment', {trainer: trainer})
          }>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>View Availbility</Text>
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
    marginBottom: sizes.screenHeight * 0.0,
    fontSize: fontSize.h3,
    color: colors.black,
    fontWeight: 'bold',
  },
  hedtextIOS: {
    marginBottom: sizes.screenHeight * 0.0,
    fontSize: fontSize.h5,
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
    marginTop: sizes.screenHeight * 0.03,
  },
  mt: {
    marginTop: sizes.screenHeight * 0.02,
  },
  avialbox: {
    width: sizes.screenWidth * 0.35,
    height: sizes.screenHeight * 0.12,
    borderWidth: sizes.screenWidth * 0.002,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.secondary,
    padding: sizes.screenWidth * 0.05,
    marginRight: 10,
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
    // width: sizes.screenWidth,
    // height: '100%',
    // borderRadius: sizes.screenWidth * 0.5,
    width: sizes.screenWidth * 0.41,
    height: sizes.screenHeight * 0.21,
    borderRadius: sizes.screenWidth * 0.5,
    alignSelf: 'center',
  },
  trImgIOS: {
    width: sizes.screenWidth * 0.45,
    height: sizes.screenHeight * 0.21,
    borderRadius: sizes.screenWidth * 0.5,
    alignSelf: 'center',
  },
  paddingBottom: {
    // paddingRight: sizes.TinyMargin,
    // margin: sizes.screenWidth * 0.03,
    // padding:5
  },
  scrollWidth: {},
});
