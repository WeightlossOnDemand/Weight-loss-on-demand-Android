import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {styles} from './style';
import Header from '../../components/Header';
import {sizes} from '../../services';
import ladyy from '../../assets/assets/ladyy.jpg';

export default function ChooseTherapist({navigation}) {
  return (
    <SafeAreaView>
      <Header dark={true} filter={true} />

      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.subHeading}>Choose a therapist </Text>
        </View>
        <TouchableOpacity
         onPress={() => navigation.navigate('therapisdetail')}
        >
          <View style={[styles.row, styles.card]}>
            <View>
              <View style={styles.rowinner}>
                <View style={styles.img}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: sizes.screenWidth * 0.5,
                    }}
                    source={ladyy}
                  />
                </View>
                <View>
                  <Text style={styles.heading}>Dr.KiKi Lwin,Md</Text>
                  <Text style={styles.text}>Next Available: 10:30 PM</Text>
                </View>
              </View>
              <Text style={styles.cardText}>
                Dr. Lwin was born and raised in Myanmar,formerly known as Burma
                and graduated from University of Med....
              </Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('therapisdetail')}
        >
          <View style={[styles.row, styles.card]}>
            <View>
              <View style={styles.rowinner}>
                <View style={styles.img}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: sizes.screenWidth * 0.5,
                    }}
                    source={ladyy}
                  />
                </View>
                <View>
                  <Text style={styles.heading}>Dr.KiKi Lwin,Md</Text>
                  <Text style={styles.text}>Next Available: 10:30 PM</Text>
                </View>
              </View>
              <Text style={styles.cardText}>
                Dr. Lwin was born and raised in Myanmar,formerly known as Burma
                and graduated from University of Med....
              </Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={() => navigation.navigate('therapisdetail')}
        >
          <View style={[styles.row, styles.card]}>
            <View>
              <View style={styles.rowinner}>
                <View style={styles.img}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: sizes.screenWidth * 0.5,
                    }}
                    source={ladyy}
                  />
                </View>
                <View>
                  <Text style={styles.heading}>Dr.KiKi Lwin,Md</Text>
                  <Text style={styles.text}>Next Available: 10:30 PM</Text>
                </View>
              </View>
              <Text style={styles.cardText}>
                Dr. Lwin was born and raised in Myanmar,formerly known as Burma
                and graduated from University of Med....
              </Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('therapisdetail')}
        >
          <View style={[styles.row, styles.card]}>
            <View>
              <View style={styles.rowinner}>
                <View style={styles.img}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: sizes.screenWidth * 0.5,
                    }}
                    source={ladyy}
                  />
                </View>
                <View>
                  <Text style={styles.heading}>Dr.KiKi Lwin,Md</Text>
                  <Text style={styles.text}>Next Available: 10:30 PM</Text>
                </View>
              </View>
              <Text style={styles.cardText}>
                Dr. Lwin was born and raised in Myanmar,formerly known as Burma
                and graduated from University of Med....
              </Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        //   onPress={() => navigation.navigate('physiciansscreen')}
        >
          <View style={[styles.row, styles.card]}>
            <View>
              <View style={styles.rowinner}>
                <View style={styles.img}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: sizes.screenWidth * 0.5,
                    }}
                    source={ladyy}
                  />
                </View>
                <View>
                  <Text style={styles.heading}>Dr.KiKi Lwin,Md</Text>
                  <Text style={styles.text}>Next Available: 10:30 PM</Text>
                </View>
              </View>
              <Text style={styles.cardText}>
                Dr. Lwin was born and raised in Myanmar,formerly known as Burma
                and graduated from University of Med....
              </Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        //   onPress={() => navigation.navigate('physiciansscreen')}
        >
          <View style={[styles.row, styles.card]}>
            <View>
              <View style={styles.rowinner}>
                <View style={styles.img}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: sizes.screenWidth * 0.5,
                    }}
                    source={ladyy}
                  />
                </View>
                <View>
                  <Text style={styles.heading}>Dr.KiKi Lwin,Md</Text>
                  <Text style={styles.text}>Next Available: 10:30 PM</Text>
                </View>
              </View>
              <Text style={styles.cardText}>
                Dr. Lwin was born and raised in Myanmar,formerly known as Burma
                and graduated from University of Med....
              </Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        //   onPress={() => navigation.navigate('physiciansscreen')}
        >
          <View style={[styles.row, styles.card]}>
            <View>
              <View style={styles.rowinner}>
                <View style={styles.img}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: sizes.screenWidth * 0.5,
                    }}
                    source={ladyy}
                  />
                </View>
                <View>
                  <Text style={styles.heading}>Dr.KiKi Lwin,Md</Text>
                  <Text style={styles.text}>Next Available: 10:30 PM</Text>
                </View>
              </View>
              <Text style={styles.cardText}>
                Dr. Lwin was born and raised in Myanmar,formerly known as Burma
                and graduated from University of Med....
              </Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        //   onPress={() => navigation.navigate('physiciansscreen')}
        >
          <View style={[styles.row, styles.card]}>
            <View>
              <View style={styles.rowinner}>
                <View style={styles.img}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: sizes.screenWidth * 0.5,
                    }}
                    source={ladyy}
                  />
                </View>
                <View>
                  <Text style={styles.heading}>Dr.KiKi Lwin,Md</Text>
                  <Text style={styles.text}>Next Available: 10:30 PM</Text>
                </View>
              </View>
              <Text style={styles.cardText}>
                Dr. Lwin was born and raised in Myanmar,formerly known as Burma
                and graduated from University of Med....
              </Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        //   onPress={() => navigation.navigate('physiciansscreen')}
        >
          <View style={[styles.row, styles.card,styles.paddingBottom]}>
            <View>
              <View style={styles.rowinner}>
                <View style={styles.img}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: sizes.screenWidth * 0.5,
                    }}
                    source={ladyy}
                  />
                </View>
                <View>
                  <Text style={styles.heading}>Dr.KiKi Lwin,Md</Text>
                  <Text style={styles.text}>Next Available: 10:30 PM</Text>
                </View>
              </View>
              <Text style={styles.cardText}>
                Dr. Lwin was born and raised in Myanmar,formerly known as Burma
                and graduated from University of Med....
              </Text>
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
