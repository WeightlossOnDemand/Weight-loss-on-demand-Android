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
import {colors} from '../../services';

export default function TermsAndConditions({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header dark={true} />
        </View>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Text style={styles.addPaymentText}>Terms & Conditions</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('TermsOfService')}>
          <View style={[styles.row, styles.card]}>
            <Text style={styles.cardText}>Terms of Service</Text>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('MemberAgreement')}>
          <View style={[styles.row, styles.card]}>
            <Text style={styles.cardText}>Member Services Agreement</Text>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>
          <View style={[styles.row, styles.card]}>
            <Text style={styles.cardText}>Privacy Policy</Text>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('NoticeOfPrivacy')}>
          <View style={[styles.row, styles.card]}>
            <Text style={styles.cardText}>Notice of Privacy Practices</Text>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('MemberEducationProgram')}>
          <View style={[styles.row, styles.card]}>
            <Text style={styles.cardText}>
              Member Education Program Agreement
            </Text>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('HealthInfoAgreement')}>
          <View style={[styles.row, styles.card]}>
            <Text style={styles.cardText}>
              Use of Health Information Agreement
            </Text>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
