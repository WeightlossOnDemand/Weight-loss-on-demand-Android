import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

import {openComposer} from 'react-native-email-link';
import {colors, sizes} from '../../services';
import {useDispatch, useSelector} from 'react-redux';
import {removeData} from '../../store/actions';
import {useIsFocused} from '@react-navigation/native';
import {getUser, updateFingerprint} from '../../services/utilities/api/auth';
import Loader from '../../components/Loader';

export default function Setting({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();
  const isVisible = useIsFocused();
  const token = useSelector(state => state.token);

  useEffect(() => {
    getUserDetails();
  }, [isVisible]);

  const toggleSwitch = async () => {
    setIsEnabled(previousState => !previousState);
    console.log(isEnabled);
    // try {
    // if (isEnabled) {
    //   console.log(isEnabled);
    //   let response = await updateFingerprint(
    //     token,
    //     isEnabled == true ? 0 : 1,
    //   );
    //   console.log(response.data);
    // }
    // } catch (error) {
    //   console.log(error);
    // }
    var myHeaders = new Headers();
    myHeaders.append('Authorization', token);

    var formdata = new FormData();
    formdata.append('fingerprint', isEnabled == true ? 0 : 1);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch('https://dashboard.weightlossondemand.com/backend/api/update_fingrprnt', requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleFeedback = () => {
    openComposer({
      to: 'feedback@weightlossondemand.com',
      subject: 'Weight Loss On Demand Feedback',
    });
  };

  const handleSignOut = () => {
    dispatch(removeData());
  };

  const getUserDetails = async () => {
    setLoader(true);
    setTimeout(async () => {
      try {
        let response = await getUser(token);
        setFirstName(response.data.data.first_name);
        setMiddleName(response.data.data.middle_name);
        setLastName(response.data.data.last_name);
        setEmail(response.data.data.email);
        setLoader(false);

        if (response.data.data.fingerprint == 1) {
          setIsEnabled(true);
          setLoader(false);
        } else {
          setIsEnabled(false);
          setLoader(false);
        }
        setLoader(false);
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    }, 100);
  };
  return (
    <SafeAreaView>
      <View>
          
        <Header title={'My Account'} signout={true} onPress={() => setIsModalVisible(true)} />
      </View>
      <ScrollView style={styles.color}>
        <View style={styles.userView}>
          <View style={styles.signOutBtn}>
            {/* <TouchableOpacity  onPress={() => setIsModalVisible(true)}>
              <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity> */}
          </View>
          {middleName == '' ? (
            <Text style={styles.userName}>
              {firstName} {middleName} {lastName}
            </Text>
          ) : (
            <Text style={styles.userName}>
              {firstName} {lastName}
            </Text>
          )}
          <Text style={[styles.signOutText, styles.left]}>{email}</Text>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity onPress={() => navigation.navigate('SharePromo')}>
            <View style={styles.row}>
              <MaterialCommunityIcons
                name="gift"
                color={colors.secondary}
                size={25}
              />
              <Text style={styles.btnText}>Share Weight Loss On Demand</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.left, styles.top]}>
          <Text style={styles.head}>PAYMENT</Text>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PaymentMethod')}>
            <View style={styles.row}>
              <Ionicons name="card-sharp" color={colors.secondary} size={25} />
              <Text style={styles.btnText}>Payment Method</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ApplyCoupon', {skip: false})}>
            <View style={styles.row}>
              <Ionicons name="pricetag" color={colors.secondary} size={25} />
              <Text style={styles.btnText}>Apply Coupon</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.left, styles.top]}>
          <Text style={styles.head}>UPDATE PROFILE</Text>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity onPress={() => navigation.navigate('ContactInfo')}>
            <View style={styles.row}>
              <FontAwesome name="vcard-o" color={colors.secondary} size={25} />
              <Text style={styles.contactLeft}>Contact Information</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity onPress={() => navigation.navigate('basicInfoscreenssettings')}>
            <View style={styles.row}>
              <Entypo name="info" color={colors.secondary} size={25} />
              <Text style={styles.contactLeft}>Basic Info</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ChangePassword', {
                screenName: 'EnterNewPassword',
                title: 'password',
              })
            }>
            <View style={styles.row}>
              <MaterialCommunityIcons
                name="lock"
                color={colors.secondary}
                size={25}
              />
              <Text style={styles.btnText}>Change Password</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.padding}>
          <TouchableOpacity onPress={() => navigation.navigate('Insurance')}>
            <View style={styles.row}>
              <MaterialCommunityIcons
                name="clipboard-text"
                color={colors.secondary}
                size={25}
              />
              <Text style={styles.btnText}>Insurance</Text>
            </View>
          </TouchableOpacity>
        </View> */}
        {/* <View style={styles.padding}>
          <TouchableOpacity onPress={() => navigation.navigate('Employer')}>
            <View style={styles.row}>
              <Ionicons
                name="briefcase-sharp"
                color={colors.secondary}
                size={25}
              />
              <View>
                <Text style={styles.btnText}>Employer</Text>
                <Text style={[styles.redText, styles.left]}>
                  {' '}
                  AMN Healthcare
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View> */}
        {/* <View style={styles.padding}>
          <View style={[styles.row, styles.justifyCenter]}>
            <Ionicons name="finger-print" color={colors.secondary} size={25} />
            <Text
              style={
                Platform.OS !== 'ios'
                  ? styles.fingerprintText
                  : styles.fingerprintTextIOS
              }>
              Enable fingerprint for login
            </Text>
            <View style={{alignSelf: 'flex-end'}}>
              <Switch
                trackColor={{false: '#767577', true: colors.secondary}}
                thumbColor={isEnabled ? colors.primary : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
        </View> */}
        {/* <View style={[styles.left, styles.top]}>
          <Text style={styles.head}>CARE COORDINATION</Text>
        </View> */}
        {/* <View style={styles.padding}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MedicalRecords')}>
            <View style={styles.row}>
              <Image
                source={images.medicalRecords}
                style={styles.medicalIcon}
              />
              <Text style={styles.btnText}>Medical Records</Text>
            </View>
          </TouchableOpacity>
        </View> */}
        {/* <View style={styles.padding}>
          <TouchableOpacity onPress={() => navigation.navigate('GoogleFit')}>
            <View style={styles.row}>
              <FontAwesome name="heart" color={colors.secondary} size={25} />
              <Text style={styles.btnText}>Google Fit</Text>
            </View>
          </TouchableOpacity>
        </View> */}
        <View style={[styles.left, styles.top]}>
          <Text style={styles.head}>GET IN TOUCH</Text>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ContactSupport')}>
            <View style={styles.row}>
              <MaterialCommunityIcons
                name="chat-question"
                color={colors.secondary}
                size={25}
              />
              <Text style={styles.btnText}>Customer Support</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity onPress={handleFeedback}>
            <View style={styles.row}>
              <Image source={images.feedback} style={styles.medicalIcon} />

              <Text style={styles.btnText}> Send Feedback</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.left, styles.top]}>
          <Text style={styles.head}>LEGAL</Text>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity
            onPress={() => navigation.navigate('TermsAndConditions')}>
            <View style={styles.row}>
              <Image source={images.terms} style={styles.medicalIcon} />
              <Text style={styles.btnText}> Terms & Conditions</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.right, styles.top, styles.bottom]}>
          <Text style={styles.version}>VERSION 1.0.0</Text>
        </View>
        {Platform.OS == 'ios' && <View style={styles.bottomIOS}></View>}
        {isModalVisible && (
          <Modal style={styles.modalView} isVisible={isModalVisible}>
            {/* <TouchableOpacity onPress={toggleModal}>
              <View
                style={{
                  position: 'relative',
                  bottom: sizes.screenHeight * 0.25,
                  left: sizes.screenWidth * 0.85,
                }}>
                <Entypo
                  name="cross"
                  color={colors.secondary}
                  size={30}
                  onPress={toggleModal}
                />
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
      </ScrollView>
    </SafeAreaView>
  );
}
