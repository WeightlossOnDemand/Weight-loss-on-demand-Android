import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GetCare from '../../components/GetCare';
import images from '../../services/utilities/images';
import {styles} from './style';
import {WebView} from 'react-native-webview';
import Header from '../Header';
import {colors} from '../../services';

export default function VideoPlayer({route}) {
  const [loader, setLoader] = useState(false);
  const showLoader = () => {
    setLoader(true);
  };
  const hideLoader = () => {
    setLoader(false);
  };
  console.log(route);
  return (
    <SafeAreaView>
      <Header dark={true} title={'Intro Video'} />
      <ScrollView style={styles.color}>
        <View>
          <View style={styles.top}>
            {loader && (
              <ActivityIndicator
                size="large"
                color={colors.secondary}
                style={styles.loader}
              />
            )}
            <WebView
              source={{uri: route?.params?.uri}}
              style={styles.videoView}
              onLoadStart={showLoader}
              onLoadEnd={hideLoader}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
