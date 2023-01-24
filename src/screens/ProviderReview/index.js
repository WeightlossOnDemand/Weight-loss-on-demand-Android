import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
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
import {colors, sizes} from '../../services';
import Loader from 'react-native-three-dots-loader';
import Spinner from 'react-native-spinkit';
import {createChannel, startSession} from '../../services/utilities/api/auth';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

export default function ProviderReview({navigation, route}) {
  const token = useSelector(state => state.token);
  const reason = useSelector(state => state.reason);

  const isVisible = useIsFocused();
  const q1 = useSelector(state => state.q1);
  const q2 = useSelector(state => state.q2);
  const q3 = useSelector(state => state.q3);
  const q4 = useSelector(state => state.q4);
  const q5 = useSelector(state => state.q5);
  const q6 = useSelector(state => state.q6);
  const q7 = useSelector(state => state.q7);
  const q8 = useSelector(state => state.q8);
  const q9 = useSelector(state => state.q9);
  const q10 = useSelector(state => state.q10);
  const q11 = useSelector(state => state.q11);
  const q12 = useSelector(state => state.q12);
  const q13 = useSelector(state => state.q13);
  const q14 = useSelector(state => state.q14);
  const q15 = useSelector(state => state.q15);
  const q16 = useSelector(state => state.q16);
  const q17 = useSelector(state => state.q17);
  const q18 = useSelector(state => state.q18);
  const q19 = useSelector(state => state.q19);
  const q20 = useSelector(state => state.q20);
  const q21 = useSelector(state => state.q21);
  const q22 = useSelector(state => state.q22);
  const q23 = useSelector(state => state.q23);
  const q24 = useSelector(state => state.q24);
  const q25 = useSelector(state => state.q25);
  const q26 = useSelector(state => state.q26);
  const q27 = useSelector(state => state.q27);
  const q28 = useSelector(state => state.q28);
  const q29 = useSelector(state => state.q29);
  const q30 = useSelector(state => state.q30);
  const q31 = useSelector(state => state.q31);
  const q32 = useSelector(state => state.q32);
  const q33 = useSelector(state => state.q33);
  const q34 = useSelector(state => state.q34);
  const q35 = useSelector(state => state.q35);
  const q36 = useSelector(state => state.q36);
  const q37 = useSelector(state => state.q37);
  const q38 = useSelector(state => state.q38);
  const q39 = useSelector(state => state.q39);
  const q40 = useSelector(state => state.q40);
  const q41 = useSelector(state => state.q41);
  const q42 = useSelector(state => state.q42);
  const q43 = useSelector(state => state.q43);
  const q44 = useSelector(state => state.q44);
  const q45 = useSelector(state => state.q45);
  const q46 = useSelector(state => state.q46);
  const q47 = useSelector(state => state.q47);
  const q48 = useSelector(state => state.q48);
  const q49 = useSelector(state => state.q49);
  const q50 = useSelector(state => state.q50);
  const userID = useSelector(state => state.user.user_id);
  const tr_id = useSelector(state => state.tr_id);
  const tr_name = useSelector(state => state.tr_name);
  const tr_image = useSelector(state => state.tr_image);
  const tr_amount = useSelector(state => state.tr_amount);
  const dispatch = useDispatch();
  console.log(tr_id, tr_name, tr_image, tr_amount);

  useEffect(() => {
    sessionStart();
  }, []);

  const sessionStart = async () => {
    try {
      let response = await startSession(
        token,
        q1,
        q2,
        q3,
        q4,
        q5,
        q6,
        q7,
        q8,
        q9,
        q10,
        q11,
        q12,
        q13,
        q14,
        q15,
        q16,
        q17,
        q18,
        q19,
        q20,
        q21,
        q22,
        q23,
        q24,
        q25,
        q26,
        q27,
        q28,
        q29,
        q30,
        q31,
        q32,
        q33,
        q34,
        q35,
        q36,
        q37,
        q38,
        q39,
        q40,
        q41,
        q42,
        q43,
        q44,
        q45,
        q46,
        q47,
        q48,
        q49,
        q50,
        tr_id,
        tr_name,

        // route?.params?.tr_id
        //   ? route?.params?.tr_id
        //   : route?.params?.trainer?.tr_id,
        // route?.params?.tr_name
        //   ? route?.params?.tr_name
        //   : route?.params?.trainer?.tr_name,
        route?.params?.reason ? route?.params?.reason : reason,
        tr_amount,
        // route?.params?.tr_amount
        //   ? route?.params?.tr_amount
        //   : route?.params?.trainer?.tr_amount,
      );
      console.log(response.data);
      if (response.data.status == 200) {
        channelCreate();
        console.log(updatedTrainer);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const channelCreate = async () => {
    try {
      let response = await createChannel(tr_id, userID);
      console.log('----------->>>>>>', response.data.message);
      if (response.data.message == 'Channel created successfully') {
        // sessionStart();
        let updatedTrainer = {
          tr_name: route?.params?.tr_name,
          tr_id: route?.params?.tr_id,
          tr_image: route?.params?.tr_image,
        };
        var myHeaders = new Headers();
        myHeaders.append('Authorization', token);
        var formdata = new FormData();
        formdata.append('tr_id', tr_id);
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow',
        };

        fetch('https://dashboard.weightlossondemand.com/backend/api/notification', requestOptions)
          .then(response => response.json())
          .then(result => {
            setTimeout(() => {
              navigation.navigate('videocallingscreen', {
                tr_id: route?.params?.tr_id,
                tr_name: route?.params?.tr_name,
                tr_image: route?.params?.tr_image,
                tr_amount: route?.params?.tr_amount,
              });
            }, 5000);
          })
          .catch(error => console.log('error', error));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.color}>
        <View style={styles.userView}>
          <View style={[styles.padding]}>
            {/* <TouchableOpacity onPress={() => navigation.goBack()}>
              <View>
                <Text style={styles.cancel}>Cancel</Text>
              </View>
            </TouchableOpacity> */}
            <View style={styles.paddingTop}>
              <Text style={styles.findingText}>
                Your consultant is reviewing your questionnaires...
              </Text>
              <View style={styles.paddingTop}>
                <Spinner
                  style={styles.spinner}
                  isVisible={true}
                  size={50}
                  type={'ThreeBounce'}
                  color={colors.white}
                />
              </View>
            </View>
          </View>
          <View style={styles.imageView}>
            <Image
              source={{
                uri: tr_image,
              }}
              style={Platform.OS !== 'ios' ? styles.docImg : styles.docImgIOS}
            />
          </View>
        </View>
        <View style={[styles.padding, styles.info]}>
          <Text style={styles.head}>{tr_name}</Text>
          <Text style={styles.text}>{route?.params?.trainer?.type}</Text>
        </View>
        <View style={[styles.padding, styles.info, styles.top]}>
          <Text style={styles.text}>Your session will begin shortly</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
