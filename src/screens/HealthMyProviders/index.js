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

export default function HealthMyProviders({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Header dark={true} />
      </View>
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.addPaymentText}>My Providers</Text>
          <View style={styles.paddingTop}>
            <Text style={styles.head}>FAVORITE PROVIDER</Text>
            <View style={styles.paddingTop}>
              <Text style={styles.text}>
                None favorited. When you give your provider a positive rating,
                we'll automatically add them to this list. Return here to see if
                any of your favorite provider are currently online, or to
                schedule a visit with them directly.
              </Text>
            </View>
            <View style={[styles.paddingTop, styles.row]}>
              <Text style={styles.head}>EXTERNAL PHYSICIAN</Text>
              <TouchableOpacity onPress={()=>navigation.navigate("sharevist")}>
                <View>
                  <Text style={styles.addBtn}>Add</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.paddingTop}>
              <Text style={styles.text}>None added</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
