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
export default function ProviderType({navigation}) {
  return (
    <SafeAreaView>
      <Header dark={true} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.addPaymentText}>Provider type</Text>
          <View style={styles.paddingTop}>
            <Text style={styles.text}>What type of visit would you like?</Text>
          </View>
        </View>
        <TouchableOpacity
        onPress={() => navigation.navigate('ChooseAppointmentLength')}
        >
          <View style={[styles.row, styles.card]}>
            <View>
              <Text style={styles.cardText}>Therapy</Text>
              <Text style={styles.text2}>
                Evidence-based & personalized counseling
              </Text>
              <View style={styles.paddingTop2}>
                <Text style={styles.providerText}>25 minutes - FREE</Text>
                <Text style={styles.providerText}>50 minutes - FREE</Text>
              </View>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.paddingTop3}>
          <TouchableOpacity
          // onPress={() => navigation.navigate('HowToSchedule')}
          >
            <View style={[styles.row, styles.card]}>
              <View>
                <Text style={styles.cardText}>Psychiatry</Text>
                <Text style={styles.text2}>
                  Medication consultation & management
                </Text>
                <View style={styles.paddingTop2}>
                  <Text style={styles.providerText}>
                    Initial Visit (45 minutes) - FREE
                  </Text>
                  <Text style={styles.providerText}>
                    Follow-up (15 minutes) - FREE
                  </Text>
                </View>
              </View>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.btnTop}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProviderHelpChoose')}>
              <Text style={styles.redText}>Help me choose</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.padding, styles.row2]}>
            <Image source={images.rx} style={styles.icon} />
            <Text style={styles.footerText}>
              Prescriptions provided as needed. However, our providers are
              unable to write prescriptions for controlled substances such as
              benzodiazepines (e.g. Xanax, Ambien) and stimulants (e.g.
              Adderall, Ritalin).
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
