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
  StyleSheet,
} from 'react-native';
import GetCare from '../../components/GetCare';
import images from '../../services/utilities/images';

import {WebView} from 'react-native-webview';
import Header from '../../components/Header';
import {colors, sizes, fontSize} from '../../services';

export default function QualityOversight({navigation}) {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <SafeAreaView>
      <Header title={'Quality & Oversight'} />
      <ScrollView style={styles.color}>
        <View style={styles.videoView}>
          <Text  style={Platform.OS !== 'ios' ? styles.heading : styles.headingIOS}>Quality &</Text>
          <Text  style={Platform.OS !== 'ios' ? styles.heading : styles.headingIOS}>Oversight </Text>
        </View>

        <View style={styles.padding}>
          <View style={styles.bOTtomPAD}>
            <Text style={styles.cardText}>
              Imagine being able to submit feedback on your trainer's
              efficiency, friendliness, care, and ability to listen and explain
              things after each visit. It's a novel approach, but we do things
              this way at Weight Loss on Demand.
            </Text>
          </View>
          <View style={styles.bOTtomPAD}>
            <Text style={styles.cardText}>
              The quality of your service is evaluated after each visit. We and
              our service providers can learn a lot. Our service providers and
              information to better our service wherever possible. They also
              shed light on the providers' and trainers' perceptions of the
              providers' and trainers’ level of professionalism, service, and
              helpfulness.
            </Text>
          </View>
          <View style={styles.bOTtomPAD}>
            <Text style={styles.cardText}>
              Please take a moment to rate your visit after each of your
              appointments. We and our service providers can learn from the
              ratings and use that information to better our service wherever
              possible. They also assist us learn more about the trainers'
              perceptions of their degree of professionalism, service, and
              helpfulness.
            </Text>
          </View>
          <View style={styles.bOTtomPAD}>
            <Text style={styles.cardText}>
            Each of our experts has made a personal commitment to never stop growing in their fields.
            </Text>
          </View>
        </View>
        {Platform.OS == 'ios' && <View style={styles.bottomIOS}></View>}

      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  color: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
  },
  image: {
    height: sizes.screenHeight * 0.25,
    width: sizes.screenWidth,
  },
  playBtn: {
    top: sizes.screenHeight * 0.08,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 247,0.3)',
    height: sizes.screenHeight * 0.1,
    width: sizes.screenWidth * 0.2,
    borderRadius: sizes.screenWidth * 0.8,
    justifyContent: 'center',
  },
  playIcon: {
    height: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.1,
    alignSelf: 'center',
  },
  textView: {
    paddingTop: sizes.screenHeight * 0.09,
    paddingLeft: sizes.screenWidth * 0.05,
  },
  heading: {
    fontSize: fontSize.h4,
    color: colors.white,
  },
  headingIOS:{
    fontSize: fontSize.h5,
    color: colors.white,
  },
  padding: {
    padding: sizes.baseMargin,
    paddingBottom:sizes.screenHeight*0.06,
  },
  subHeading: {
    fontSize: fontSize.h6,
    fontWeight: 'bold',
    color: colors.secondary,
    lineHeight: sizes.screenHeight * 0.05,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.01,
    marginBottom: sizes.screenHeight * 0.02,
    alignSelf: 'center',
    width: sizes.screenWidth * 0.9,
    borderWidth: 1,
    borderColor: colors.disabledBg,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  cardText: {
    color: colors.primary,
    fontSize: fontSize.large,
    paddingRight: sizes.screenWidth * 0.0,
    lineHeight: sizes.screenHeight * 0.04,
  },
  symbol: {
    color: colors.secondary,
    fontSize: fontSize.h4,
    bottom: 1,
    paddingRight: sizes.TinyMargin,
  },
  videoView: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.2,
    backgroundColor: colors.secondary,
    justifyContent: 'flex-end',
    paddingLeft: sizes.screenWidth * 0.04,
    paddingBottom: sizes.screenHeight * 0.03,
  },
  bOTtomPAD: {
    paddingBottom: sizes.screenHeight * 0.05,
  },
  bottomIOS: {
    paddingBottom: sizes.screenHeight * 0.05
  },
});
