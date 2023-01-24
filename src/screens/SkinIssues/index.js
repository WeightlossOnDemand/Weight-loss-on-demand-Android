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
export default function SkinIssues() {
  return (
    <SafeAreaView>
      <Header title={'Skin Issues / Rashes'} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Image source={images.skinIssues} style={styles.image} />
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>Conditions Affecting the Skin</Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            Our skin is the biggest organ in the human body, so it makes sense
            that most of us experience skin issues at some point in our lives.
            Common conditions include rashes, STDs, poison ivy, insect bites,
            cold sores, psoriasis, shingles, contact dermatitis, scrapes,
            allergies, hives, sores and boils. These conditions are most often
            diagnosable by visual inspection (having the physician look at the
            condition) during a Weight Loss On Demand Video Visit.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            An important component of dermatological assessment is recognizing
            patterns, features, signs and symptoms. Using the hi-resolution
            camera through the Weight Loss On Demand app, you can upload
            multiple photos safely and directly to your physician. The photos
            are transmitted with lossless compression - meaning the pixel
            fidelity is maintained during transmission and the photos are even
            better than the naked eye. The camera allows you to take several
            views of the condition. Physicians also have the ability to store
            images in a patient's medical records to assess changes over time.
          </Text>
        </View>

        <View style={[styles.padding, styles.paddingBottom]}>
          <Text style={styles.textColor}>
            Treatment may consist of a topical ointment or cream, or an oral
            medication, either a prescription, over the counter or something in
            your own home. Physicians are only going to prescribe medications
            when necessary. For example, a patient could present with a horrible
            looking rash that can be significantly improved with a few rounds of
            ice application. If a condition is treatable with simpler
            medications or no medications at all, physicians will almost always
            go that route.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
