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
import {colors} from '../../services';
import Header from '../../components/Header';
import Entypo from 'react-native-vector-icons/Entypo';

export default function PrescriptionsAndLab() {
  return (
    <SafeAreaView>
      <Header title={'Prescriptions and Lab Work'} />
      <ScrollView style={styles.color}>
        <View style={[styles.padding, styles.coloredView]}>
          <View style={styles.paddingTop}>
            <Text style={styles.heading}>Prescriptions and Lab Work</Text>
          </View>
        </View>
        <View style={styles.padding}>
          <Text style={styles.text}>
            To help you better manage your health, our doctors are able to
            prescribe medication and order lab tests, when clinically necessary.
            This allows you to get the medication you need to feel better, or to
            get proper testing completed to understand what underlying health
            issues you may have.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.text}>
            The process for each is similar to what you’d expect when going to
            see a doctor in person. Here’s how it works:
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={[styles.text, styles.bold]}>Prescriptions</Text>
        </View>
        <View style={styles.padding2}>
          <Text style={styles.text}>
            1. If your doctor recommends a prescription, they will review the
            specific medications and your pharmacy during your visit.
          </Text>
        </View>
        <View style={styles.padding2}>
          <Text style={styles.text}>
            2. The order will be sent electronically, and you’ll be able to pick
            up the prescription when ready. We recommend waiting at least 45
            min.
          </Text>
        </View>
        <View style={styles.padding2}>
          <Text style={styles.text}>
            3. At the pharmacy, you’ll want to have your ID and insurance card
            available for the pharmacist.
          </Text>
        </View>
        <View style={styles.padding2}>
          <Text style={[styles.text, styles.bold]}>Lab Work</Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.text}>
            Lab tests can help identify a number of health conditions, such as
            diabetes, cardiovascular-related issues, and vitamin deficiencies.
          </Text>
        </View>
        <View style={styles.padding2}>
          <Text style={styles.text}>
            1. If your doctor recommends a prescription, they will review the
            specific medications and your pharmacy during your visit.
          </Text>
        </View>
        <View style={styles.padding2}>
          <Text style={styles.text}>
            2. After the visit has finished, you’ll see a list of nearby lab
            locations in the Weight Loss On Demand app and can choose the one
            most convenient for you. The electronic order will automatically be
            sent to your chosen lab.
          </Text>
        </View>
        <View style={styles.padding2}>
          <Text style={styles.text}>
            3. At the pharmacy, you’ll want to have your ID and insurance card
            available for the pharmacist.3. You can go to the lab during their
            business hours to complete your tests. When you arrive, you’ll want
            to have your ID and the order form ready to show the phlebotomist.
            The order form, along with lab hours, address, and directions can be
            found in the app.
          </Text>
        </View>
        <View style={[styles.padding2, styles.bottom]}>
          <Text style={styles.text}>
            3. At the pharmacy, you’ll want to have your ID and insurance card
            available for the pharmacist.4. When ready, the results will first
            be sent to the doctor. They will review, and forward them to you
            with a personalized note about what the results mean and if any
            further action is necessary.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
