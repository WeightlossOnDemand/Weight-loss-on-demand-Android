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
export default function Allergies() {
  return (
    <SafeAreaView>
      <Header title={'Strength training'} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Image source={images.allergies} style={styles.image} />
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>Strength training</Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            Adding muscle is important. In fact, according to a study published
            in the BMJ in July 2020, your strength and muscle health are major
            contributors to your lifespan. That's because doing exercises that
            build muscle strength and lean, active muscle can help lower the
            risk of chronic diseases, improve mobility and function, and protect
            the health of the brain.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            Lifting their children or using the stairs can be strength training
            for some people. Others focus on mountain climbs and tire flips.
            Having said that, there are numerous approaches you can use to
            achieve your strength and muscular goals.
          </Text>
        </View>
        {/* <View style={styles.padding}>
          <Text style={styles.textColor}>
            Food allergy affects up to 4% of adults and up to 8% of children. If
            you develop an allergy to any foods, ingestion can cause hives,
            swelling, breathing problems, and in more severe cases, anaphylactic
            shock within minutes to hours.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            Weight Loss On Demand can address a number of your allergy-related
            needs including access to a doctor when and where you need it,
            prescriptions and allergic reaction preparedness plans.
          </Text>
        </View>
        <View style={[styles.padding, styles.paddingBottom]}>
          <Text style={styles.textColor}>
            We also provide an assessment of your living environment to keep it
            allergy-free. Your Weight Loss On Demand physician will work with
            you during the video visit to identify things in your home that may
            be contributing to your symptoms.
          </Text>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
