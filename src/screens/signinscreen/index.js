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
} from 'react-native';
import Logo from '../../assets/assets/logo.png';
import {CustomTextFiel} from '../../component/textFiled';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import Modal from 'react-native-modal';
import {colors, fontFamily, fontSize, sizes} from '../../services';
import {signIn} from '../../services/utilities/api/auth';
import TouchID from 'react-native-touch-id';
import {useDispatch} from 'react-redux';
import {storeData, trainerStack} from '../../store/actions';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const optionalConfigObject = {
  title: 'Authentication Required', // Android
  imageColor: '#e00606', // Android
  imageErrorColor: '#ff0000', // Android
  sensorDescription: 'Touch sensor', // Android
  sensorErrorDescription: 'Failed', // Android
  cancelText: 'Cancel', // Android
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};

export const SignIn = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [sigindata, setsigindata] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // useEffect(()=>{
  //   //this will fire  at the beginning and on foto changing value
  //   if(sigindata){
  //     navigation.navigate('BottomNavs')
  //   }
  //  },[sigindata])
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const handleBiometric = token => {
    TouchID.isSupported(optionalConfigObject).then(biometricType => {
      console.log(biometricType);
      if (biometricType === 'FaceID') {
        console.log('FaceID is supported.');
      } else {
        console.log('TouchID is supported.');
        TouchID.authenticate('', optionalConfigObject)
          .then(success => {
            dispatch(storeData(token));
            // navigation.navigate('BottomNavs');

            console.log('works');
            console.log('Success', success);
            // navigation.navigate('BottomNavs');
          })
          .catch(error => {
            setErrorMessage(error);
          });
      }
    });
  };

  const Sigin = async () => {
    if (email && password) {
      console.log('works1');
      try {
        setLoader(true);
        console.log('works2');

        setTimeout(async () => {
          let response = await signIn(email.toLowerCase(), password);
          console.log(response.data);
          setLoader(false);
          if (response.data.message == 'user found') {
            console.log(response.data);
            dispatch(storeData(response.data.token));
            // handleBiometric(response.data.token);
            // if (response.data.fingerprint == 1) {
            // } else {
            //   dispatch(storeData(response.data.token));
            //   // navigation.navigate('BottomNavs');
            // }

            setError(false);
            setLoader(false);
            setIsModalVisible(false);
          } else if (response.data.message == 'Trainer found') {
            console.log(response.data.type);
            dispatch(storeData(response.data.token));
            setIsModalVisible(false);

            dispatch(trainerStack(response.data.type));
          } else {
            setTimeout(() => {
              setIsModalVisible(true);
              setErrorMessage(response.data.message);
              setLoader(false);
            }, 500);
            console.log('--->>', response.data.message);
            // setError(true);
          }
        }, 100);
      } catch (error) {
        console.log('err', error);
        setTimeout(() => {
          setError(true);
          setIsModalVisible(true);
          setErrorMessage(error.message);
          setLoader(false);
        }, 500);
      }
    }
  };

  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.container}>
        <View style={styles.hederstyling}>
          <View style={styles.logoalign}>
            <Image source={Logo} style={{width: '100%', height: '100%'}} />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('signupscreen')}>
              <Text style={styles.fontstyleigin}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.filedContainer}>
          <View style={styles.filedcon}>
            <CustomTextFiel label={'Email'} value={email} setValue={setemail} />
          </View>

          <View style={styles.filedcon}>
            <CustomTextFiel
              label={'Password'}
              value={password}
              setValue={setpassword}
              secureTextEntry={true}
            />
          </View>
          {/* <View style={styles.filedcontext}>
            <Text style={styles.text}>Enable fingerprint for login</Text>
            <View>
              <Switch
                trackColor={{false: '#767577', true: colors.secondary}}
                thumbColor={isEnabled ? '#000' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View> */}
          <View style={styles.filedcon}>
            <TouchableOpacity
              onPress={() => navigation.navigate('RecoverPassword')}>
              <Text style={styles.forgotpass}>I forgot my Password</Text>
            </TouchableOpacity>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.filedconbutton}>
              <TouchableOpacity
                disabled={email != '' && password != '' ? false : true}
                style={
                  email?.includes('@') && email?.includes('.') && password
                    ? styles.but
                    : styles.disabledView
                }
                onPress={Sigin}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: fontSize.h6,
                    fontFamily: fontFamily.appTextHeading,
                    fontWeight: '600',
                  }}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {loader && <Loader />}
      {/* {error ? <Error title={'Oops!'} message={errorMessage} />: null} */}
      <View style={styles.color2}>
        {isModalVisible && (
          <Modal style={styles.modalView} isVisible={isModalVisible}>
            <View style={styles.texcon}>
              <Text style={styles.text111}>Oops!</Text>
            </View>
            <View style={styles.texcon1}>
              <Text style={styles.text1}>{errorMessage}</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setIsModalVisible(false);
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
    paddingTop: deviceHeight * 0.05,
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
});
