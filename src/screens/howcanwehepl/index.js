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

export default function HowCanWeHelp({navigation}) {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <SafeAreaView>
      <Header title={'How We Can Help'} />
      <ScrollView style={styles.color}>
        <View style={styles.videoView}>
          <Text style={styles.heading}>How We Can Help</Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.subHeading}>Introduction</Text>
        </View>
        <View style={styles.padding}>
          <View style={styles.bOTtomPAD}>
            <Text style={styles.cardText}>
              Are you struggling with depression, anxiety or changes in your
              mood -- or dealing with the stress of everyday life? Ever thought
              about talking with a therapist or seeing if medication might help?
              Maybe you’ve already been in treatment and haven’t found someone
              you connect with or don’t have good options close by.
            </Text>
          </View>
          <View style={styles.bOTtomPAD}>
            <Text style={styles.cardText}>
              At Doctor On Demand, we hand-picked some of the top
              board-certified providers in the country to provide care through
              our platform. Our providers go through rigorous screening,
              training and ongoing quality assurance. Patients can rate every
              single visit to help ensure the highest quality of care. We
              encourage you to read more about providers and how we all work
              together to deliver world-class care that's convenient, too.
            </Text>
          </View>
          <View style={styles.bOTtomPAD}>
            <Text style={styles.cardText}>
              About half of all Americans will have a mental health disorder in
              their lifetime and nearly 80% don’t get adequate treatment. Doctor
              On Demand’s nationwide network of doctoral-level psychologists and
              board-certified psychiatrists helps you solve two of the greatest
              barriers to better behavioral health: access and quality of care.
            </Text>
          </View>
          <View style={styles.padding}>
            <Text style={styles.subHeading}>Top Conditions We Treat</Text>
          </View>
          <View style={styles.padding}>
            <View style={[styles.row]}>
              <Entypo name="dot-single" color={colors.black} size={25} />
              <Text style={styles.text}>Anxiety</Text>
            </View>
            <View style={[styles.row]}>
              <Entypo name="dot-single" color={colors.black} size={25} />
              <Text style={styles.text}>Depression</Text>
            </View>
            <View style={[styles.row]}>
              <Entypo name="dot-single" color={colors.black} size={25} />
              <Text style={styles.text}>Mood Swings</Text>
            </View>
            <View style={[styles.row]}>
              <Entypo name="dot-single" color={colors.black} size={25} />
              <Text style={styles.text}>Panic</Text>
            </View>
            <View style={[styles.row]}>
              <Entypo name="dot-single" color={colors.black} size={25} />
              <Text style={styles.text}>Anger</Text>
            </View>
            <View style={[styles.row]}>
              <Entypo name="dot-single" color={colors.black} size={25} />
              <Text style={styles.text}>Focus & Concentration</Text>
            </View>
            <View style={[styles.row]}>
              <Entypo name="dot-single" color={colors.black} size={25} />
              <Text style={styles.text}>Obsessions & Compulsions</Text>
            </View>
            <View style={[styles.row]}>
              <Entypo name="dot-single" color={colors.black} size={25} />
              <Text style={styles.text}>Trauma & Abuse</Text>
            </View>
            <View style={[styles.row]}>
              <Entypo name="dot-single" color={colors.black} size={25} />
              <Text style={styles.text}>Grief & loss</Text>
            </View>
            <View style={[styles.row]}>
              <Entypo name="dot-single" color={colors.black} size={25} />
              <Text style={styles.text}>Relationship Problems</Text>
            </View>
            <View style={[styles.row]}>
              <Entypo name="dot-single" color={colors.black} size={25} />
              <Text style={styles.text}>Weight & eating Issues</Text>
            </View>
            <View style={[styles.row]}>
              <Entypo name="dot-single" color={colors.black} size={25} />
              <Text style={styles.text}>Drug & alcohol Use</Text>
            </View>
            <View style={[styles.row]}>
              <Entypo name="dot-single" color={colors.black} size={25} />
              <Text style={styles.text}>Chronic Pain</Text>
            </View>
            <View style={[styles.row]}>
              <Entypo name="dot-single" color={colors.black} size={25} />
              <Text style={styles.text}>Smoking Cessation</Text>
            </View>
          </View>
          <View style={styles.padding}>
            <Text style={styles.subHeading}>What We Dont Treat</Text>
          </View>
          <View style={styles.bOTtomPAD}>
            <Text style={styles.cardText}>
              About half of all Americans will have a mental health disorder in
              their lifetime and nearly 80% don’t get adequate treatment. Doctor
              On Demand’s nationwide network of doctoral-level psychologists and
              board-certified psychiatrists helps you solve two of the greatest
              barriers to better behavioral health: access and quality of care.
            </Text>
          </View>
          <View style={styles.bOTtomPAD}>
            <Text style={styles.cardText}>
              The telehealth services made available through Doctor On Demand
              are provided by a network of U.S. licensed psychologists and board
              certified psychiatrists practicing within a group of independently
              owned professional practices collectively known as “Doctor On
              Demand Professionals”. These practices provide services via the
              Doctor On Demand telehealth platform. Doctor On Demand , Inc. does
              not itself provide any physician, behavioral health or other
              healthcare provider services.
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
