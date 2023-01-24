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
import { useIsFocused } from '@react-navigation/native';
import Loader from '../../components/Loader';
import { getUser, updateUserPhone } from '../../services/utilities/api/auth';
import { useSelector } from 'react-redux';
import Error from '../../components/Error';

export default function EditPhone({navigation}) {
  const [phone, setPhone] = useState('');
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState('');

  const isVisible = useIsFocused();
  const token = useSelector(state => state.token);

  useEffect(() => {
    getUserDetails();
  }, [isVisible]);

  const getUserDetails = async () => {
    setLoader(true);
    setTimeout(async () => {
      try {
        let response = await getUser(token);
        setPhone(response.data.data.phone);
        setLoader(false);
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    }, 100);
  };
  const updatePhone = async()=>{
    try {
      let response = await updateUserPhone(token, phone);
      console.log(response.data);
      setMessage(response.data.message);

      // navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header dark={true} />
        </View>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Text style={styles.addPaymentText}>Update your phone</Text>
        </View>
        <View style={styles.width}>
          <TextInput
            mode="contain"
            label={'Phone'}
            activeUnderlineColor={colors.secondary}
            style={styles.field}
            onChangeText={text => setPhone(text)}
            value={phone}
          />
        </View>
        <View style={[styles.width,styles.top]}>
          <Text style={styles.text}>
            By providing your mobile number, you give us permission to contact
            you via text. <Text style={styles.redText}>View terms</Text>.
          </Text>
        </View>
        <View style={styles.top}>
          <TouchableOpacity onPress={updatePhone}>
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
