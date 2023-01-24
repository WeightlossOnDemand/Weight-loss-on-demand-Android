import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import images from '../../services/utilities/images';
import {styles} from './style';
import {colors, sizes, fontSize, fontFamily} from '../../services';
import Header from '../../components/Header';
import {viewClientDetails} from '../../store/actions';
export default function startSession({navigation}) {
  const [msgList, setMsgList] = useState([]);
  const [currentSession, setCurrentSession] = useState(false);
  const [visitId, setVistId] = useState('');
  const [appId, setAppId] = useState('');
  const [error, setError] = useState('');
  const isVisible = useIsFocused();

  const token = useSelector(state => state.token);
  const detailStatus = useSelector(state => state.detailStatus);

  const dispatch = useDispatch();
  console.log('000=====>>>', detailStatus);
  console.log(token);
  useEffect(() => {
    getUserVisit();
  }, [isVisible]);

  const getUserVisit = async () => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', token);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch('https://dashboard.weightlossondemand.com/backend/api/question_review', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log('result---------->>>>', result.data.visit_id);
        if (result.data.visit_id) {
          console.log('works', result.data.visit_id);
          setVistId(result.data.visit_id);
          dispatch(viewClientDetails(true));

          // setAppId('');
        }
        console.log('---eers----->>>', result.message);
        if (result.data.ap_id) {
          setAppId(result.data.ap_id);
          // dispatch(viewClientDetails(true));

          // setVistId('');
        } else {
          // setVistId('');
          setAppId('');
        }
      })
      .catch(error => setError(error));
  };
  console.log('visit id------->>', visitId);
  return (
    <SafeAreaView>
      <View>
        <Header title={'Current Session'} />
      </View>
      <View style={styles.container}>
        {/* {!currentSession && ( */}
        <View>
          <View style={{paddingBottom: sizes.TinyMargin}}>
            {visitId !== '' && appId == '' && (
              <>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('userDetailTrainer', {
                    // ap_id: appId,
                    visit_id: visitId,
                  })
                }
                // disabled={email != '' && password != '' ? false : true}
                style={styles.but}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: fontSize.h6,
                    fontFamily: fontFamily.appTextHeading,
                    fontWeight: 'bold',
                  }}>
                   
                </Text>
              </TouchableOpacity>
              <View style={{marginTop:sizes.screenHeight * 0.01}}>

              <TouchableOpacity
              onPress={() => navigation.navigate('trainervideocall')}
              style={
                styles.but 
              }>
              <Text
                style={{
                  color: '#fff',
                  fontSize: fontSize.h6,
                  fontFamily: fontFamily.appTextHeading,
                  fontWeight: 'bold',
                }}>
                Start Session
              </Text>
            </TouchableOpacity>
            </View>

            </>

            )}
            {appId !== '' && visitId == '' && detailStatus && (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('userDetailTrainer', {
                    ap_id: appId,
                    // visit_id: visitId,
                  })
                }
                // disabled={email != '' && password != '' ? false : true}
                style={styles.but}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: fontSize.h6,
                    fontFamily: fontFamily.appTextHeading,
                    fontWeight: 'bold',
                  }}>
                  View Client Details
                </Text>
              </TouchableOpacity>
            )}
          </View>
          {/* <View style={{paddingBottom: sizes.TinyMargin}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('trainervideocall')}
                // disabled={email != '' && password != '' ? false : true}
                style={styles.but}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: fontSize.h6,
                    fontFamily: fontFamily.appTextHeading,
                    fontWeight: 'Bold',
                  }}>
                  View Questionnaires
                </Text>
              </TouchableOpacity>
            </View> */}
          
        </View>
        {/* )} */}
      </View>
    </SafeAreaView>
  );
}
