import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {styles} from './style';

export default function ProviderHelpChoose() {
  return (
    <SafeAreaView>
      <Header dark={true} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.smallText}>Choosing your type of visit</Text>
          <View style={styles.paddingTop}>
            <Text style={styles.text}>
              The Weight Loss On Demand behavioral health practice includes
              psychiatrists, psychologists and masters level therapists. What's
              the difference? Psychologists and therapists use therapy to help
              you talk through your problems. Psychiatrists, who are physicians,
              use medication to treat your symptoms.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text}>
              Sometimes, a combination of therapy and medication works best. In
              that case, patients see a psychiatrist for medication management
              and a therapist for talk therapy. If you're not sure, start with a
              therapist who can help you figure out what treatment may be best
              for you.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text}>
              Psychologists and psychiatrists both have doctoral degrees,
              usually a PhD or PsyD for psychologists and an MD or DO for
              psychiatrists. Our masters level therapy providers have masters
              degrees in social work or family and marital counseling.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
