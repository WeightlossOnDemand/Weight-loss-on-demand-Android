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

export default function VideoVisit() {
  return (
    <SafeAreaView>
      <Header title={'What is a Video Session'} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Image source={images.visitVideo} style={styles.image} />
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>What is a Video Session?</Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            Our professional consultants can now provide virtual suggestions
            through video call.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.subHeading}>
            The method used by our consultants to determine your weightloss goal
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            As consultant with a lot of experience, we use two main skills to
            understand the goals our clients are facing. Looking and listening.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            Each client is advised as a unique person with specific needs and
            desires that will be taken into account when developing a
            professional advise. Our consultants win the trust of their clients
            by promising to meet each person's individual needs through
            one-on-one consultations and custom-made workout plans.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.subHeading}>
            A video session can help with many of the most common health and
            fitness issues.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            How our consultants follow the procedure to help clients. There is
            no need to travel to an unknown location, waste time getting there,
            or risk meeting a friend or family member when you can meet with one
            of our experienced consultants in the comfort of your own home. A
            session with one of our professional consultants is equivalent to
            meeting in but may take place whenever and wherever it is most
            convenient for you.
          </Text>
        </View>
        <View style={styles.padding}>
          {/* <Text style={styles.subHeading}>
            How our medical doctors treat children
          </Text> */}
        </View>
        <View style={[styles.padding, styles.paddingBottom]}>
          {/* <Text style={styles.textColor}>
            Our medical doctors are trained to provide care through video visits
            by employing many of the same practices and techniques that are used
            in a traditional doctor’s office. If you would like to have a visit.
            Parents, please be sure to select your child during intake before
            confirming the visit, and ensure your child is present during the
            visit.
          </Text> */}
        </View>
        {Platform.OS == 'ios' && <View style={styles.bottomIOS}></View>}
      </ScrollView>
    </SafeAreaView>
  );
}
