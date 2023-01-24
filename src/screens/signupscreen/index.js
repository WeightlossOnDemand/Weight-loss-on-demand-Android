import React, {useEffect, useState} from 'react';
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
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Checkbox} from 'react-native-paper';
import Logo from '../../assets/assets/logo.png';
import {CustomTextFiel} from '../../component/textFiled';
import {Button} from 'react-native-paper';
import {DatePickerModal} from 'react-native-paper-dates';
import {colors, fontFamily, fontSize, sizes} from '../../services';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import moment from 'moment';
import {TextInput} from 'react-native-paper';
import {checkEmail} from '../../services/utilities/api/auth';
import Modal from 'react-native-modal';
import Loader from '../../components/Loader';

export const SignUp = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [checked, setChecked] = React.useState(false);
  // const [date, setDate] = useState('');
  const [open, setOpen] = useState(false);
  const [register, setregister] = useState();
  const [oneUppercase, setOneUpperCase] = useState(false);
  const [onelowercase, setOneLowerCase] = useState(false);
  const [oneNumeric, setOneNumeric] = useState(false);
  // const [currentDate, setCurrentDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  // useEffect(() => {
  //   // var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
  //   // let res = moment(utc).format('DD/MM/YYYY')
  //   // console.log('---------------------------->',res);
  //   // setCurrentDate(utc);
  //   let date = new Date().toJSON();
  //   let current = moment(date).format('DD/MM/YYYY');
  //   setCurrentDate(current);
  // }, []);

  useEffect(() => {
    //this will fire  at the beginning and on foto changing value
    if (register) {
      navigation.navigate('basicInfoscreens', {register: register});
    }
  }, [register]);

  const onDismissSingle = () => {
    setOpen(false);
  };

  const onConfirmSingle = date => {
    console.log('------>>', date);
    let test = JSON.stringify(date);
    let d1 = JSON.parse(test);
    let res = moment(d1.date).format('DD/MM/YYYY');
    console.log('-------->>', res);
    setDate(res);
    // setDate(date);
    setOpen(false);
    // res=""
  };

  const Sinup = async () => {
    // console.log(email,
    //   password,
    //   checked,
    //   isEnabled,
    //   date,'----------->');
    if (email && password && checked) {
      setLoader(true);
      // console.log(email,
      //   password,
      //   checked,
      //   isEnabled,
      //   date,'----------->');
      // try {
      //   let response =await checkEmail(email)
      //   console.log(response.data);
      // } catch (error) {
      //   console.log(error);
      // }
      setTimeout(() => {
        console.log('|works');
        var formdata = new FormData();
        formdata.append('email', email.toLowerCase());

        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow',
        };

        fetch('https://dashboard.weightlossondemand.com/backend/api/check_email', requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result);
            if (result.message == 'Email already exists ') {
              setError(true);
              setErrorMessage(result.message);
              setLoader(false);
            } else {
              setLoader(false);
              navigation.navigate('basicInfoscreens', {
                email,
                password,
                checked,
                isEnabled,
              });
            }
          })

          .catch(error => {
            console.log('error', error);
            setLoader(false);
          });
      }, 500);

      // navigation.navigate('basicInfoscreens', {
      //   email,
      //   password,
      //   checked,
      //   isEnabled,
      //   date,
      // });
    }
  };
  useEffect(() => {
    if (password !== '') {
      let upper = password.toLowerCase() !== password;
      setOneUpperCase(upper);
      let lower = password.toUpperCase() !== password;
      setOneLowerCase(lower);
    }
  }, [password]);
  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.container}>
        <View style={styles.hederstyling}>
          <View style={styles.logoalign}>
            <Image source={Logo} style={{width: '100%', height: '100%'}} />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('signinscreen')}>
              <Text style={styles.fontstyleigin}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.filedContainer}>
          <View style={styles.filedcon}>
            <CustomTextFiel label={'Email'} value={email} setValue={setemail} />
            {/* <TextInput
              mode="contain"
              //   style={styles.input}
              label={'Email'}
              value={email}
              onChangeText={text => handleEmail(text)}
              autoCapitalize={'none'}
              activeUnderlineColor={colors.secondary}
              style={{
                backgroundColor: '#fafafa',
                fontSize: fontSize.large,
                fontFamily: fontFamily.appTextRegular,
              }}
            /> */}
          </View>
          {/* <View style={styles.filedcon}>
            {date ? (
              <TouchableOpacity
                style={styles.datebutton}
                onPress={() => setOpen(!open)}>
                <Text style={styles.datebuttontext}>{date && date}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.datebutton}
                onPress={() => setOpen(!open)}
                uppercase={false}>
                <Text style={styles.datebuttontext}> Date of birth</Text>
              </TouchableOpacity>
            )}
            <DatePickerModal
              locale="en"
              mode="single"
              visible={open}
              onDismiss={onDismissSingle}
              // date={date ? date : currentDate}
              onConfirm={onConfirmSingle}

              
            />
            
          </View> */}
          <View style={styles.filedcon}>
            <CustomTextFiel
              label={'Password'}
              value={password}
              setValue={setpassword}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.filedcon}>
            <View style={styles.fleix}>
              <AntDesign
                name="checkcircle"
                color={
                  password?.length >= 8 ? colors.secondary : colors.disabledBg
                }
                size={20}
              />
              <Text style={styles.fontcheck}>8 characters minimum</Text>
            </View>
          </View>
          <View style={styles.filedcon}>
            <View style={styles.fleix}>
              <AntDesign
                name="checkcircle"
                color={
                  // password?.toUpperCase() &&
                  // // password?.toUpperCase() &&
                  // password == password?.match(/\d/)
                  // ?
                  oneUppercase && onelowercase
                    ? // password?.toLowerCase()
                      colors.secondary
                    : colors.disabledBg
                }
                size={20}
              />
              <Text style={styles.fontcheck}>
                One uppercase and one lowercase{' '}
              </Text>
            </View>
          </View>
          <View style={styles.filedcon}>
            <View style={styles.fleix}>
              <AntDesign
                name="checkcircle"
                color={
                  // password?.match(/\d/.test)
                  // ? //
                  password?.match(/\d/) && password != password?.toUpperCase()
                    ? colors.secondary
                    : colors.disabledBg
                }
                size={20}
              />
              <Text style={styles.fontcheck}>One number minimum</Text>
            </View>
          </View>
          {/* <View style={styles.filedcontext}>
            <Text style={styles.text}>Enable fingerprint for login</Text>
            <View>
              <Switch
                trackColor={{false: '#767577', true: 'red'}}
                thumbColor={isEnabled ? '#000' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View> */}
          <View style={styles.filedcontext1}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              color={'#be1d2d'}
              uncheckColor={colors.secondary}
            />
            <View style={styles.ddemand}>
              <Text style={styles.text}>
                I agree to the Weight Loss On Demands
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('MemberAgreement')}>
                <Text style={styles.membershipText}>Membership Terms</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.filedconbutton}>
            <TouchableOpacity
              // disabled={
              //   password?.length > 8 &&
              //   password?.toUpperCase() &&
              //   password?.match(/\d/) &&
              //   email?.includes('@') &&
              //   email?.includes('.')
              //   //  &&
              //   // date
              //   //   ? false
              //   //   : true
              // }
              style={
                // styles.but
                password?.length > 8 &&
                password?.toUpperCase() &&
                password?.match(/\d/) &&
                email?.includes('@') &&
                email?.includes('.') &&
                // date &&
                checked
                  ? styles.but
                  : styles.disabledView
              }
              onPress={Sinup}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: fontSize.h6,
                  fontFamily: fontFamily.appTextHeading,
                  fontWeight: '600',
                }}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.color2}>
          {error && (
            <Modal style={styles.modalView} isVisible={error}>
              <View style={styles.texcon}>
                <Text style={styles.text111}>Oops!</Text>
              </View>
              <View style={styles.texcon1}>
                <Text style={styles.text1}>{errorMessage}</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setError(false);
                  }}>
                  <View style={styles.buttonView}>
                    <Text style={styles.buttonText}>OK</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Modal>
          )}
        </View>
      </View>
      {loader && <Loader />}
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
    fontSize: 20,
    color: '#be1d2d',
    fontWeight: '700',
    fontFamily: fontFamily.appTextRegular,
  },
  filedContainer: {
    paddingTop: deviceHeight * 0.05,
  },
  filedcon: {
    marginBottom: deviceHeight * 0.02,
  },
  fleix: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fontcheck: {
    marginLeft: sizes.screenHeight * 0.02,
    fontSize: fontSize.h6,
    color: colors.primary,
    fontFamily: fontFamily.appTextRegular,
    // fontWeight: '400',
  },
  but: {
    backgroundColor: colors.secondary,
    width: deviceWidth * 0.93,
    height: sizes.screenHeight * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    left: sizes.TinyMargin,
  },
  filedconbutton: {
    paddingTop: deviceHeight * 0.0,
    marginBottom: deviceHeight * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filedcontext: {
    marginTop: deviceHeight * 0.02,
    paddingLeft: deviceWidth * 0.01,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: deviceHeight * 0.03,
  },
  filedcontext1: {
    marginTop: deviceHeight * 0.02,
    paddingLeft: deviceWidth * 0.01,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginBottom: deviceHeight * 0.03,
  },
  text: {
    fontSize: fontSize.h6,
    color: '#000',
    fontFamily: fontFamily.appTextRegular,
  },
  membershipText: {
    fontSize: fontSize.medium,
    color: '#be1d2d',
    fontFamily: fontFamily.appTextRegular,
  },
  bt: {
    backgroundColor: 'none',
  },
  disabledView: {
    alignSelf: 'center',
    backgroundColor: colors.disabledBg,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.92,
    alignItems: 'center',
    justifyContent: 'center',
  },
  datebutton: {
    // backgroundColor:'red',
    // justifyContent:'flex-start',
    // marginRight:sizes.screenWidth*0.9,
    // width:sizes.screenWidth*0.4,
    // height:sizes.screenHeight*0.4,
    color: 'black',
    borderBottomWidth: 1,
    borderBottomColor: colors.disabledBg,
    paddingBottom: sizes.screenHeight * 0.05,
    // position:'absolute'
  },
  datebuttontext: {
    color: colors.black,
    fontSize: fontSize.large,
    top: sizes.screenHeight * 0.02,
    left: sizes.TinyMargin,
    // alignSelf:'flex-start'

    // position:'absolute'
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
