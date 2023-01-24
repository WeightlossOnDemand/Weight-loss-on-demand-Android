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
export default function ChooseAppointmentLength({navigation}) {
  return (
    <SafeAreaView>
      <Header dark={true} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.addPaymentText}>
            Choose an appointment length
          </Text>
          <View style={styles.paddingTop}>
            <Text style={styles.text}>
              We recommend booking the standard appointment length so taht you
              have sufficient time with your provider.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <TouchableOpacity
              onPress={() => navigation.navigate('LetsFindTherapist')}>
              <View style={styles.lisbutton}>
                <Text style={styles.text2}>50 minutes</Text>
                <Text style={styles.text2}>(recommended)</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LetsFindTherapist')}>
              <View style={styles.lisbutton}>
                <Text style={styles.text2}>25 minutes</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
