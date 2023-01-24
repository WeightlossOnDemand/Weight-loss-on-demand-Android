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
import {styles} from './style';

export default function VisitHistory() {
  return (
    <SafeAreaView>
      <View>
        <Header title={'Visits'} />
      </View>
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.head}>MY PAST VISITS</Text>
        </View>
        <TouchableOpacity
        // onPress={()=>navigation.navigate("EditName")}
        >
          <View style={[styles.row, styles.card]}>
            <View style={styles.width}>
              <Text style={styles.head2}>Kimberly Townsend-Scott, MD</Text>
              <Text style={styles.text}>Mon, Sep 12</Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
