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
import images from '../../services/utilities/images';
import {styles} from './style';
export default function Pharmacies({navigation}) {
  return (
    <SafeAreaView>
      <Header dark={true} title={'My Pharmacies'} />
      <ScrollView style={styles.color}>
        <View style={styles.contentView}>
          <Text style={styles.text}>No pharmacy found</Text>
        </View>
        <View style={styles.paddingTop}>
          <TouchableOpacity
            onPress={() => navigation.navigate('searchforpharmacyscreen')}>
            <View>
              <Text style={styles.btnText}>Add Pharmacy</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
