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
import Entypo from 'react-native-vector-icons/Entypo';
import {WebView} from 'react-native-webview';
import Header from '../../components/Header';
import {colors, sizes, fontSize, fontFamily} from '../../services';

export default function WhatToExpect({navigation}) {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <SafeAreaView>
      <Header title={'What to Expect'} />
      <ScrollView style={styles.color}>
        <View style={styles.videoView}>
          <Text style={styles.heading}>What to Expect</Text>
        </View>

        <View style={styles.padding}>
          <View style={styles.bOTtomPAD}>
            <Text style={styles.cardText}>
              Our video visits are convenient and comfortable. No more fighting
              traffic as the office comes to you at a time that works for you.
              Get help from the comfort of home or any private setting of your
              choice.
            </Text>
          </View>
          <View style={styles.bOTtomPAD}>
            <Text style={styles.cardText}>
              A video visit is an effective way to receive treatment. Our
              providers see your face, sense your emotions and hear your voice.
              Studies show that patients are as satisfied with video visits as
              in-person treatment.
            </Text>
          </View>
          <View style={styles.bOTtomPAD}>
            <Text style={styles.cardText}>
              Patients also have the power to choose from multiple high-quality
              providers and are not limited to the providers that are available
              in their local area. We make it easy to find a prescreened,
              high-quality provider.
            </Text>
          </View>

          <View style={styles.bOTtomPAD}>
            <Text style={styles.cardText}>
              Your first visit will be a consultation where you and your
              provider work together to figure out the best course and setting
              for treatment.
            </Text>
          </View>
        </View>
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
  padding: {
    padding: sizes.baseMargin,
  },
  subHeading: {
    fontSize: fontSize.h6,
    fontWeight: 'bold',
    color: colors.secondary,
    // marginLeft: sizes.screenWidth * -0.04,
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
    paddingRight: sizes.screenWidth * 0.06,
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
    height: sizes.screenHeight * 0.25,
    backgroundColor: colors.secondary,
    justifyContent: 'flex-end',
    paddingLeft: sizes.screenWidth * 0.04,
    paddingBottom: sizes.screenHeight * 0.03,
  },
  bOTtomPAD: {
    paddingBottom: sizes.screenHeight * 0.05,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingBottom: 15,
    // justifyContent: 'space-around',
  },
  text: {
    color: colors.black,
    fontSize: fontSize.large,
    fontFamily: fontFamily.appTextLight,
    width: sizes.screenWidth * 0.85,
    top: 2,
    lineHeight: 20,
  },
});
