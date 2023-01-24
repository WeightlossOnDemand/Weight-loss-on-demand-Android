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
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../services';

export default function Employer({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header dark={true} />
        </View>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Text style={styles.addPaymentText}>Employer</Text>
        </View>
        <View style={styles.contentView}>
          <Ionicons
            name="briefcase-sharp"
            color={colors.disabledBg}
            size={80}
          />
          <Text style={styles.text}>
            Many employers help to cover the cost of Weight Loss On Demand Video
            Visits
          </Text>
        </View>
        <View style={styles.paddingTop}>
          <TouchableOpacity onPress={()=>navigation.navigate("AddEmployer")}>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}> Add employer</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
