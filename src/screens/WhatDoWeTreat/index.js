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
export default function WhatDoWeTreat({navigation}) {
  return (
    <SafeAreaView>
      <Header title={'What Do We Train'} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <TouchableOpacity onPress={() => navigation.navigate('Allergies')}>
            <View style={[styles.row, styles.card]}>
              <Text style={styles.cardText}>Strength training</Text>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ColdAndFlu')}>
            <View style={[styles.row, styles.card]}>
              <Text style={styles.cardText}>Weight-Bearing Workout</Text>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SoreThroat')}
          >
            <View style={[styles.row, styles.card]}>
              <Text style={styles.cardText}>Calisthenics</Text>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('UTIs')}
          >
            <View style={[styles.row, styles.card]}>
              <Text style={styles.cardText}>Weightlifting</Text>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Travel')}
          >
            <View style={[styles.row, styles.card]}>
              <Text style={styles.cardText}>Aerobic Exercise</Text>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('SportsInjuries')}
          >
            <View style={[styles.row, styles.card]}>
              <Text style={styles.cardText}>Sports Injuries</Text>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SkinIssues')}
          >
            <View style={[styles.row, styles.card]}>
              <Text style={styles.cardText}>Skin Issues / Rashes</Text>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Diarrhea')}
          >
            <View style={[styles.row, styles.card]}>
              <Text style={styles.cardText}>Diarrhea & Vomiting</Text>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('EyeConditions')}
          >
            <View style={[styles.row, styles.card]}>
              <Text style={styles.cardText}>Eye Conditions</Text>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('WhatWeDontTreat')}
          >
            <View style={[styles.row, styles.card]}>
              <Text style={styles.cardText}>What we don't treat</Text>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
