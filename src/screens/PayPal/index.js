import React, {useRef, useState} from 'react';
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
import {styles} from './style';
import WebView from 'react-native-webview';
import { sizes } from '../../services';

export default function PayPal() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View style={{height:sizes.screenHeight}}>
          <WebView source={{uri: 'https://www.paypal.com/agreements/approve?nolegacy=1&ba_token=BA-0AF79775FD4708342&useraction='}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
