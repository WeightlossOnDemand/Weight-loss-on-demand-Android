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
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { getUser, updateUserEmail } from '../../services/utilities/api/auth';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

export default function EditEmail({navigation}) {
  const [email, setEmail] = useState('testerjazzy586@gmail.com');
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
        setEmail(response.data.data.email);
        setLoader(false);
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    }, 100);
  };
  const updateEmail = async()=>{
    try {
      let response = await updateUserEmail(token, email);
      console.log(response.data);
      // navigation.navigate("ContactInfo");
      setMessage(response.data.message);

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
          <Text style={styles.addPaymentText}>Update your email</Text>
        </View>
        <View style={[styles.width]}>
          <Text style={styles.text}>
            In the future, you will use your new email address to sign into the
            app.
          </Text>
        </View>
        <View style={styles.width}>
          <TextInput
            mode="contain"
            activeUnderlineColor={colors.secondary}
            style={styles.field}
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>

        <View style={styles.top}>
          <TouchableOpacity onPress={updateEmail}>
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
