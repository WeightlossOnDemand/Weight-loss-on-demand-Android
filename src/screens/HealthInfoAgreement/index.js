import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import {styles} from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';

import {colors} from '../../services';

export default function HealthInfoAgreement({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Header dark={true} />
      </View>
      <ScrollView style={styles.color}>
        <View style={[styles.paddingLeft, styles.paddingRight]}>
          <Text style={[styles.bold, styles.textColor]}>
            With WeightLoss on Demand, your trainer will always have access to
            your training history.
          </Text>
        </View>

        <View style={[styles.padding, styles.height]}>
          <ScrollView>
            <Text style={[styles.textColor, styles.paddingTop, styles.heading]}>
              Application of Physical Fitness Data
            </Text>
            <Text style={styles.textColor}>
              You can be sure that no one will be able to see your private
              fitness records without your permission or unless the law says
              they have to. You agree that Weight Loss
              On Demand and the fitness professionals you talk to through the
              site can share information about your genetic testing, substance
              abuse, mental health, communicable or infectious diseases, and
              other health conditions with other health professionals for your
              treatment.
            </Text>

            <Text style={[styles.textColor, styles.paddingTop]}>
              You can send an email to
              <Text style={styles.bold}> support@weightlossondemand.com </Text>
              To request a copy of this consent form or to withdraw your consent
              at any time. A year from the date of signature, this agreement
              will remain in full force and effect
            </Text>
          </ScrollView>
        </View>
        {/* <View style={Platform.OS !== 'ios' ?  styles.buttonTop: styles.buttonTopIOS}>
          <TouchableOpacity
            onPress={() => navigation.navigate('TermsAndConditions')}>
            <View style={[styles.buttonView]}>
              <Text style={styles.buttonText}> I Accept</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('TermsAndConditions')}>
            <View style={[styles.diasbledView]}>
              <Text style={styles.buttonText}> I Decline</Text>
            </View>
          </TouchableOpacity>
        </View> */}

      </ScrollView>
    </SafeAreaView>
  );
}
