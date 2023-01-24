import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {styles} from './style';
import {TextInput} from 'react-native-paper';
import {colors, sizes} from '../../services';
import Modal from 'react-native-modal';
import {openInbox} from 'react-native-email-link';
import {sendEmail} from '../../services/utilities/api/auth';

export default function RecoverPassword({navigation}) {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorModal, setErrorModal] = useState(false);
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleEmail = () => {
    openInbox();
  };

  const handleVerification = async () => {
    setIsModalVisible(!isModalVisible);
    navigation.navigate('verifiedcode', {
      email: email.toLowerCase(),
    });
    // try {
    //   let response = await sendEmail(email);
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  const recoverPassword = () => {
    var formdata = new FormData();
    formdata.append('email', email);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch('https://dashboard.weightlossondemand.com/backend/api/check_email', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.message !== 'Email already exists ') {
          setError(true);
          setEmailError('Invalid Email');
        } else {
          setIsModalVisible(true);
          var formdata = new FormData();
          formdata.append('email', email.toLowerCase());

          var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow',
          };

          fetch('https://dashboard.weightlossondemand.com/backend/api/forgot_pass', requestOptions)
            .then(response => response.json())
            .then(result => {
              // setIsModalVisible(false);
              // if (result.message.includes('Check')) {
              //   setIsModalVisible(false);
                
              // }
            })
            .catch(error => {
              console.log('error', error);
              setIsModalVisible(false);
            });
        }
      })
      .catch(error => console.log('error', error));
  };
  return (
    <SafeAreaView>
      <Header title={'Recover Password'} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.text}>
            Please enter your email address and we will send you a link to reset
            your password:
          </Text>
          <View style={styles.width}>
            <TextInput
              mode="contain"
              label={'Email address'}
              activeUnderlineColor={colors.secondary}
              style={styles.field}
              onChangeText={text => setEmail(text)}
              value={email}
            />
          </View>
          <View style={styles.paddingTop}>
            <TouchableOpacity
              // disabled={
              //   email.includes('@') && email.includes('.') ? true : false
              // }
              onPress={
                // if (email.includes('@') && email.includes('.'))
                recoverPassword
              }>
              <View
                style={
                  email.includes('@') && email.includes('.')
                    ? styles.buttonView
                    : styles.disabledView
                }>
                <Text style={styles.buttonText}>Recover my password</Text>
              </View>
            </TouchableOpacity>
          </View>
          {isModalVisible && (
            <Modal style={styles.modalView} isVisible={isModalVisible}>
              <View style={styles.texcon}>
                <Text style={styles.text111}>Check your email!</Text>
              </View>
              <View style={styles.texcon1}>
                <Text style={styles.text1}>
                  An email has been sent to{' '}
                  <Text style={styles.link} onPress={handleEmail}>
                    {email}
                  </Text>
                  . Use the link in that email to reset your password
                </Text>
              </View>
              <TouchableOpacity onPress={handleVerification}>
                <View style={styles.buttonView}>
                  <Text style={styles.buttonText}>OK</Text>
                </View>
              </TouchableOpacity>
            </Modal>
          )}
        </View>
        <View style={styles.color}>
          {error && (
            <Modal style={styles.modalView} isVisible={error}>
              <View style={styles.texcon}>
                <Text style={styles.text111}>Oops!</Text>
              </View>
              <View style={styles.texcon1}>
                <Text style={styles.text1}>{emailError}</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
}
