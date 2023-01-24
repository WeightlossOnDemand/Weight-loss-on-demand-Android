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
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {styles} from './style';
import {TextInput} from 'react-native-paper';
import {colors} from '../../services';
import {useSelector} from 'react-redux';
import {getUser, updateUserName} from '../../services/utilities/api/auth';
import Loader from '../../components/Loader';
import {useIsFocused} from '@react-navigation/native';
import Error from '../../components/Error';

export default function EditName({navigation}) {
  const token = useSelector(state => state.token);
  const isVisible = useIsFocused();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    getUserDetails();
  }, [isVisible]);

  const getUserDetails = async () => {
    setLoader(true);
    setTimeout(async () => {
      try {
        let response = await getUser(token);
        setFirstName(response.data.data.first_name);
        setLastName(response.data.data.last_name);
        setLoader(false);
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    }, 100);
  };

  const updateName = async () => {
    try {
      let response = await updateUserName(token, lastName, firstName);
      console.log(response.data.message);
      setMessage(response.data.message);
      // navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header dark={true} />
        </View>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Text style={styles.addPaymentText}>Update your name</Text>
        </View>
        <View style={styles.width}>
          <TextInput
            mode="contain"
            label={'First Name'}
            activeUnderlineColor={colors.secondary}
            style={styles.field}
            onChangeText={text => setFirstName(text)}
            value={firstName}
          />
        </View>
        <View style={styles.width}>
          <TextInput
            mode="contain"
            label={'Last Name'}
            activeUnderlineColor={colors.secondary}
            style={styles.field}
            onChangeText={text => setLastName(text)}
            value={lastName}
          />
        </View>
        <View style={styles.top}>
          <TouchableOpacity onPress={updateName}>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
        {message !== '' && (
          <Error title="Congratulations!" message={message} screen={'Home'} />
        )}
        {loader && <Loader />}
      </ScrollView>
    </SafeAreaView>
  );
}
