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
export default function Diarrhea() {
  return (
    <SafeAreaView>
      <Header title={'Diarrhea & Vomiting'} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Image source={images.diarrhea} style={styles.image} />
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>Diarrhea & Vomiting</Text>
          <View style={styles.paddingTop}>
            <Text style={styles.heading2}>Diarrhea</Text>
          </View>
        </View>

        <View style={styles.padding}>
          <Text style={styles.textColor}>
            Diagnosing the cause and determining appropriate treatment of
            diarrhea typically begins with very focused clinical questions such
            as: How long have you had it? What type is it? What is your travel
            history? Have you been exposed to other sick individuals? The
            physician may also check whether you are running a fever. To treat
            diarrhea there are many conservative measures like consuming large
            amounts of water, or even better Pedialyte or Gatorade, which are
            similar to the consistency of your blood and thus retained better.
            Your physician may also recommend a special diet, over the counter
            and/or prescription medications, or follow-up care.
          </Text>

          <View style={styles.paddingTop}>
            <Text style={styles.heading2}>Vomiting</Text>
          </View>
          <View style={[styles.paddingTop2]}>
            <Text style={styles.textColor}>
              Physicians are often able to determine the cause and provide
              treatment for vomiting during a Video Visit by reviewing your
              medical history, asking questions, and performing an exam. If you
              can keep food and liquids down, your physician can also recommend
              a particular diet to help with recovery.
            </Text>
          </View>

          <View style={[styles.paddingTop2]}>
            <Text style={styles.textColor}>
              While the symptoms are uncomfortable, it is recommended to avoid
              any real treatment until 24-48 hours after the onset of many
              gastrointestinal illnesses, unless the patient is at risk of
              becoming dehydrated, so your body can expunge rather than retain
              the bacteria or virus.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              Stomach and bowel upsets and issues can be caused by many factors:
              bad food, a prescription drug reaction, an allergy, germs and
              more. By connecting with Weight Loss On Demand, you are able to stay in
              the comfort of home and get immediate care.
            </Text>
          </View>
          <View style={[styles.paddingTop2, styles.paddingBottom]}>
            <Text style={styles.textColor}>
              Both diarrhea and vomiting can often be evaluated and treated
              through Weight Loss On Demand. Your physician will frequently be able
              to determine the severity, recommend treatments and suggest
              additional medical care if necessary. They can also make
              recommendations to prevent future illnesses.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
