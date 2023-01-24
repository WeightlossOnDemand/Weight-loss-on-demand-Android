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
  TextInput,
  Platform,
} from 'react-native';
import Header from '../../components/Header';
import {styles} from './style';
import {colors} from '../../services';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function FAQs() {
  const [faqs, setFAQs] = useState('');
  return (
    <SafeAreaView>
      <View>
        <Header title={'FAQs'} />
      </View>
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.heading}>How long will the session last?</Text>
          <Text style={styles.text}>
            Each session will last 15 minutes.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>
            What is the cost for each session?
          </Text>
          <Text style={styles.text}>
            Each session will cost $25 which will be paid before the session starts.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>
            Is our mobile app effective for weight loss?
          </Text>
          <Text style={styles.text}>
            Yes, with all the recommendations of our experienced consultant, you will be able to achieve your desired goal or target in the specified period.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>
            Is your privacy secure with our app?
          </Text>
          <Text style={styles.text}>
            Yes, we do respect everyones privacy and no data is shared with anyone or any platform. Your data that you filled is always secured and hidden from other.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>
            What are the phases?
          </Text>
          <Text style={styles.text}>
            • Introduction
          </Text>
          <Text style={styles.text}>
            • Weight Loss
          </Text>
          <Text style={styles.text}>
            •	Pre-maintenance
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>
            Why use our app?
          </Text>
          <Text style={styles.text}>
          Our interactive interface, ease of accessibility and with the consultation of our consultant it will be easier for you to achieve your targets or goal.
          </Text>
        </View>
        {Platform.OS == 'ios' ? (
          <View style={styles.bottomIOS}></View>
        ) : (
          <View style={styles.bottomIOS}></View>
        )}
        {Platform.OS == 'ios' && <View style={styles.bottomIOS}></View>}

      </ScrollView>
    </SafeAreaView>
  );
}
