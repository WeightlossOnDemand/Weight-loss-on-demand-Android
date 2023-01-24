import React, {useEffect, useRef, useState} from 'react';
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
import {colors, sizes} from '../../services';
import {appointmentStatus} from '../../services/utilities/api/auth';

export default function ThankyouVisit({navigation, route}) {
  const handleRecentAppointment = async () => {
    console.log(route?.params?.apt_id);
    if (route?.params?.apt_id) {
      try {
        let response = await appointmentStatus(route?.params?.apt_id);
        // console.log(response.data);
        if (response.data.message == 'Status has been updated') {
          navigation.navigate('Home');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      navigation.navigate('Home');
    }
  };
  const handleRecentSession = async () => {
    console.log(route?.params?.apt_id);
    if (route?.params?.apt_id) {
      try {
        let response = await appointmentStatus(route?.params?.apt_id);
        // console.log(response.data);
        if (response.data.message == 'Status has been updated') {
          navigation.navigate('HealthVisits');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      navigation.navigate('HealthVisits');
    }
    // navigation.navigate('HealthVisits')
  };
  return (
    <SafeAreaView>
      <View style={styles.color}>
        <View style={styles.padding}>
          <View style={styles.skipBtn}>
            <TouchableOpacity onPress={handleRecentAppointment}>
              <Text style={styles.skipText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.providerTitle}>Thank you for your session!</Text>
        <View style={styles.padding}>
          <Text style={styles.text}>
            You can find notes from your consultant and more under profile
          </Text>
          <View style={[styles.headerView, styles.row2]}>
            <Text style={styles.health}>Profile {' > '}</Text>
            <View style={styles.top}>
              <TouchableOpacity onPress={handleRecentSession}>
                <Text style={styles.visitHistory}> Recent Sessions</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={styles.borderView}></View> */}
          {/* <View style={styles.inviteView}>
            <Text style={styles.inviteText}>
              INVITE YOUR FRIENDS AND FAMILY
            </Text>
          </View> */}
          {/* <View style={styles.borderView}></View> */}
          {/* <View> */}
          {/* <View style={[styles.row]}>
              <Image source={images.msg} style={styles.icon} />
              <Text style={[styles.list, styles.textList]}>Text</Text>
            </View> */}
          {/* <View style={[styles.row]}>
              <Image source={images.ema} style={styles.icon2} />
              <Text style={styles.list}>Email</Text>
            </View> */}
          {/* <View style={[styles.row]}>
              <Image source={images.fac} style={styles.icon2} />
              <Text style={styles.list}>Facebook</Text>
            </View> */}
          {/* <View style={[styles.borderView, styles.bottom]}></View> */}
          {/* </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
}
