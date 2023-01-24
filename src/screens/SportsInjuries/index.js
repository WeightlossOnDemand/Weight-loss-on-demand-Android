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
export default function SportsInjuries() {
  return (
    <SafeAreaView>
      <Header title={'Sports Injuries'} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Image source={images.sportInjuries} style={styles.image} />
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>Minor Sports Injuries</Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            Sports and exercise activities are an important part of any healthy
            lifestyle. But, with increased activity comes the increased risk of
            injury. In the absence of an obviously severe injury like a broken
            bone, most doctor's visits concerning sports injuries are patients
            looking for reassurance that the injury is not more severe.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            Sports injuries often fall into either a minor category (ankle
            sprains, wrist sprains, shoulder or rib soreness) or a severe
            category (broken bone, severely torn ligament/tendon).
          </Text>
        </View>

        <View style={[styles.padding, styles.paddingBottom]}>
          <Text style={styles.textColor}>
            The experience of a diagnosis and evaluation of sports injuries with
            a Weight Loss On Demand Video Visit is exactly like being in a doctor's
            office. For example, if you injured your ankle playing basketball,
            the physician can determine the severity of your injuries through a
            few exercises, learning more about where it hurts and the degree of
            pain on a scale of 1-10. If the physician determines your injury is
            severe (e.g. a broken bone or tear) then the physician may recommend
            a follow-up with a specialist. And if it's a simple sprain, home
            care like icing or a brace may be all that you need. With chronic
            cases like tennis elbow or pitcher's arm, the same thing is true --
            the physician can often determine severity and treat minor injuries
            through a Weight Loss On Demand Video Visit.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
