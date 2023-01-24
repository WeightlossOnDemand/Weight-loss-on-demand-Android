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
import Entypo from 'react-native-vector-icons/Entypo';

export default function GoogleFit({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header dark={true} />
        </View>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Text style={styles.addPaymentText}>
            Do you want to sync with Google Fit?
          </Text>
        </View>
        <View style={styles.top}>
          <Image source={images.googleFit} style={styles.googleFit} />
        </View>
        <View style={styles.padding}>
          <Text style={styles.text}>
            Syncing makes it easier to share important health data with your
            doctor and help inform your care plan:
          </Text>
          <View style={styles.top}>
            <Text style={styles.text}>We'll sync your:</Text>
          </View>
          <View style={styles.top2}>
            <View style={styles.row}>
              <Entypo name="dot-single" color={colors.primary} size={25} />
              <Text style={[styles.text, styles.right]}>Blood Pressure</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.text, styles.right]}>Height</Text>
          </View>
          <View style={styles.row}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.text, styles.right]}>Weight</Text>
          </View>
        </View>
        <View style={styles.btnTop}>
        <TouchableOpacity>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Connect to Google Fit</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.learnMoreBtn}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Text style={styles.learnMoreText}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
