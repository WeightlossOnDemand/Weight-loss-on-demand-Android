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
import {styles} from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';

import {colors} from '../../services';

export default function MemberEducationProgram({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Header dark={true} />
      </View>
      <ScrollView style={styles.color}>
        <View style={[styles.padding, styles.height]}>
          <ScrollView>
            <View>
              <Text style={[styles.bold, styles.textColor]}>
                Member Education Program Involvement
              </Text>
            </View>
            <Text style={styles.textColor}>
              By enrolling in the Member Education Program, you give Weight On
              Demand permission to send you information about third-party
              products and services that may be of interest to you, such as
              health education materials prepared by third parties, applications
              that can integrate with Weight on Demand applications, and other
              fitness-related products and services. You agree that the
              information you give when you sign up may be used to send you
              messages that are more relevant to your interests.
            </Text>
            <Text style={[styles.textColor, styles.paddingTop]}>
              In addition, you comprehend that:
            </Text>
            <Text style={[styles.textColor, styles.paddingTop]}>
              No information provided to us will be released to any outside
              parties. By contacting
              <Text style={styles.link}> support@weightlossondemand.com,</Text>.
              you can revoke this consent at any moment and get a copy of it.
              Nonetheless, any steps we have already taken with your
              authorization in place will remain in effect even if you revoke
              it. Once this document is signed, the authorization is valid for a
              full year. You don't have to take part in the Member Education
              Program to get services like therapy, payment, enrollment, or the
              right to benefits. Weight Loss on Demand may get paid for its
              work, depending on how the Member Education Program works. In our
              Notice of Privacy Practices, you can find out more about how we
              protect your privacy at Weight Loss on Demand.
            </Text>
          </ScrollView>
        </View>
        {/* <View style={styles.buttonTop}>
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
