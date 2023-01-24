import React, {useState} from 'react';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors, fontFamily, fontSize, sizes} from '../../services';
import Octicons from 'react-native-vector-icons/Octicons';
import mdoctr from '../../assets/mdoctr.png';
import fedoctr from '../../assets/fedoctr.png';
import pick from '../../assets/pick.png';
import explore from '../../assets/explore.png';
const Wellcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.containertext}>
            <Text style={styles.name}>Hi Jhone</Text>
            <Text style={styles.nexttext}>what's next</Text>
          </View>
          <View style={styles.bcontainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('reasonVisit')}>
              <View style={[styles.row, styles.card]}>
                <View style={styles.imagewelllcome}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={mdoctr}
                  />
                </View>

                <View style={{paddingLeft: sizes.screenWidth * 0.07}}>
                  <Text style={[styles.cardText, styles.wit]}>
                    See first available medical provider
                  </Text>
                  <Text style={[styles.faqText, styles.wi]}>
                    Current wait time: 3 min
                  </Text>
                </View>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('visitforscreen')}>
              <View style={[styles.row, styles.card]}>
                <View style={styles.imagewelllcome}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={fedoctr}
                  />
                </View>
                <View style={{paddingRight: sizes.screenWidth * 0.02}}>
                  <Text style={styles.cardText}>
                    Book a mental health sessions
                  </Text>
                  <Text style={styles.faqText}>Psychiatry & Therapy</Text>
                </View>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
            {/* <TouchableOpacity
              onPress={() => navigation.navigate('searchforpharmacyscreen')}>
              <View style={[styles.row, styles.card]}>
                <View style={styles.imagewelllcome}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={pick}
                  />
                </View>
                <View>
                  <Text style={[styles.cardText, styles.wi]}>
                    Pick your pharmacy
                  </Text>
                  <Text style={[styles.faqText, styles.wi]}>
                    Nearby prescription pickup
                  </Text>
                </View>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={() => navigation.navigate('BottomNavs')}>
              <View style={[styles.row, styles.card]}>
                <View style={styles.imagewelllcome}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={explore}
                  />
                </View>
                <View>
                  <Text style={styles.cardText}>Explore the app</Text>
                  <Text style={styles.faqText}>
                    Learn more about our services
                  </Text>
                </View>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wellcome;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight: '800',
    fontFamily: fontFamily.appTextMedium,
  },
  nexttext: {
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight: '800',
    fontFamily: fontFamily.appTextMedium,

  },
  containertext: {
    paddingTop: sizes.screenHeight * 0.07,
    paddingLeft: sizes.screenWidth * 0.03,
  },
  color: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
  },
  paddingLeft: {
    paddingLeft: sizes.baseMargin,
  },
  paddingBottom: {
    paddingBottom: sizes.baseMargin,
  },
  addPaymentText: {
    fontSize: fontSize.h4,
    fontWeight: 'bold',
    color: colors.primary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  symbol: {
    color: colors.secondary,
    fontSize: fontSize.h4,
    bottom: 1,
  },

  cardText: {
    color: colors.primary,
    fontSize: fontSize.h6,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextRegular,

  },
  faqText: {
    color: colors.secondary,
    fontSize: fontSize.h6,
    fontFamily:fontFamily.appTextRegular
  },
  card: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.03,
    marginBottom: sizes.TinyMargin,
    width: sizes.screenWidth,
    borderRadius: sizes.screenWidth * 0.02,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bcontainer: {
    paddingTop: sizes.screenHeight * 0.05,
  },
  imagewelllcome: {
    width: sizes.screenWidth * 0.16,
    height: sizes.screenHeight * 0.08,
  },
  wit: {
    right: sizes.screenWidth * 0.05,
    // paddingRight:sizes.screenWidth*0.01
    width: sizes.screenWidth * 0.6,
  },
  wi: {
    right: sizes.screenWidth * 0.05,
  },
});
