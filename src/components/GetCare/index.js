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
import {styles} from './style';
import { useNavigation } from '@react-navigation/native';

export default function GetCare() {
  const navigation = useNavigation();

  return (
      <TouchableOpacity onPress={()=>navigation.navigate("GetCare")}>
        <View style={styles.buttonView}>
          <Text style={styles.buttonText}>Get Consultancy</Text>
        </View>
      </TouchableOpacity>
  );
}
