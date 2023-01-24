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

export default function IntroductionScreen({navigation}) {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <SafeAreaView>
      <Header title={'Introduction'} />
      <ScrollView style={styles.color}>
        <View style={styles.videoView}>
          <Text style={styles.heading}>Welcome to</Text>
          <Text style={styles.heading}>Weight Loss On Demand</Text>
        </View>

        <View style={styles.padding}>
          <View style={styles.bOTtomPAD}>
            <Text style={styles.cardText}>
              Weight Loss On Demand lets you talk to professional consultants quickly, easily, and affordably,
              all from the comfort of your own home. Perhaps you're curious,
              though: just who are these professional consultants? How do we make sure
              they're suitable? Exactly what kind of supervision is there?
            </Text>
          </View>
          <View style={styles.bOTtomPAD}>
            <Text style={styles.cardText}>
              At Weight Loss On Demand, we have carefully picked only the most
              qualified and board-certified professional consultants to offer their
              services online to our users. All of our consultants go
              through a thorough screening process, get a lot of training, and
              are constantly checked for quality. If clients are able to rate
              each sessions, it will greatly assist in maintaining a high standard
              of care. In order to maintain a consistently high standard of
              consultancy can provide feedback after each and every sessions.
            </Text>
          </View>
          <View style={styles.bOTtomPAD}>
            <Text style={styles.cardText}>
              Learn more about our consultants and how we collaborate to get you
              the best possible advise at your convenience by reading
              on.
            </Text>
          </View>
        </View>
        {Platform.OS == 'ios' ? <View style={styles.bottomIOS}></View> : <View style={styles.bottom}></View>}
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
    fontSize: fontSize.h5,
    color: colors.white,
  },
  padding: {
    padding: sizes.baseMargin,
  },
  subHeading: {
    fontSize: fontSize.h6,
    fontWeight: 'bold',
    color: colors.secondary,
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
    fontSize: fontSize.medium,
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
    height: sizes.screenHeight * 0.15,
    backgroundColor: colors.secondary,
    justifyContent: 'flex-end',
    paddingLeft: sizes.screenWidth * 0.04,
    paddingBottom: sizes.screenHeight * 0.03,
  },
  bOTtomPAD: {
    paddingBottom: sizes.screenHeight * 0.05,
  },
  bottomIOS: {
    paddingBottom: sizes.screenHeight * 0.1,
  },
  bottom:{
    paddingBottom: sizes.screenHeight * 0.07,

  }
});
