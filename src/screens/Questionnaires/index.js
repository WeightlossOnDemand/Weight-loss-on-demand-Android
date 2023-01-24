import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import {styles} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../services';
import images from '../../services/utilities/images';

export default function Questionnaires() {
  return (
    <SafeAreaView>
      <View>
        <Header title={'Questionnaires'} />
      </View>
      <ScrollView style={styles.color}>
        <View style={styles.contentView}>
          <Image source={images.questionnaries} style={styles.icon} />
          <Text style={[styles.text, styles.paddingTop2]}>
            No new questionnaires
          </Text>
          <Text style={[styles.text2, styles.paddingTop]}>
            Questionnaires requested by your provider will appear here.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
