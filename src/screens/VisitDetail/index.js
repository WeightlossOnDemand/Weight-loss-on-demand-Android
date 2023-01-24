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
  Platform,
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
import {recentVisit} from '../../services/utilities/api/auth';
import {useSelector} from 'react-redux';
import moment from 'moment';
import {useIsFocused} from '@react-navigation/native';

export const VisitDetail = ({navigation, route}) => {
  const [show, setshow] = useState(false);
  const token = useSelector(state => state.token);
  const [trainer, setTrainer] = useState();
  const [user, setUser] = useState();
  const [visit, setVisit] = useState();

  const [msgList, setMsgList] = useState([]);

  const isVisible = useIsFocused();

  const Toogle = () => {
    setshow(!show);
  };
  useEffect(() => {
    getPastVisit();
    getChat();
  }, [isVisible]);

  const getPastVisit = async () => {
    try {
      let response = await recentVisit(token);
      console.log(response.data.visit);
      setVisit(response.data.visit);
      setTrainer(response.data.trainer[0]);
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const getChat = async () => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', token);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch('https://dashboard.weightlossondemand.com/backend/api/chat_display', requestOptions)
      .then(response => response.json())
      .then(result => {
        setMsgList(result.data);
        console.log(result.data);
      })
      .catch(error => console.log('error', error));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header dark={true} />
      </View>
      <ScrollView>
        <View style={styles.container1}>
          <View>
            <Text style={styles.hedtext}>Session Details</Text>
          </View>
          <View style={styles.flex}>
            <View>
              <Text style={styles.providertex}>Consultant Name</Text>
              <Text style={styles.subhead}>{trainer?.tr_name}</Text>
            </View>
            <View>
              <View style={styles.img}>
                <Image
                  style={Platform.OS !== 'ios' ? styles.trImg : styles.trImgIOS}
                  source={{uri: trainer?.images}}
                />
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.subhead}>Date</Text>
            <Text style={styles.subhead}>
              {moment(visit?.created_at).format('DD/MM/YYYY')}
            </Text>
          </View>
          <View style={styles.crd}>
            {/* <View style={styles.flex2}>
              <View style={styles.imgicon}>
                <Image style={{width: '100%', height: '100%'}} source={book} />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('GenerateReciept')}>
                <Text style={styles.litext}>Get a receipt</Text>
              </TouchableOpacity>
            </View> */}
            <View style={styles.flex2}>
              <View style={styles.imgicon}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={question}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  msgList?.length
                    ? navigation.navigate('chatscreen')
                    : navigation.navigate('MessageSupport');
                }}>
                <Text style={styles.litext}>Message Support</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.crd}>
            <Text style={styles.providertex}>Notes</Text>
            <Text style={[styles.subhead, styles.border]}>
              {visit?.session_desc}
            </Text>
          </View>

          <View></View>
        </View>
      </ScrollView>
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
  },
  hedtext: {
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
    width: sizes.screenWidth * 0.2,
    height: sizes.screenHeight * 0.11,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  providertex: {
    fontSize: fontSize.large,
    color: colors.gray,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextCondensed,
  },
  subhead: {
    fontSize: fontSize.h6,
    color: colors.gray,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextLight,
  },
  flex2: {
    flexDirection: 'row',
    // marginBottom: sizes.screenHeight * 0.02,
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
    width: sizes.screenWidth * 0.09,
    height: sizes.screenHeight * 0.05,
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
    marginTop: sizes.screenHeight * 0.02,
  },
  mt: {
    marginTop: sizes.screenHeight * 0.02,
  },
  trImg: {
    width: '100%',
    height: '100%',
    borderRadius: sizes.screenWidth * 0.5,
  },
  trImgIOS: {
    width: sizes.screenWidth * 0.32,
    height: sizes.screenHeight * 0.15,
    borderRadius: sizes.screenWidth * 0.5,
    right: sizes.screenWidth * 0.1,
  },
});
