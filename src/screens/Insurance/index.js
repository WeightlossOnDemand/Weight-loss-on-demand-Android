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
export default function Insurance({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header dark={true} />
        </View>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Text style={styles.addPaymentText}>Insurance</Text>
        </View>
        <TouchableOpacity
        onPress={() => navigation.navigate('insurancescreen',{screenName:'Insurance'})}
        >
          <View style={[styles.row, styles.card]}>
            <View style={styles.width}>
              <Text style={styles.head}>Tester Jazzy</Text>
              <Text style={styles.text}>Add Insurance</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
