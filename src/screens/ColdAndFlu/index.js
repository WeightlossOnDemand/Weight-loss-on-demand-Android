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

export default function ColdAndFlu() {
  return (
    <SafeAreaView>
      <Header title={'Weight-Bearing Workout'} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Image source={images.coldAndFlu} style={styles.image} />
        </View>

        <View style={styles.padding}>
          <Text style={styles.heading}>Weight-Bearing Workout</Text>
          <Text style={styles.textColor}>
            A weight-bearing exercise is any movement that requires you to hold
            yourself against gravity, such as standing up while performing it.
            Many of the best strength exercises may also be done while engaging
            in some of the most well-liked weight-bearing activities (more on
            this later). Exercises like hiking, climbing stairs, and jumping
            rope work up your lower body muscles, such as your quads, glutes,
            and hamstrings, which are important for balance, while also raising
            your heart rate and making you sweat.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>Weight-Bearing Workout</Text>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              When you aren’t feeling well, you should be able to access expert,
              quality care from the comfort of home. That’s why we’re committed
              to connecting you with a board-certified doctor anywhere, anytime.
              With an average wait time of under five minutes, it’s always easy,
              convenient, and affordable to get the care you deserve this flu
              season.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.heading}>Diagnosing Your Issue</Text>
            <View style={styles.paddingTop}>
              <Text style={styles.textColor}>
                Weight-bearing activities also include traditional strength
                exercises, which can be done with or without gym equipment.
              </Text>
              <Text style={styles.textColor}>Examples comprise:</Text>
            </View>
          </View>
          <View style={[styles.row, styles.paddingTop]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Running</Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Skiing in the mountains</Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>standing poses for yoga</Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Bodyweight squats</Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Biceps curls while standing</Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}> Exercises Without Bearing Weight</Text>
          </View>
          <View style={[styles.paddingTop]}>
            {/* <Text style={styles.heading}>Providing Treatment</Text> */}
            <View style={styles.paddingTop}>
              <Text style={styles.textColor}>
                Great strength exercises don't always include lifting weights.
                Non-weight-bearing workouts typically entail lying down,
                sitting, or utilizing a machine.
              </Text>
            </View>
            <View style={[styles.row, styles.paddingTop]}>
              <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
              <Text style={styles.text}>
                Exercises like these are easier on the joints and are beneficial
                for people with joint problems and mobility limitations.
                Strength machines are very useful for assisting athletes in
                isolating particular muscles, even though they can also be
                helpful for training and recovering from injuries.
              </Text>
            </View>
            </View>
            <View style={[styles.row, styles.paddingTop]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Non-weight-bearing exercise examples include:</Text>
          </View>
          <View style={[styles.row, styles.paddingTop]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Knee presses</Text>
          </View>
          <View style={[styles.row, styles.paddingTop]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Sitting rows</Text>
          </View>
          <View style={[styles.row, styles.paddingTop]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Leg elongations</Text>
          </View>
          <View style={[styles.row, styles.paddingTop]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Biceps curls while seated</Text>
          </View>
          <View style={[styles.row, styles.paddingTop]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>curled-up hamstrings</Text>
          </View>
            {/* <View style={[styles.row, styles.paddingTop2]}>
              <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
              <Text style={styles.text}>
                Advising on the right over-the-counter medication to manage
                symptoms
              </Text>
            </View>
            <View style={[styles.row, styles.paddingTop2]}>
              <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
              <Text style={styles.text}>
                Recommendations on home remedies that actually work
              </Text>
            </View>
            <View
              style={[styles.row, styles.paddingTop2, , styles.paddingBottom2]}>
              <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
              <Text style={styles.text}>
                Sending documentation that you can share with your employer (eg,
                a doctor's note) or your primary care physician
              </Text>
            </View>
          </View>
          <View style={[styles.paddingTop, styles.paddingBottom]}>
            <Text style={styles.heading}>Schedule a Visit Today</Text>
            <View style={styles.paddingTop}>
              <Text style={styles.textColor}>
                Weight Loss On Demand lets you skip the waiting room, and get
                the treatment you need in minutes. This cold and flu season,
                meeting with one of our doctors is the smartest way to get back
                on your feet.
              </Text>
            </View>
          </View> */}
        </View>
        {Platform.OS == 'ios' && <View style={styles.bottomIOS}></View>}

      </ScrollView>
    </SafeAreaView>
  );
}
