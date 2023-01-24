import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Linking,
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
import {colors} from '../../services';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useIsFocused } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export default function ContactSupport({navigation}) {
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
        <View>
          <Header dark={true} title={'Help'} />
        </View>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Text style={styles.addPaymentText}>Contact support</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('FAQs')}>
          <View style={[styles.row, styles.card]}>
            <Octicons name="question" color={colors.secondary} size={30} />
            <View>
              <Text style={styles.cardText}>{'   '}Get Help Qucikly</Text>
              <Text style={styles.faqText}>{'   '}Browse our FAQs</Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {msgList?.length ? navigation.navigate('chatscreen'): navigation.navigate('MessageSupport')}}>
          <View style={[styles.row, styles.card]}>
            <MaterialCommunityIcons
              name="message-text-outline"
              color={colors.secondary}
              size={30}
            />
            <View>
              <Text style={styles.cardText}>{'   '}Message Support</Text>
              <Text style={styles.faqText}>
                {'   '}Send us a secure message
              </Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('tel:2813250066');
          }}>
          <View style={[styles.row, styles.card]}>
            <Image source={images.call} style={styles.callIcon} />
            {/* <Octicons name="question" color={colors.secondary} size={30} /> */}
            <View>
              <Text style={styles.cardText}>{'   '}Call Support 24/7</Text>
              <Text style={styles.faqText}>{'   '}(281)3250066</Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
