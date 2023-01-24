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
import Entypo from 'react-native-vector-icons/Entypo';

import images from '../../services/utilities/images';
import {styles} from './style';
import {WebView} from 'react-native-webview';
import {colors} from '../../services';
import Header from '../../components/Header';
export default function UTIs() {
  return (
    <SafeAreaView>
      <Header title={'Weightlifting'} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Image source={images.utis} style={styles.image} />
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>Weightlifting</Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            The best activity for developing strength is lifting weights.
            Everyone's definition of weight training is different, ranging from
            triceps kickbacks with 5-pound dumbbells to Olympic lifts with 500
            pounds on a barbell. Your goals determine what kind of weightlifting
            you should do.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            You can add weight and perform load workouts once you're comfortable
            with body-weight activities. There are more exercises than those
            using dumbbells and bars. Exercise machines, resistance bands,
            kettlebells, medicine balls, and a variety of other weightlifting
            tools are all available.
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
            In cases of an uncomplicated UTI, the Infectious Disease Society of
            America (IDSA) does not recommend a urinalysis.
          </Text>
        </View>
        <View style={[styles.padding, styles.paddingBottom]}>
          <Text style={styles.textColor}>
            Most urinary tract infections are treated with prescription
            antibiotics. Ask your physician for suggestions on ways to prevent
            future urinary tract infections.
          </Text>
        </View> */}
        {Platform.OS == 'ios' && <View style={styles.bottomIOS}></View>}

      </ScrollView>
    </SafeAreaView>
  );
}
