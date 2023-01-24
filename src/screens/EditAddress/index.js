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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import {getUser, updateUserAddress} from '../../services/utilities/api/auth';
import Loader from '../../components/Loader';
import {useIsFocused} from '@react-navigation/native';
import Error from '../../components/Error';

export default function EditAddress({navigation}) {
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [showState, setShowState] = useState(false);
  const [stateList, setStateList] = useState([
    ' ',
    'AL',
    'AK',
    'AZ',
    'AR',
    'AA',
    'AE',
    'AP',
    'CA',
    'CO',
    'CT',
    'DE',
    'DC',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY',
  ]);
  const isVisible = useIsFocused();
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState('');

  const token = useSelector(state => state.token);

  const handleState = item => {
    setState(item);
    setShowState(false);
  };
  useEffect(() => {
    getUserDetails();
  }, [isVisible]);

  const getUserDetails = async () => {
    setLoader(true);
    setTimeout(async () => {
      try {
        let response = await getUser(token);
        console.log(response.data.data.address2);
        setAddress(
          response.data.data.address == 'none'
            ? ''
            : response.data.data.address,
        );
        setAddress2(
          response.data.data.address2 == 'none'
            ? ''
            : response.data.data.address2,
        );
        setCity(
          response.data.data.city == 'none' ? '' : response.data.data.city,
        );
        setState(
          response.data.data.state == 'none' ? '' : response.data.data.state,
        );
        setZipCode(
          response.data.data.zipcode == 'none'
            ? ''
            : response.data.data.zipcode,
        );
        setLoader(false);
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    }, 100);
  };

  const updateAddress = async () => {
    try {
      let response = await updateUserAddress(
        token,
        address,
        address2,
        city,
        state,
        zipCode,
      );
      console.log(response.data);
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
          <Text style={styles.addPaymentText}>Update your address</Text>
        </View>
        <View style={styles.width}>
          <TextInput
            mode="contain"
            label={'Address'}
            activeUnderlineColor={colors.secondary}
            style={styles.field}
            onChangeText={text => setAddress(text)}
            value={address}
          />
        </View>
        <View style={styles.width}>
          <TextInput
            mode="contain"
            label={'Address 2'}
            activeUnderlineColor={colors.secondary}
            style={styles.field}
            onChangeText={text => setAddress2(text)}
            value={address2}
          />
        </View>
        <View style={styles.width}>
          <TextInput
            mode="contain"
            label={'City'}
            activeUnderlineColor={colors.secondary}
            style={styles.field}
            onChangeText={text => setCity(text)}
            value={city}
          />
        </View>
        {showState && (
          <View style={styles.dropdown}>
            <ScrollView>
              {stateList?.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleState(item)}>
                    <Text style={styles.listText}>{item}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        )}
        <View style={styles.row}>
          <View style={styles.stateView}>
            <TouchableOpacity>
              <TextInput
                mode="contain"
                label={'State'}
                onPressIn={() => setShowState(!showState)}
                activeUnderlineColor={colors.secondary}
                style={styles.field}
                onChangeText={text => setState(text)}
                value={state}
                right={
                  <TextInput.Icon
                    onPress={() => setShowState(!showState)}
                    name="chevron-down"
                    color={colors.secondary}
                    style={styles.icon}
                  />
                }
              />
            </TouchableOpacity>
          </View>
          <View style={styles.zipView}>
            <TextInput
              mode="contain"
              label={'Zip Code'}
              activeUnderlineColor={colors.secondary}
              style={styles.field}
              onChangeText={text => setZipCode(text)}
              value={zipCode}
              keyboardType={'numeric'}
            />
          </View>
        </View>
        <View style={styles.top}>
          <TouchableOpacity onPress={updateAddress}>
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
