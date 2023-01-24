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

export default function ScreeningTraining({navigation}) {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <SafeAreaView>
      <Header title={'Screening & Training'} />
      <ScrollView style={styles.color}>
        <View style={styles.videoView}>
          <Text
            style={Platform.OS !== 'ios' ? styles.heading : styles.headingIOS}>
            How We select,
          </Text>
          <Text style={Platform.OS !== 'ios' ? styles.heading : styles.headingIOS}>Screen & Train Our </Text>
          <Text style={Platform.OS !== 'ios' ? styles.heading : styles.headingIOS}>Providers </Text>
        </View>

        <View style={styles.padding}>
          <View style={styles.bOTtomPAD}>
            <Text style={styles.cardText}>
              Weight Loss on Demand may be a name familiar to you or
              word-of-mouth. Possibly you've come across a fascinating article
              about us. It's nice to be able to talk to a training specialist
              without having to leave the house. If you're wondering who the
              suppliers of Weight Loss on Demand are, you're not alone. We
              appreciate your inquiry about this.
            </Text>
          </View>
          <View style={styles.bOTtomPAD}>
            <Text style={styles.cardText}>
              As a company, we take great pride in the excellence of our
              provider network. The most important things we do at Weight Loss
              by Demand are select, test, and train our board-certified
              trainers. 
            </Text>
          </View>
          <View>
            {/* <TouchableOpacity>
              <Text style={styles.subHeading}>Providers</Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity>
              <Text style={styles.subHeading}>psychlogist & Psychiatrists</Text>
            </TouchableOpacity> */}
          </View>
        {Platform.OS == 'ios' && <View style={styles.bottomIOS}></View>}

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
  headingIOS:{
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
    height: sizes.screenHeight * 0.2,
    backgroundColor: colors.secondary,
    justifyContent: 'flex-end',
    paddingLeft: sizes.screenWidth * 0.04,
    paddingBottom: sizes.screenHeight * 0.03,
  },
  bOTtomPAD: {
    paddingBottom: sizes.screenHeight * 0.03,
  },
  bottomIOS: {
    paddingBottom: sizes.screenHeight * 0.1,
  },
});
