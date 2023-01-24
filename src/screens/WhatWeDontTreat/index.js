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

export default function WhatWeDontTreat() {
  return (
    <SafeAreaView>
      <Header title={"What we don't Treat"} />
      <ScrollView style={styles.color}>
        {/* <View style={styles.padding}>
          <Image source={images.coldAndFlu} style={styles.image} />
        </View> */}

        <View style={styles.padding}>
          <Text style={styles.heading}>Conditions We Don't Treat</Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            While our doctors are able to treat many of the top conditions for
            which you need to see a doctor, there are some conditions that we
            don’t treat. Please see an in-person doctor or hospital if you
            experience any of the following:
          </Text>

          <View style={[styles.row, styles.paddingTop]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>
              Traumatic brain or spinal cord injury
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Chest pain and/or numbness</Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Vomiting or coughing blood</Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Lacerations</Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Loss of consciousness</Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Multiple broken bones</Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Severe burns</Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Pediatric ear infections</Text>
          </View>

          <View style={[styles.paddingTop, styles.paddingBottom]}>
            <Text style={styles.textColor}>
              Also, our doctors are unable to write prescriptions for controlled
              substances such as codeine or oxycodone. Please see a doctor in
              person if you require medication classified as a controlled
              substance.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
