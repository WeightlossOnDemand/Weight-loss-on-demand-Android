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
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Error from '../../components/Error';

export default function Verificationscreen({navigation, route}) {
  const CELL_COUNT = 4;
  const [email, setEmail] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleVerify = () => {
    if (value) {
      var formdata = new FormData();
      formdata.append('email', route?.params?.email);
      formdata.append('code', value);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };

      fetch('https://dashboard.weightlossondemand.com/backend/api/check_code', requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.message.includes('Invalid')) {
            setError(result.message);
          } else {
            navigation.navigate('EnterNewPassword', {
              email: route?.params?.email,
            });
          }
        })
        .catch(error => console.log('error', error));
    }
  };
  return (
    <SafeAreaView>
      <Header title={'Verification'} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.text}>
            Please enter your email address and we will send you a link to reset
            your password:
          </Text>
          <View style={styles.width}>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
          </View>

          <View style={styles.paddingTop}>
            <TouchableOpacity onPress={handleVerify}>
              <View style={styles.buttonView}>
                <Text style={styles.buttonText}>Verify</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {error !== '' && <Error title={'Oops!'} message={error} />}
      </ScrollView>
    </SafeAreaView>
  );
}
