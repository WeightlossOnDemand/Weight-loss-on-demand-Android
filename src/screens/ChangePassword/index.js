import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
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
import {TextInput} from 'react-native-paper';
import {colors} from '../../services';
import {useSelector} from 'react-redux';
import Loader from '../../components/Loader';
import {signIn} from '../../services/utilities/api/auth';
import Error from '../../components/Error';
import Modal from 'react-native-modal';

export default function ChangePassword({navigation, route}) {
  const [showPassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const email = useSelector(state => state.user.email);
  const verifyPassword = () => {
    setLoader(true);
    try {
      setLoader(true);
      setTimeout(async () => {
        let response = await signIn(email, password);
        setLoader(false);
        if (response.data.message == 'user found') {
          navigation.navigate(route?.params?.screenName);
          setIsModalVisible(false);
          setLoader(false);
        } else {
          setTimeout(() => {
            setIsModalVisible(true);
            setErrorMessage('Invalid password');
            setLoader(false);
          }, 1000);
        }
      }, 1000);
    } catch (error) {
      setTimeout(() => {
        console.log('err', error);
        setIsModalVisible(true);
        setErrorMessage(error.message);
        setLoader(false);
      }, 1000);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header dark={true} />
        </View>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Text style={styles.addPaymentText}>Please login first</Text>
        </View>
        <View style={[styles.paddingLeft]}>
          <Text style={styles.text}>
            In order to update your {route?.params?.title}, please verify your
            current password.
          </Text>
        </View>
        <View style={styles.padding}>
          <TextInput
            mode="contain"
            label={'Enter password'}
            activeUnderlineColor={colors.secondary}
            style={styles.field}
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={!showPassword}
            right={
              <TextInput.Icon
                icon={showPassword ? 'eye' : 'eye-off'}
                onPress={() => setShowPassword(!showPassword)}
                color={colors.disabledBg2}
              />
            }
          />
          <View style={styles.paddingTop}>
            <TouchableOpacity
              onPress={verifyPassword}
              disabled={password !== '' ? false : true}>
              <View
                style={
                  password !== '' ? styles.buttonView : styles.disabledView
                }>
                <Text style={styles.buttonText}> Verify Password</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {loader && <Loader />}
        {/* {error && <Error title={'Oops!'} message={errorMessage} />} */}
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
      </ScrollView>
    </SafeAreaView>
  );
}
