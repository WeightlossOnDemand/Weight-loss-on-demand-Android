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
import {useSelector} from 'react-redux';
import images from '../../services/utilities/images';
import {styles} from './style';

export default function MyHealth({navigation}) {

  const [msgList, setMsgList] = useState([]);

  const isVisible = useIsFocused();

  const token = useSelector(state => state.token);
  useEffect(() => {
    getChat();
  }, [isVisible]);

  const getChat = async () => {
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
        console.log(result.data);
      })
      .catch(error => console.log('error', error));
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View style={[styles.row, styles.padding]}>
          <Text style={styles.heading}> My Profile</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
            <Image source={images.setting} style={styles.settingIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.padding}>
        <TouchableOpacity onPress={() => navigation.navigate('HealthVisits')}>
            <View style={[styles.row, styles.card]}>
              <Text style={styles.cardText}>Recent Sessions</Text>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => navigation.navigate('Documents')}>
            <View style={[styles.row, styles.card]}>
              <Text style={styles.cardText}>Documents</Text>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity> */}
          {/* <TouchableOpacity onPress={() => navigation.navigate('LabTests')}>
            <View style={[styles.row, styles.card]}>
              <Text style={styles.cardText}>Lab Tests</Text>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => {msgList?.length ? navigation.navigate('chatscreen'): navigation.navigate('MessageSupport')}}>
            <View style={[styles.row, styles.card]}>
              <Text style={styles.cardText}>Messages</Text>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('Questionnaires')}>
            <View style={[styles.row, styles.card]}>
              <Text style={styles.cardText}>Questionnaires</Text>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity> */}
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('HealthMyProviders')}>
            <View style={[styles.row, styles.card]}>
              <Text style={styles.cardText}>My Providers</Text>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity> */}
          {/* <TouchableOpacity onPress={() => navigation.navigate('Pharmacies')}>
            <View style={[styles.row, styles.card]}>
              <Text style={styles.cardText}>Pharmacies</Text>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
