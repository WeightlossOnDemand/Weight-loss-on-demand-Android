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
import images from '../../services/utilities/images';
import {styles} from './style';
import {WebView} from 'react-native-webview';
import {colors} from '../../services';
import Header from '../../components/Header';
import Entypo from 'react-native-vector-icons/Entypo';

export default function SoreThroat() {
  return (
    <SafeAreaView>
      <Header title={'Calisthenics'} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Image source={images.soreThroat} style={styles.image} />
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>Calisthenics</Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            You are performing calisthenics whenever you are using your own body
            weight as resistance. Think of mountain climbers, squats, and
            push-ups. The convenience of calisthenics is one of its main
            advantages. You don't need special equipment to perform them
            anywhere. They're excellent for beginners since they let you develop
            the functional strength required to lift weights as well as master
            movement patterns.
          </Text>
        </View>
        <View style={[styles.row, styles.paddingTop]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Pull-up soad</Text>
          </View>
          <View style={[styles.row, styles.paddingTop]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Planks</Text>
          </View>
          <View style={[styles.row, styles.paddingTop]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Glute bridges</Text>
          </View>
          <View style={[styles.row, styles.paddingTop]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Lunges</Text>
          </View>
          <View style={[styles.row, styles.paddingTop]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Handstands</Text>
          </View>
        {/* <View style={styles.padding}>
          <Text style={styles.textColor}>
            The doctors at Weight Loss On Demand Professionals are trained to
            evaluate your symptoms and, depending on the clinical circumstances,
            diagnose and treat the various causes of a sore throat specifically
            through a Video Visit. You can make your visit more efficient by
            having your thermometer ready.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            A sore throat can also be an early sign of the flu. A new CDC
            guideline for flu suggests that you need to take antiviral
            medications such as Tamiflu within 48 hours in order for these
            medications to be effective. However, by the time you start
            realizing you're sick, a day has already passed. Based on the
            clinical assessment performed through the Video Visit, your doctor
            is able to determine if you need antiviral medication such as
            Tamiflu, or over-the-counter medication, at home remedies, or other
            treatments to relieve your symptoms.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            Many patients wonder how it works.
          </Text>
        </View>
        <View style={[styles.padding]}>
          <Text style={styles.textColor}>
            During a Video Visit, doctors ask many questions - e.g. have you had
            this before? Have you traveled recently? Does anyone around you have
            the same symptoms? How long has this been happening? Your physician
            may also ask to review medication history and other medical
            information that is readily available.
          </Text>
        </View>
        <View style={[styles.padding, styles.paddingBottom]}>
          <Text style={styles.textColor}>
            During Video Visits, Weight Loss On Demand physicians also examine
            patients. For example, the physician can use the video and high
            resolution camera on your phone to look deep inside a patient's
            mouth. Depending on the clinical circumstances, doctors are able to
            look for inflammation as well as carefully monitor other symptoms
            you may be experiencing such as congestion, swollen eyes, difficulty
            swallowing or speaking, and more. Your doctor can often use this
            information to make a diagnosis and then treat your condition safely
            and effectively.
          </Text>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
