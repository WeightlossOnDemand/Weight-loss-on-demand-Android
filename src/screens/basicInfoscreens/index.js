import React, {useState, useEffect} from 'react';
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
  Platform,
  BackHandler,
} from 'react-native';
import Modal from 'react-native-modal';
import {DatePickerModal} from 'react-native-paper-dates';

import {RadioButton} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors, fontFamily, fontSize, sizes} from '../../services';
import {CustomTextFiel} from '../../component/textFiled';
import {getTrainer, signUp} from '../../services/utilities/api/auth';
import {storeData} from '../../store/actions';
import {useDispatch} from 'react-redux';
import Error from '../../components/Error';
import moment from 'moment';
import {width} from 'react-native-dimension';
import Header from '../../components/Header';
const BasicInfoScreen = ({navigation, route}) => {
  // console.log(route,"-------->basicscreen");
  const [date, setDate] = useState('');
  const [open, setOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  // const {email, password, checked, date, isEnabled} = route?.params;
  // const {password} = route.params;
  // const {checked} = route.params;
  // const {isEnabled} = route.params;

  console.log(route.params, '-------->basicscreenparams');
  const [CheckedMale, setCheckedMale] = React.useState(false);
  const [CheckedFemale, setCheckedFemale] = React.useState(false);
  const [CheckedOther, setCheckedOther] = React.useState(false);
  const [CheckedEnglish, setCheckedEnglish] = React.useState(false);
  const [CheckedSpanish, setCheckedSpanish] = React.useState(false);
  const [CheckedLanguageOther, setCheckedLanguageOther] = React.useState(false);
  const [language, setLanguage] = useState('');
  const [neverSmoke, setNeverSmoke] = useState(false);
  const [formerSmoke, setFormerSmoke] = useState(false);
  const [currentSmoke, setCurrentSmoke] = useState(false);
  const [smokeStatus, setSmokeStatus] = useState('');
  const [single, setSingle] = useState(false);
  const [married, setMarried] = useState(false);
  const [divorced, setDivorced] = useState(false);
  const [widowed, setWidowed] = useState(false);
  const [maritalStatus, setMaritalStatus] = useState('');

  const [name, setname] = useState('');
  const [lastname, setlastname] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [occupation, setOccupation] = useState('');
  const [workingHour, setWorkingHour] = useState('');
  const [age, setAge] = useState('');
  const [education, setEducation] = useState('');

  const [slectnumber, setslectnumber] = useState('');
  const [middle, setMiddle] = useState('');
  const [show, setshow] = useState(false);
  const [Fieldsshowhide, setFieldsshowhide] = useState(false);
  // const [allinformation, setallinformation] = useState()
  const [Prefix, setPrefix] = useState('');
  const [gender, setgender] = useState('');
  const [Suffix, setsetSuffix] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const dispatch = useDispatch();
  // useEffect(()=>{
  //   //this will fire  at the beginning and on foto changing value
  //   if(allinformation){
  //     // navigation.navigate('basicInfoscreens')
  //     console.log(allinformation,'useeffectallinformation');
  //   }
  //  },[allinformation])
  useEffect(() => {
    
    let date = new Date().toJSON();
    let current = moment(date).format('DD/MM/YYYY');
    setCurrentDate(current);
  }, []);
  const onConfirmSingle = date => {
    console.log('------>>', date);
    let test = JSON.stringify(date);
    let d1 = JSON.parse(test);
    let res = moment(d1.date).format('DD/MM/YYYY');
    console.log('-------->>', res);
    setDate(res);
    setOpen(false);
  };
  const toogle = () => {
    setshow(!show);
  };
  const ShowFiled = () => {
    setFieldsshowhide(!Fieldsshowhide);
  };
  const onDismissSingle = () => {
    setOpen(false);
  };

  useEffect(() => {
    // const backHandler = BackHandler.addEventListener('backPress', () => true);
    // return () => backHandler.remove();
  }, []);
  const Continue = async () => {
   

   
    

    var formdata = new FormData();
    formdata.append('first_name', name);
    formdata.append('middle_name', middle);
    formdata.append('last_name', lastname);
    formdata.append('email', route?.params?.email);
    formdata.append('password', route?.params?.password);
    formdata.append('gender', gender);
    formdata.append('prefix', Prefix);
    formdata.append('suffix', Suffix);
    formdata.append('phone', phonenumber);
    formdata.append('phone_type', slectnumber);
    formdata.append('dob', date);
    formdata.append('fingerprint', route?.params?.isEnabled == true ? 1 : 0);
    formdata.append('occupation', occupation);
    formdata.append('work_hours', workingHour);
    formdata.append('age', age);
    formdata.append('last_education', education);
    formdata.append('language', language);
    formdata.append('smoking_status', smokeStatus);
    formdata.append('marital_status', maritalStatus);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch('https://dashboard.weightlossondemand.com/backend/api/signup', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.token) {
          dispatch(storeData(result.token));
          setError(false);
        } else {
          setErrorMessage(result.message);
          setTimeout(() => {
            setIsModalVisible(true);
          }, 500);
          setError(true);
        }
      })
      .catch(error => console.log('error', error));
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Header title={'Update Basic Info'} />
        <View style={styles.inercontainer}>
          {/* <View style={styles.basicinfocontainer}>
            <Text style={styles.basicinfo}> Basic Info</Text>
          </View> */}
          <View style={styles.spayrainfo}>
            <Text style={styles.basicinfophyra}>
              Please tell us some basic info to complete
            </Text>
            <Text style={styles.basicinfophyra}>your profile</Text>
          </View>
          <View>
           
            {/* {Fieldsshowhide ? (
              <View style={styles.filedcon}>
                <CustomTextFiel
                  label={'Prefix'}
                  value={Prefix}
                  setValue={setPrefix}
                />
              </View>
            ) : null} */}
            <View style={[styles.filedcon,styles.Rowfle]}>
              <CustomTextFiel
                label={'Email'}
                value={route?.params?.email}
                editable={false}
                // setValue={setemail}
              />
              
              <TouchableOpacity onPress={() => navigation.navigate('signupscreen')} style={{flexDirection: 'row',left:sizes.screenWidth* 0.65,bottom:sizes.screenHeight* 0.04}}>
                <AntDesign
                  name="edit"
                  color={colors.black}
                  size={18}
                  style={styles.icon}
                />
                <Text style={styles.addPaymentText}>Edit Email</Text>
              </TouchableOpacity>
            
            </View>
            
           
              <View style={styles.filedcon}>
                <CustomTextFiel
                  label={'First name'}
                  value={name}
                  setValue={setname}
                />
              </View>
            {/* {Fieldsshowhide ? (
            ) : null} */}
            <View style={styles.filedcon}>
              <CustomTextFiel
                label={'Last Name'}
                value={lastname}
                setValue={setlastname}
              />
            </View>
            {/* {Fieldsshowhide ? (
              <View style={styles.filedcon}>
                <CustomTextFiel
                  label={'Suffix'}
                  value={Suffix}
                  setValue={setsetSuffix}
                />
              </View>
            ) : null} */}
 <View style={styles.filedcon}>
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
                onConfirm={onConfirmSingle}
                on="calendar"
              />
            </View>

            
            <View style={styles.filedcon}>
                <CustomTextFiel
                  label={'Phone number'}
                  value={phonenumber}
                  setValue={setphonenumber}
                  type="numeric"
                />
             
              {/* <View style={styles.twoitem}>
                <TouchableOpacity onPress={toogle}>
                  <View
                    style={{
                      width: sizes.screenWidth * 0.4,
                      left: sizes.screenWidth * 0.05,
                    }}>
                    <CustomTextFiel
                      label={'Mobile'}
                      value={slectnumber}
                      setValue={setslectnumber}
                      editable={false}
                    />
                  </View>
                  <MaterialIcons
                    name="expand-more"
                    color={colors.secondary}
                    style={styles.icon}
                    size={20}
                    onPress={toogle}
                  />
                </TouchableOpacity>
                {show ? (
                  <View style={[styles.pap, styles.right]}>
                    <Text
                      style={styles.lstyle}
                      onPress={() => {
                        setslectnumber('Mobile');
                        setshow(!show);
                      }}>
                      Mobile
                    </Text>
                    <Text
                      style={styles.lstyle}
                      onPress={() => {
                        setslectnumber('Work');
                        setshow(!show);
                      }}>
                      Work
                    </Text>
                    <Text
                      style={styles.lstyle}
                      onPress={() => {
                        setslectnumber('Home');
                        setshow(!show);
                      }}>
                      Home
                    </Text>
                  </View>
                ) : null}
              </View> */}
            </View>
            {/* <View style={styles.occupation}>
              <CustomTextFiel
                label={'Occupation'}
                value={occupation}
                setValue={setOccupation}
              />
            </View> */}
            {/* <View style={[styles.inonecon, styles.top]}>
              <View style={styles.twoitem}>
                <CustomTextFiel
                  label={'Working Hours'}
                  value={workingHour}
                  setValue={setWorkingHour}
                  // type="numeric"
                />
              </View>
              <View style={styles.twoitem}>
                <CustomTextFiel
                  label={'Age'}
                  value={phonenumber}
                  setValue={setphonenumber}
                  type="numeric"
                />
              </View>
            </View> */}
            {/* <View style={[styles.inonecon, styles.top]}>
              <View style={styles.twoitem}>
                <CustomTextFiel
                  label={'Working hours'}
                  value={workingHour}
                  setValue={setWorkingHour}
                />
              </View>
              <View style={styles.twoitem}>
                <View
                  style={{
                    width: sizes.screenWidth * 0.4,
                    left: sizes.screenWidth * 0.05,
                  }}>
                  <CustomTextFiel
                    label={'Age'}
                    value={age}
                    setValue={setAge}
                    type="numeric"
                  />
                </View>
              </View>
            </View> */}
            {/* <View style={[styles.occupation, styles.bottom]}>
              <CustomTextFiel
                label={'Highest level of education'}
                value={education}
                setValue={setEducation}
              />
            </View> */}
            <View style={styles.expndbuttoncontainer}>
              {/* <TouchableOpacity onPress={ShowFiled}> */}
                {/* {!Fieldsshowhide ? (
                  <>
                    <Text style={styles.lstyle}>COLLAPSE</Text>

                    <MaterialIcons
                      name="expand-more"
                      color={colors.secondary}
                      style={styles.iconexpIOS}
                      size={20}
                      onPress={ShowFiled}
                    />
                  </>
                ) : (
                  <>
                    <Text style={styles.lstyle}> Expand</Text>
                    <MaterialIcons
                      name="expand-less"
                      color={colors.secondary}
                      style={styles.iconexpIOS2}
                      size={20}
                      onPress={ShowFiled}
                    />
                  </>
                )} */}
                {/* {!Fieldsshowhide ? (
                  <MaterialIcons
                    name="expand-less"
                    color={colors.secondary}
                    style={!Fieldsshowhide ? styles.iconexp : styles.iconexp2}
                    size={20}
                  />
                ) : (
                  <MaterialIcons
                    name="expand-more"
                    color={colors.secondary}
                    style={!Fieldsshowhide ? styles.iconexp : styles.iconexp2}
                    size={20}
                  />
                )} */}
              {/* </TouchableOpacity> */}
            </View>
          </View>
          <View style={styles.genContainer}>
            <Text style={styles.lstyle}>PRIMARY LANGUAGE</Text>
          </View>
          <View style={styles.gcon}>
            <TouchableOpacity
              onPress={() => {
                setCheckedEnglish(!CheckedEnglish);
                setLanguage('English');
                setCheckedSpanish(false);
                setCheckedLanguageOther(false);
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>English</Text>
                <RadioButton
                  onPress={() => {
                    setCheckedEnglish(!CheckedEnglish);
                    setLanguage('English');
                    setCheckedSpanish(false);
                    setCheckedLanguageOther(false);
                  }}
                  status={CheckedEnglish ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCheckedSpanish(!CheckedSpanish);
                setLanguage('Spanish');
                setCheckedEnglish(false);
                setCheckedLanguageOther(false);
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>Spanish</Text>
                <RadioButton
                  onPress={() => {
                    setCheckedSpanish(!CheckedSpanish);
                    setLanguage('Spanish');
                    setCheckedEnglish(false);
                    setCheckedLanguageOther(false);
                  }}
                  status={CheckedSpanish ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity>
            {/* <TouchableOpacity
              onPress={() => {
                setCheckedLanguageOther(!CheckedLanguageOther);
                setLanguage('');
                setCheckedEnglish(false);
                setCheckedSpanish(false);
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>Other</Text>
                <RadioButton
                  onPress={() => {
                    setCheckedLanguageOther(!CheckedLanguageOther);
                    setLanguage('');
                    setCheckedEnglish(false);
                    setCheckedSpanish(false);
                  }}
                  status={CheckedLanguageOther ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity> */}
          </View>
          {CheckedLanguageOther && (
            <CustomTextFiel
              label={'Other language'}
              value={language}
              setValue={setLanguage}
              // type="numeric"
            />
          )}
          <View style={styles.genContainer}>
            <Text style={styles.lstyle}>GENDER</Text>
          </View>
          <View style={styles.gcon}>
            <TouchableOpacity
              onPress={() => {
                setCheckedMale(!CheckedMale);
                setgender('Male');
                setCheckedFemale(false);
                setCheckedOther(false);
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>Male</Text>
                <RadioButton
                  onPress={() => {
                    setCheckedMale(!CheckedMale);
                    setgender('Male');
                    setCheckedFemale(false);
                    setCheckedOther(false);
                  }}
                  status={CheckedMale ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCheckedFemale(!CheckedFemale);
                setgender('Female');
                setCheckedMale(false);
                setCheckedOther(false);
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>Female</Text>
                <RadioButton
                  onPress={() => {
                    setCheckedFemale(!CheckedFemale);
                    setgender('Female');
                    setCheckedMale(false);
                    setCheckedOther(false);
                  }}
                  status={CheckedFemale ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCheckedOther(!CheckedOther);
                setgender('Other');
                setCheckedMale(false);
                setCheckedFemale(false);
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>Other</Text>
                <RadioButton
                  onPress={() => {
                    setCheckedOther(!CheckedOther);
                    setgender('Other');
                    setCheckedMale(false);
                    setCheckedFemale(false);
                  }}
                  status={CheckedOther ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.genContainer}>
            <Text style={styles.lstyle}>MARITAL STATUS</Text>
          </View>
          <View style={styles.gcon}>
            <TouchableOpacity
              onPress={() => {
                setSingle(!single);
                setMaritalStatus('Single');
                setMarried(false);
                setDivorced(false);
                setWidowed(false);
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>Single</Text>
                <RadioButton
                  onPress={() => {
                    setSingle(!single);
                    setMaritalStatus('Single');
                    setMarried(false);
                    setDivorced(false);
                    setWidowed(false);
                  }}
                  status={single ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setMarried(!married);
                setMaritalStatus('Married');
                setSingle(false);
                setDivorced(false);
                setWidowed(false);
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>Married</Text>
                <RadioButton
                  onPress={() => {
                    setMarried(!married);
                    setMaritalStatus('Married');
                    setSingle(false);
                    setDivorced(false);
                    setWidowed(false);
                  }}
                  status={married ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDivorced(!divorced);
                setMaritalStatus('Divorced');
                setSingle(false);
                setMarried(false);
                setWidowed(false);
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>Divorced</Text>
                <RadioButton
                  onPress={() => {
                    setDivorced(!divorced);
                    setMaritalStatus('Divorced');
                    setSingle(false);
                    setMarried(false);
                    setWidowed(false);
                  }}
                  status={divorced ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setWidowed(!widowed);
                setMaritalStatus('Widowed');
                setSingle(false);
                setMarried(false);
                setDivorced(false);
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>Widowed</Text>
                <RadioButton
                  onPress={() => {
                    setWidowed(!widowed);
                    setMaritalStatus('Widowed');
                    setSingle(false);
                    setMarried(false);
                    setDivorced(false);
                  }}
                  status={widowed ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.genContainer}>
            <Text style={styles.lstyle}>SMOKING STATUS</Text>
          </View>
          <View style={styles.gcon}>
            <TouchableOpacity
              onPress={() => {
                setNeverSmoke(!neverSmoke);
                setSmokeStatus('Never');
                setFormerSmoke(false);
                setCurrentSmoke(false);
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>Never</Text>
                <RadioButton
                  onPress={() => {
                    setNeverSmoke(!neverSmoke);
                    setSmokeStatus('Never');
                    setFormerSmoke(false);
                    setCurrentSmoke(false);
                  }}
                  status={neverSmoke ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setFormerSmoke(!formerSmoke);
                setSmokeStatus('Former');
                setNeverSmoke(false);
                setCurrentSmoke(false);
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>Former</Text>
                <RadioButton
                  onPress={() => {
                    setFormerSmoke(!formerSmoke);
                    setSmokeStatus('Former');
                    setNeverSmoke(false);
                    setCurrentSmoke(false);
                  }}
                  status={formerSmoke ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCurrentSmoke(!currentSmoke);
                setSmokeStatus('Current');
                setNeverSmoke(false);
                setFormerSmoke(false);
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>Current</Text>
                <RadioButton
                  onPress={() => {
                    setCurrentSmoke(!currentSmoke);
                    setSmokeStatus('Current');
                    setNeverSmoke(false);
                    setFormerSmoke(false);
                  }}
                  status={currentSmoke ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.termspayra}>
            <View style={styles.r}>
              <Text style={styles.tremtext}>
                By providing your mobile number, you give us permission to
                contact you via text.
              </Text>
            </View>
          </View>
          <View style={styles.term}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TermsOfService')}>
              <View style={styles.viewTermsView}>
                <Text style={styles.tremtextbutt}>View Terms</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttocon}>
            <TouchableOpacity onPress={Continue}>
              <View style={styles.buttoconSTYLE}>
                <Text style={styles.continue}>Continue</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* {error && <Error title={'Oops!'} message={errorMessage} screen={"signupscreen"}/>} */}
      </ScrollView>
      <View style={styles.color2}>
        {isModalVisible && (
          <Modal style={styles.modalView} isVisible={isModalVisible}>
            <View style={styles.texcon}>
              <Text style={styles.text111}>{'Oops!'}</Text>
            </View>
            <View style={styles.texcon1}>
              <Text style={styles.text1}>{errorMessage}</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setIsModalVisible(false);
                  // navigation.navigate('signupscreen');
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

export default BasicInfoScreen;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height:sizes.screenHeight,
    backgroundColor: colors.white,
  },
  changeemailbuttonView: {
    backgroundColor: colors.secondary,
    width: sizes.screenWidth * 0.29,
    left: sizes.screenWidth * 0.63,
    bottom: sizes.screenHeight * 0.05,
  },
  changetext: {
    color: colors.white,
    fontSize: fontSize.large,
    alignSelf: 'center',
  },
  inercontainer: {
    padding: sizes.screenWidth * 0.04,
  },
  basicinfo: {
    right: sizes.screenWidth * 0.02,
    fontSize: fontSize.h4,
    fontWeight: '700',
    color: colors.black,
  },
  basicinfophyra: {
    fontSize: fontSize.h6,
    fontWeight: '500',
    color: colors.black,
    textAlign: 'auto',
  },
  basicinfocontainer: {
    paddingBottom: sizes.screenHeight * 0.03,
  },
  spayrainfo: {
    // paddingBottom: sizes.screenHeight * 0.05,
  },
  filedcon: {
    marginBottom: deviceHeight * 0.03,
  },
  datebuttontext: {
    // color: colors.black,
    fontSize: fontSize.large,
    top: sizes.screenHeight * 0.02,
    left: sizes.TinyMargin,
    // alignSelf:'flex-start'

    // position:'absolute'
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
  twoitem: {
    paddingRight: sizes.screenWidth * 0.03,
    paddingLeft: sizes.screenWidth * 0.03,
    marginBottom: deviceHeight * 0.03,
    width: sizes.screenWidth * 0.51,
  },
  twoitem1:{
    paddingRight: sizes.screenWidth * 0.03,
    paddingLeft: sizes.screenWidth * 0.03,
    marginBottom: deviceHeight * 0.03,
    width: sizes.screenWidth * 1,
  },
  inonecon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    // position: 'absolute',
    // left: sizes.screenWidth * 0.36,
    // top: sizes.screenHeight * 0.03,
    // fontSize: fontSize.h2,
    // flexDirection:'row'
  },
  iconexp: {
    position: 'absolute',
    left: sizes.screenWidth * 0.22,
    top: sizes.screenHeight * 0.01,
    fontSize: fontSize.h2,
  },
  iconexpIOS: {
    position: 'absolute',
    left: sizes.screenWidth * 0.25,
    top: sizes.screenHeight * 0.005,
    fontSize: fontSize.h2,
  },
  iconexpIOS2: {
    position: 'absolute',
    left: sizes.screenWidth * 0.2,
    top: sizes.screenHeight * 0.005,
    fontSize: fontSize.h2,
  },
  iconexp2: {
    position: 'absolute',
    left: sizes.screenWidth * 0.22,
    top: sizes.screenHeight * 0.01,
    fontSize: fontSize.h2,
  },
  icon: {
    // left: sizes.screenWidth * 0.02,
  },
 addPaymentText: {
    color: colors.disabledBg2,
    fontFamily: fontFamily.appTextLight,
    left: sizes.screenWidth * 0.015,
  },
  pap: {
    width: sizes.screenWidth * 0.3,
    heigh: sizes.screenHeight * 0.9,
    backgroundColor: colors.white,
  },
  lstyle: {
    fontSize: fontSize.h6,
    color: colors.black,
    fontWeight: '400',
    lineHeight: sizes.screenHeight * 0.05,
    fontFamily: fontFamily.appTextMedium,
  },
 
 
  right: {
    left: sizes.screenWidth * 0.1,
  },
  expndbuttoncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  genContainer: {
    width: sizes.screenWidth * 0.9,
    marginTop: sizes.screenHeight * 0.05,
    paddingLeft: sizes.screenWidth * 0.04,
    height: sizes.screenHeight * 0.08,
    backgroundColor: colors.lightGray,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  gcon: {
    paddingTop: sizes.screenHeight * 0.03,
  },
  termspayra: {
    paddingTop: sizes.screenHeight * 0.06,
  },
  tremtext: {
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextRegular,
    color: colors.black,
  },
  tremtextbutt: {
    // position: 'relative',
    // top: sizes.screenHeight * 0.053,
    // right: sizes.screenWidth * 0.9,
    fontSize: fontSize.medium,
    color: colors.secondary,
    fontFamily: fontFamily.appTextLight,
    fontWeight: '700',
  },
  viewTermsView: {
    // top: sizes.screenHeight * 0.053,
    // right: sizes.screenWidth * 0.9,
    // alignSelf:'flex-start'
  },
  buttocon: {
    paddingTop: sizes.screenHeight * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttoconSTYLE: {
    width: sizes.screenWidth * 0.93,
    height: sizes.screenHeight * 0.06,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continue: {
    color: colors.white,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextHeading,
    fontWeight: '600',
  },
  ro: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: sizes.screenWidth * 0.01,
  },
  r: {
    flexDirection: 'row',
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
  top: {
    marginTop: sizes.screenHeight * 0.03,
  },
  bottom: {
    paddingBottom: sizes.screenHeight * 0.05,
  },
});
