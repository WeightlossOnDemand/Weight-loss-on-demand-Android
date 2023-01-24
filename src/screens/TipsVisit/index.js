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

export default function TipsVisit() {
  return (
    <SafeAreaView>
      <Header title={'Tips for a Successful Session'} />
      <ScrollView style={styles.color}>
        <View style={[styles.padding, styles.coloredView]}>
          <View style={styles.paddingTop}>
            <Text style={styles.heading}>
              Tips for a successful video session
            </Text>
          </View>
        </View>
        <View style={styles.padding}>
          <Text style={styles.text}>
            With limited time on your session, we want to make the most of your
            time. Here are some tips for a successful video session.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.text}>Prepare ahead of time</Text>
        </View>
        <View style={[styles.row, styles.tinyPadding]}>
          <Entypo name="dot-single" color={colors.disabledBg} size={25} />
          <Text style={[styles.text, styles.right]}>
            <Text style={styles.bold}>Write down talking points.</Text> Prepare
            questions or concerns to discuss.
          </Text>
        </View>
        <View style={[styles.row, styles.tinyPadding]}>
          <Entypo name="dot-single" color={colors.disabledBg} size={25} />
          <Text style={[styles.text, styles.right]}>
            <Text style={styles.bold}>Upload documents.</Text> Prepare
            questions or goals to discuss.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.text}>Choose a good location</Text>
        </View>
        <View style={[styles.row, styles.tinyPadding]}>
          <Entypo name="dot-single" color={colors.disabledBg} size={25} />
          <Text style={[styles.text, styles.right]}>
            <Text style={styles.bold}> Use a strong internet connection.</Text>{' '}
            It is best to connect to a WiFi network.
          </Text>
        </View>
        <View style={[styles.row, styles.tinyPadding]}>
          <Entypo name="dot-single" color={colors.disabledBg} size={25} />
          <Text style={[styles.text, styles.right]}>
            <Text style={styles.bold}> Find a quiet and private space.</Text>{' '}
            Your consultant may need to ask for personal information.
          </Text>
        </View>
        <View style={[styles.row, styles.tinyPadding]}>
          <Entypo name="dot-single" color={colors.disabledBg} size={25} />
          <Text style={[styles.text, styles.right]}>
            <Text style={styles.bold}>Be indoors with bright lighting.</Text>{' '}
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.text}>Get ready</Text>
        </View>
        <View style={[styles.row, styles.tinyPadding]}>
          <Entypo name="dot-single" color={colors.disabledBg} size={25} />
          <Text style={[styles.text, styles.right]}>
            <Text style={styles.bold}>Turn off other devices</Text> Reduce
            background noise and distractions from TVs, music, or video games.
          </Text>
        </View>
        <View style={[styles.row, styles.tinyPadding]}>
          <Entypo name="dot-single" color={colors.disabledBg} size={25} />
          <Text style={[styles.text, styles.right]}>
            <Text style={styles.bold}>Turn on "Do Not Disturb" mode.</Text>{' '}
            Prevent interruptions during your sessions.
          </Text>
        </View>
        <View style={[styles.row, styles.tinyPadding]}>
          <Entypo name="dot-single" color={colors.disabledBg} size={25} />
          <Text style={[styles.text, styles.right]}>
            <Text style={styles.bold}>
              Open the Weight Loss On Demand app a few minutes prior to your
              session.
            </Text>{' '}
            Prevent interruptions during your session.You'll receive an alert in
            the app when your consultant is ready.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.text}>During the session</Text>
        </View>
        <View style={[styles.row, styles.tinyPadding]}>
          <Entypo name="dot-single" color={colors.disabledBg} size={25} />
          <Text style={[styles.text, styles.right]}>
            <Text style={styles.bold}>Be present.</Text> Avoid multitasking or
            doing other activities like eating or watching TV.
          </Text>
        </View>
        <View style={[styles.row, styles.tinyPadding]}>
          <Entypo name="dot-single" color={colors.disabledBg} size={25} />
          <Text style={[styles.text, styles.right]}>
            <Text style={styles.bold}>Stay seated.</Text>Prop your phone up
            securely if possible.
          </Text>
        </View>
        <View style={[styles.row, styles.tinyPadding]}>
          <Entypo name="dot-single" color={colors.disabledBg} size={25} />
          <Text style={[styles.text, styles.right]}>
            <Text style={styles.bold}>Reduce distractions.</Text> Keep other
            devices off and let others know you need privacy.
          </Text>
        </View>
        <View style={[styles.row, styles.tinyPadding, styles.bottom]}>
          <Entypo name="dot-single" color={colors.disabledBg} size={25} />
          <Text style={[styles.text, styles.right]}>
            <Text style={styles.bold}>Share your goals.</Text>Your
            consultant is there to support you. They will do their best to help
            you feel comfortable, so that you can share your goals and start
            making a change!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
