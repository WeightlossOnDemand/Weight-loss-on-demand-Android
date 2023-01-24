import React, {useState, useEffect} from 'react';
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
  Switch,
  BackHandler,
} from 'react-native';
import Logo from '../../assets/assets/logo.png';
import {CustomTextFiel} from '../../component/textFiled';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import Modal from 'react-native-modal';
import {colors, fontFamily, fontSize, sizes} from '../../services';
import {signIn} from '../../services/utilities/api/auth';
import TouchID from 'react-native-touch-id';
import {useDispatch, useSelector} from 'react-redux';
import {storeData, trainerStack, viewClientDetails} from '../../store/actions';
import Header from '../../components/Header';
import {useIsFocused} from '@react-navigation/native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export const AddDescription = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [description, setDescription] = useState('');
  const [password, setpassword] = useState('');
  const [sigindata, setsigindata] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [identity, setIdentity] = useState('');

  const isVisible = useIsFocused();
  const token = useSelector(state => state.token);

  // useEffect(()=>{
  //   //this will fire  at the beginning and on foto changing value
  //   if(sigindata){
  //     navigation.navigate('BottomNavs')
  //   }
  //  },[sigindata])

  useEffect(() => {
    getUserVisit();
  }, [isVisible]);

  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
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
      .then(result => setIdentity(result.data.identity))
      .catch(error => console.log('error', error));
  };

  const handleDescription = () => {
    if (description !== '') {
      setLoader(true);
      console.log(description, '---->>');
      var formdata = new FormData();
      formdata.append('identity', identity);
      formdata.append('desc', description);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };

      fetch('https://dashboard.weightlossondemand.com/backend/api/session_desc', requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          console.log(result.status);
          if (result.status == 200) {
            setIsModalVisible(true);
            setErrorMessage('Description added successfully');
            dispatch(viewClientDetails(false));
          }
          setLoader(false);
        })
        .catch(error => {
          console.log('error', error);
          setLoader(false);
        });
    }
  };
  //   const Sigin = async () => {
  //     if (email && password) {
  //       console.log('works1');
  //       try {
  //         setLoader(true);
  //         console.log('works2');

  //         setTimeout(async () => {
  //           let response = await signIn(email.toLowerCase(), password);
  //           console.log(response.data);
  //           setLoader(false);
  //           if (response.data.message == 'user found') {
  //             console.log(response.data);
  //             dispatch(storeData(response.data.token));
  //             // handleBiometric(response.data.token);
  //             // if (response.data.fingerprint == 1) {
  //             // } else {
  //             //   dispatch(storeData(response.data.token));
  //             //   // navigation.navigate('BottomNavs');
  //             // }

  //             setError(false);
  //             setLoader(false);
  //             setIsModalVisible(false);
  //           } else if (response.data.message == 'Trainer found') {
  //             console.log(response.data.type);
  //             dispatch(storeData(response.data.token));
  //             setIsModalVisible(false);

  //             dispatch(trainerStack(response.data.type));
  //           } else {
  //             setTimeout(() => {
  //               setIsModalVisible(true);
  //               setErrorMessage(response.data.message);
  //               setLoader(false);
  //             }, 500);
  //             console.log('--->>', response.data.message);
  //             // setError(true);
  //           }
  //         }, 100);
  //       } catch (error) {
  //         console.log('err', error);
  //         setTimeout(() => {
  //           setError(true);
  //           setIsModalVisible(true);
  //           setErrorMessage(error.message);
  //           setLoader(false);
  //         }, 500);
  //       }
  //     }
  //   };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('backPress', () => true);
    return () => backHandler.remove();
  }, []);
  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.container}>
        <View style={styles.hederstyling}>
          <View style={styles.logoalign}>
            <Image source={Logo} style={{width: '100%', height: '100%'}} />
          </View>
        </View>

        <Text style={styles.providertex}>Consultant Description</Text>
        <View style={styles.filedContainer}>
          <View style={styles.filedcon}>
            <CustomTextFiel
              label={'Add Description'}
              value={description}
              setValue={setDescription}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        disabled={description !== '' ? false : true}
        onPress={handleDescription}>
        <View
          style={description !== '' ? styles.buttonView : styles.disabledView}>
          <Text style={styles.buttonText}>Submit</Text>
        </View>
      </TouchableOpacity>
      {loader && <Loader />}
      {/* {error ? <Error title={'Oops!'} message={errorMessage} />: null} */}
      <View style={styles.color2}>
        {isModalVisible && (
          <Modal style={styles.modalView} isVisible={isModalVisible}>
            <View style={styles.texcon}>
              {/* <Text style={styles.text111}>Congrats!</Text> */}
            </View>
            <View style={styles.texcon1}>
              <Text style={styles.text1}>{errorMessage}</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setIsModalVisible(false);
                  navigation.navigate('TrainerAppointment');
                }}>
                <View style={styles.buttonView}>
                  <Text style={styles.buttonText}>OK</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    paddingLeft: deviceWidth * 0.02,
    paddingRight: deviceWidth * 0.04,
    paddingTop: deviceHeight * 0.03,
  },
  logoalign: {
    width: deviceWidth * 0.4,
    height: deviceHeight * 0.06,
  },
  hederstyling: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fontstyleigin: {
    fontSize: fontSize.h5,
    color: '#be1d2d',
    fontWeight: '700',
    fontFamily: fontFamily.appTextRegular,
  },
  filedContainer: {
    paddingTop: deviceHeight * 0.07,
  },
  filedcon: {
    paddingLeft: deviceWidth * 0.01,
    marginBottom: deviceHeight * 0.03,
  },
  filedcontext: {
    marginTop: deviceHeight * 0.03,
    paddingLeft: deviceWidth * 0.01,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: deviceHeight * 0.02,
  },
  text: {
    fontSize: fontSize.h6,
    color: '#000',
    fontFamily: fontFamily.appTextRegular,
  },
  forgotpass: {
    color: '#be1d2d',
    fontSize: fontSize.h6,
    fontWeight: '700',
    marginLeft: deviceWidth * 0.01,
    fontFamily: fontFamily.appTextHeading,
  },
  but: {
    backgroundColor: colors.secondary,
    width: deviceWidth * 0.93,
    height: sizes.screenHeight * 0.06,
    justifyContent: 'center',
    left: sizes.TinyMargin,
    alignItems: 'center',
  },
  filedconbutton: {
    width: sizes.screenWidth * 0.9,
    paddingTop: deviceHeight * 0.0,
    marginBottom: deviceHeight * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledView: {
    alignSelf: 'center',
    backgroundColor: colors.disabledBg,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.92,
    alignItems: 'center',
    justifyContent: 'center',
  },
  color2: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
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
  texcon: {
    paddingBottom: sizes.screenHeight * 0.1,
  },
  texcon1: {
    bottom: sizes.screenHeight * 0.08,
  },
  text111: {
    fontSize: fontSize.h4,
    color: colors.white,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextHeading,
    paddingLeft: sizes.screenWidth * 0.035,
  },
  text1: {
    fontSize: fontSize.large,
    color: colors.white,
    fontFamily: fontFamily.appTextLight,
    paddingLeft: sizes.screenWidth * 0.035,
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
  },
  buttonView: {
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.89,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  providertex: {
    top: sizes.screenHeight * 0.05,
    marginBottom: sizes.screenHeight * 0.01,
    fontSize: fontSize.large,
    color: colors.gray,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextCondensed,
    left: sizes.screenWidth * 0.02,
  },
});
