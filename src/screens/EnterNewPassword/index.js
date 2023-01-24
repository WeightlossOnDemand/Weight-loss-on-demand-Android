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
import AntDesign from 'react-native-vector-icons/AntDesign';
import {updateUserPassword} from '../../services/utilities/api/auth';
import {useSelector} from 'react-redux';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import { useEffect } from 'react';

export default function EnterNewPassword({navigation, route}) {
  const [showPassword, setShowPassword] = useState(true);
  const [showPassword2, setShowPassword2] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loader, setLoader] = useState(false);
  const [stack, setStack] = useState('Home');
  const [oneUppercase, setOneUpperCase] = useState(false);
  const [onelowercase, setOneLowerCase] = useState(false);
  const token = useSelector(state => state.token);

  const updatePassword = async () => {
    setLoader(true);
    if (!route?.params?.email && password == confirmPassword) {
      setTimeout(async () => {
        try {
          // console.log(response.data.message);
          let response = await updateUserPassword(token, password);
          setLoader(false);
          setMessage(response.data.message);
        } catch (error) {
          console.log(error);
          setLoader(false);
        }
      }, 100);
    } else if (route?.params?.email && password == confirmPassword) {
      var formdata = new FormData();
      formdata.append('password', password);
      formdata.append('email', route?.params?.email);
      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };
      fetch('https://dashboard.weightlossondemand.com/backend/api/new_password', requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          setLoader(false);
          setMessage(result.message);
          setStack('signinscreen');
        })
        .catch(error => console.log('error', error));
    }
  };
  useEffect(() => {
    console.log(password);
    var i = 0;
    var character = '';
    if (password !== '') {
      while (i <= password.length) {
        character = password.charAt(i);
        if (!isNaN(character * 1)) {
          console.log("");
        } else {
          if (character == character.toUpperCase()) {
            // console.log('upper case true');
            setOneUpperCase(true);
          }
          if (character == character.toLowerCase()) {
            console.log('lower case true');
            setOneLowerCase(true);
          }
        }
        i++;
      }
    } else {
      setOneUpperCase(false);
      setOneLowerCase(false);
    }
  }, [password]);
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header dark={true} />
        </View>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Text style={styles.addPaymentText}>Enter New Password</Text>
        </View>
        <View style={[styles.paddingLeft]}>
          <Text style={styles.text}>
            In order to update your password, please verify your current
            password.
          </Text>
        </View>
        <View style={styles.padding}>
          <TextInput
            mode="contain"
            label={'New password'}
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
            <TextInput
              mode="contain"
              label={'Confirm new password'}
              activeUnderlineColor={colors.secondary}
              style={styles.field}
              onChangeText={text => setConfirmPassword(text)}
              value={confirmPassword}
              secureTextEntry={!showPassword2}
              right={
                <TextInput.Icon
                  icon={showPassword2 ? 'eye' : 'eye-off'}
                  onPress={() => setShowPassword2(!showPassword2)}
                  color={colors.disabledBg2}
                />
              }
            />
          </View>
          <View style={styles.paddingTop}>
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
                    // password?.toUpperCase()
                    oneUppercase && onelowercase
                      ? colors.secondary
                      : colors.disabledBg
                  }
                  size={20}
                />
                <Text style={styles.fontcheck}>
                  One uppercase and one lowercase{' '}
                </Text>
              </View>
            </View>
            <View style={[styles.filedcon, styles.paddingBottom]}>
              <View style={styles.fleix}>
                <AntDesign
                  name="checkcircle"
                  color={
                    password?.match(/\d/) && password != password?.toUpperCase() ? colors.secondary : colors.disabledBg
                  }
                  size={20}
                />
                <Text style={styles.fontcheck}>One number minimum</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={updatePassword}
              disabled={
                password !== '' &&
                confirmPassword !== '' &&
                password == confirmPassword
                  ? false
                  : true
              }>
              <View
                style={
                  password !== '' &&
                  confirmPassword !== '' &&
                  password == confirmPassword
                    ? styles.buttonView
                    : styles.disabledView
                }>
                <Text style={styles.buttonText}> Save Changes</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttnView}>
            <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
              <View style={styles.buttonView1}>
                <Text style={styles.buttnText}>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {loader && <Loader />}
        {message !== '' && (
          <Error title="Congratulations!" message={message} screen={stack} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
