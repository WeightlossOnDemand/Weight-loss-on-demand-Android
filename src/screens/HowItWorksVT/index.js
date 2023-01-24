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

export default function HowItWorksVT() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <SafeAreaView>
      <Header title={'Video Transcript'} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Image source={images.appIcon} style={styles.icon} />
          <View style={styles.paddingTop}>
            <Text style={styles.heading}>
              Transcript for "How Does a Video Session with Weight Loss On
              Demand Work?"
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              <Text style={styles.bold}>Client: </Text>A video session with a
              consultant... How does that work?
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.textColor, styles.italic]}>
              [The video now shows short conversations of client interacting
              with Weight Loss On Demand consultant through their mobile
              devices. All the clients are speaking with consultant through a
              video call].
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.bold, styles.subHeading]}>Scene 1</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              <Text style={styles.bold}>
                Weight Loss On Demand Consultant:{' '}
              </Text>
              Hi! This is Tony with Weight Loss On Demand.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              <Text style={styles.bold}>Client 1: </Text>
              Hi Tony, I'm Jessica.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.bold, styles.subHeading]}>Scene 2</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              <Text style={styles.bold}>Client 2: </Text>
              The last time I measured my weight, it was 150lb.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.bold, styles.subHeading]}>Scene 3</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              <Text style={styles.bold}>Client 3: </Text>
              I've an upcoming photoshoot and would like to lose weight.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.bold, styles.subHeading]}>Scene 4</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              <Text style={styles.bold}>
                Weight Loss On Demand Consultant:{' '}
              </Text>
              You have an upcoming photoshoot and you would like to lose weight.
              Is this the first time you're ever talking to a consultant
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              <Text style={styles.bold}>Client 4: </Text>
              Yeah, I mean, it's the first time I'll be doing it.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.bold, styles.subHeading]}>Scene 5</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              <Text style={styles.bold}>Weight Loss On Demand Therapist: </Text>
              18 years ago, I went into medicine to help people with their
              emotional health and this makes it easier to do that.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              <Text style={styles.bold}>Client 4: </Text>I want to feel like
              it's not chaos. I want to feel like I have a choice.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              <Text style={styles.bold}>Weight Loss On Demand Provider: </Text>
              Of the top 20 problems that patients go into the Emergency
              Room/Urgent Care for, probably 18 out of that 20 could be treated
              through our model with Weight Loss On Demand.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.bold, styles.subHeading]}>Scene 6</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              <Text style={styles.bold}>Weight Loss On Demand Provider: </Text>
              Do you feel anything there?{' '}
              <Text style={styles.italic}>
                [Patient is pointing to their knee, and doctor can see the
                movement]
              </Text>
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              <Text style={styles.bold}>Client 5: </Text>Yeah there’s a little
              bit of a pull here.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.bold, styles.subHeading]}>Scene 7</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              <Text style={styles.bold}>Weight Loss On Demand Provider: </Text>
              <Text style={styles.italic}>
                [Waving to the phone camera where Naseem, a baby, is visible]
              </Text>{' '}
              Hi! How are you, Naseem?
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.bold, styles.subHeading]}>Scene 8</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              <Text style={styles.bold}>Weight Loss On Demand Provider: </Text>
              Often I use keflex so we'll get that prescription called into the
              pharmacy for you and you should be able to pick it up in 30
              minutes.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              <Text style={styles.bold}>Client 5: </Text>That’s amazing, thank
              you.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.bold, styles.subHeading]}>Scene 9</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              <Text style={styles.bold}>Client: </Text>It's not about me
              fighting through this insanity of the medical system, this is
              fantastic. you.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={[styles.bold, styles.subHeading]}>Scene 10</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              <Text style={styles.bold}>Weight Loss On Demand Provider: </Text>
              If you have any other questions or concerns, please don't hesitate
              to call us back.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              <Text style={styles.bold}>Client 6: </Text>If you have any other
              questions or concerns, please don't hesitate to call us back.
            </Text>
          </View>
          <View style={[styles.paddingTop, styles.bottom]}>
            <Text style={styles.textColor}>
              <Text style={styles.bold}>Weight Loss On Demand Provider: </Text>
              Thanks for calling Weight Loss On Demand. Have a good day!
            </Text>
          </View>
        </View>
        {Platform.OS == 'ios' && <View style={styles.bottomIOS}></View>}
      </ScrollView>
    </SafeAreaView>
  );
}
