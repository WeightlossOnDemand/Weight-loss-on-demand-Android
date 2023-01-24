import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {styles} from './style';
import {TextInput} from 'react-native-paper';
import {CustomTextFiel} from '../../component/textFiled';
import {useSelector} from 'react-redux';
import {
  getMessages,
  getUser,
  sendMessage,
} from '../../services/utilities/api/auth';
import {useIsFocused} from '@react-navigation/native';
import moment from 'moment';
import Loader from '../../components/Loader';

export default function Chat({navigation, route}) {
  const [message, setmessage] = useState();
  const [visible, setVisible] = useState(false);
  const [msgList, setMsgList] = useState([]);
  const [error, setError] = useState('');
  const [userName, setUserName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loader, setLoader] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const isVisible = useIsFocused();

  const token = useSelector(state => state.token);
  useEffect(() => {
    getUserDetails();
    getChat();
  }, [isVisible]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const getChat = async () => {
    setLoader(true);

    var myHeaders = new Headers();
    myHeaders.append('Authorization', token);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch('https://dashboard.weightlossondemand.com/backend/api/chat_display', requestOptions)
      .then(response => response.json())
      .then(result => {
        setMsgList(result.data);
        setLoader(false);
      })
      .catch(error => console.log('error', error));
  };

  const sendMsg = async () => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', token);

    var formdata = new FormData();
    formdata.append('msg', message);
    formdata.append('sender', 'user');

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch('https://dashboard.weightlossondemand.com/backend/api/msg_sent', requestOptions)
      .then(response => response.json())
      .then(result => {
        getChat();
      })
      .catch(error => console.log('error', error));
  };

  const handleMsg = async () => {
    if (message != '') {
      setVisible(true);
      sendMsg();
    } else {
      setVisible(false);
    }
    setmessage('');
  };

  const getUserDetails = async () => {
    try {
      let response = await getUser(token);
      setUserName(response.data.data.first_name);
      setMiddleName(response.data.data.middle_name);
      setLastName(response.data.data.last_name);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.col}>
      <Header title={'Message'} done={true} />
      <ScrollView style={styles.color}>
        {msgList?.map((item, index) => {
          return (
            <View>
              {item.sender == 'user' ? (
                <View key={index} style={styles.card}>
                  <Text style={styles.text1}>
                    {moment(new Date(item.created_at)).format(
                      'MM/DD/YYYY hh:MMA',
                    )}
                  </Text>

                  <Text style={styles.text1}>
                    {userName} {middleName} {lastName}
                  </Text>
                  <Text style={styles.text111}>{item.message}</Text>
                </View>
              ) : (
                <View style={styles.card2}>
                  <View style={styles.row}>
                    <View>
                      <Image source={images.icon2} style={styles.icon} />
                    </View>
                    <View style={styles.left}>
                      <Text style={styles.text1}>Support Team</Text>
                      <Text style={styles.text1}>
                        {moment(new Date(item.created_at)).format(
                          'MM/DD/YYYY hh:MMA',
                        )}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.text11}>{item.message}</Text>
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.padding2}>
        <View style={styles.width}>
          <CustomTextFiel
            value={message}
            label={'Message'}
            setValue={setmessage}
          />
        </View>

        <View style={styles.paddingTop}>
          <TouchableOpacity onPress={handleMsg}>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Send</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {loader && <Loader />}
    </SafeAreaView>
  );
}
