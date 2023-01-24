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
import {useSelector} from 'react-redux';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import {getUser} from '../../services/utilities/api/auth';
import images from '../../services/utilities/images';
import {styles} from './style';
import {useIsFocused} from '@react-navigation/native';

export default function ContactInfo({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [loader, setLoader] = useState(false);
  const token = useSelector(state => state.token);
  const isVisible = useIsFocused();

  useEffect(() => {
    getUserDetails();
  }, [isVisible]);

  const getUserDetails = async () => {
    setLoader(true);
    setTimeout(async () => {
      try {
        let response = await getUser(token);
        setFirstName(response.data.data.first_name);
        setMiddleName(response.data.data.middle_name);
        setLastName(response.data.data.last_name);
        setAddress(
          response.data.data.address == 'none'
            ? ''
            : response.data.data.address,
        );
        setPhone(response.data.data.phone);
        setEmail(response.data.data.email);
        setLoader(false);
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    }, 300);
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header dark={true} />
        </View>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Text style={styles.addPaymentText}>Contact Information</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('EditName')}>
          <View style={[styles.row, styles.card]}>
            <View style={styles.width}>
              <Text style={styles.head}>NAME</Text>
              {middleName == '' ? (
                <Text style={styles.userName}>
                  {firstName} {middleName} {lastName}
                </Text>
              ) : (
                <Text style={styles.userName}>
                  {firstName} {lastName}
                </Text>
              )}
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EditAddress')}>
          <View style={[styles.row, styles.card]}>
            <View style={styles.width}>
              <Text style={styles.head}>ADDRESS</Text>
              <Text style={styles.text}>{address}</Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EditPhone')}>
          <View style={[styles.row, styles.card]}>
            <View style={styles.width}>
              <Text style={styles.head}>PHONE</Text>
              <Text style={styles.text}>{phone}</Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ChangePassword', {
              screenName: 'EditEmail',
              title: 'email',
            })
          }>
          <View style={[styles.row, styles.card]}>
            <View style={styles.width}>
              <Text style={styles.head}>EMAIL</Text>
              <Text style={styles.text}>{email}</Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        {loader && <Loader />}
      </ScrollView>
    </SafeAreaView>
  );
}
