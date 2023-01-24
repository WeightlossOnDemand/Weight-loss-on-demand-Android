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
import Octicons from 'react-native-vector-icons/Octicons';
export default function MyPricing({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header dark={true} />
        </View>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Text style={styles.addPaymentText}>My Pricing</Text>
        </View>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Text style={styles.text}>
            Here's the pricing for your next visit, as of today.
          </Text>
        </View>
        <View>
          <View style={[styles.row, styles.card]}>
            <View>
              <Text style={styles.cardText}>{'   '}Strength Training</Text>
              <View style={styles.row}>
                <Text style={styles.minsText}>{'   '}15 mins</Text>
                <Text style={styles.priceText}>{'   '}75.00</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={[styles.row, styles.card]}>
            <View>
              <Text style={styles.cardText}>{'   '}Yoga</Text>
              <View style={styles.row}>
                <View>
                  <Text style={styles.minsText}>{'   '}25 mins</Text>
                  <Text style={styles.minsText}>{'   '}50 mins</Text>
                </View>
                <View>
                  <Text style={styles.priceText}>{'   '}129.00</Text>
                  <Text style={styles.priceText}>{'   '}179.00</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={[styles.row, styles.card]}>
            <View>
              <Text style={styles.cardText}>{'   '}Pilates</Text>
              <View style={styles.row}>
                <View>
                  <Text style={styles.minsText}>{'   '}25 mins</Text>
                  <Text style={styles.minsText}>{'   '}50 mins</Text>
                </View>
                <View>
                  <Text style={styles.priceText}>{'   '}129.00</Text>
                  <Text style={styles.priceText}>{'   '}179.00</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={[styles.row, styles.card]}>
            <View>
              <Text style={styles.cardText}>{'   '}Aerobics and dance</Text>
              <View style={styles.row}>
                <View>
                  <Text style={styles.minsText}>
                    {'   '}45 mins - Initial Visit
                  </Text>
                  <Text style={styles.minsText}>
                    {'   '}15 mins - Follow Up
                  </Text>
                </View>
                <View>
                  <Text style={styles.priceText}>{'   '}299.00</Text>
                  <Text style={styles.priceText}>{'   '}129.00</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.top}>
          <TouchableOpacity onPress={()=>navigation.navigate("GetCare")}>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}> Get Train</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("ContactSupport")}>
            <View style={styles.learnMoreBtn}>
              <Text style={styles.learnMoreText}>Contact support</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
