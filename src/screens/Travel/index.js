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
export default function Travel() {
  return (
    <SafeAreaView>
      <Header title={'Aerobic Exercise'} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Image source={images.travel} style={styles.image} />
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>Aerobic Exercise</Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            Aerobic exercise is any exercise that lasts longer than a few
            minutes. Your body gets the energy it needs for this kind of
            activity from its aerobic energy system. Your breathing rate also
            rises as a result of the metabolic system using oxygen to help
            produce energy, according to Bernard.
          </Text>

          <View style={styles.paddingTop}>
            <Text style={styles.heading2}>Popular aerobic exercise forms include:</Text>
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
          {/* <View style={[styles.paddingTop2]}>
            <Text style={styles.textColor}>
              If you are about to travel, we can provide you with advice on
              travel medicines, vaccines, prophylactic measures, foods and
              liquids to avoid, how to keep yourself safe, current and prevalent
              illnesses in the area, and signs and symptoms to look out for. For
              example, there is a clinical trial that showed Pepto Bismol, taken
              7-14 days in advance of a trip to certain areas of the world, can
              vastly reduce the chances of gastro-intestinal flu and traveler's
              vomiting and diarrhea. Why learn about what could have helped
              after you return? Consult with one of our physicians so we can
              help you make the most of your trip and stay healthy.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.heading2}>During Travel</Text>
          </View>
          <View style={[styles.paddingTop2]}>
            <Text style={styles.textColor}>
              Weight Loss On Demand is available everywhere domestically by
              smartphone, tablet or computer, and if traveling internationally,
              you can connect with a physician from anywhere you have internet
              access. Imagine you're away from home, you don't know local
              doctors and you aren't feeling well. Connect with a doctor for a
              Video Visit. Our doctor's can tell you whether your condition
              requires urgent care, if you can wait to be treated or if it's
              something that needs to run its course. While they cannot
              prescribe medications internationally, the physicians at Weight
              Loss On Demand Professionals can diagnose your condition, suggest
              medications that may be available where you are, share
              non-prescription remedies, inform you of medical treatments to
              avoid and determine if you should adjust your travel plans. Don't
              let an illness ruin your travel. We can help, at the very least in
              the short-term, and put your mind at ease.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.heading2}>Returned from Travel</Text>
          </View>
          <View style={[styles.paddingTop2, styles.paddingBottom]}>
            <Text style={styles.textColor}>
              To effectively diagnose and treat post-travel conditions, the
              physicians at Weight Loss On Demand Professionals can ask about
              your travel history, review your history and perform an
              examination, combine that with accepted medical knowledge of
              triggers common to those regions, and help determine and
              coordinate any necessary follow-up care.
            </Text>
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
