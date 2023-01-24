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

export default function Documents() {
  return (
    <SafeAreaView>
      <View>
        <Header title={'Documents'} />
      </View>
      <ScrollView style={styles.color}>
        <View style={styles.contentView}>
          <Ionicons name="document" color={colors.disabledIcon} size={90} />
          <Text style={[styles.text, styles.paddingTop]}>No Documents</Text>
          <Text style={[styles.text2, styles.paddingTop]}>
            Documents sent securely by your provider or support will appear
            here.
          </Text>
          <View style={styles.paddingTop2}>
            <TouchableOpacity
            // onPress={() => navigation.navigate('GetCare')}
            >
              <View style={styles.buttonView}>
                <Text style={styles.buttonText}>Upload Document</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
