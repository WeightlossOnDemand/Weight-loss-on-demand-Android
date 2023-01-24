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
  StyleSheet,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../components/Header';
import images from '../../services/utilities/images';

import {colors, sizes, fontSize, fontFamily} from '../../services';

export const Correct = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header dark={true} />
      </View>
      <View style={styles.containe2}>
        <View style={styles.containe3}>
          <Text style={styles.hedtext}>Is this correct ?</Text>
        </View>
        <View style={styles.containe2}>
          <View style={styles.containecontent}>
            <Text style={styles.context}>PATIENT NAME</Text>
            <Text style={styles.context1}>jhone</Text>
          </View>
          <View style={styles.containecontent}>
            <Text style={styles.context}>PHONE NUMBER</Text>
            <Text style={styles.context1}>(+97)-890750896</Text>
          </View>
          <View style={styles.containecontent}>
            <Text style={styles.context}>EMAIL ADDRESS</Text>
            <Text style={styles.context1}>jhone@gmail.com</Text>
          </View>
        </View>
        <View style={styles.containe2}>
          <View style={styles.bcontainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('edityourinformation')}>
              <View style={styles.button}>
                <Text style={styles.btext}>X No</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('reasonVisit')}>
              <View style={styles.button}>
                <Text style={styles.btext2}>
                  {' '}
                  <AntDesign
                    name="check"
                    style={{color: 'green'}}
                    size={25}
                  />{' '}
                  Yes
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containe2: {
    paddingLeft: sizes.screenWidth * 0.05,
    paddingRigh: sizes.screenWidth * 0.05,
    paddingTop: sizes.screenHeight * 0.02,
  },
  containe3: {
    paddingTop: sizes.screenHeight * 0.01,
    paddingLeft: sizes.screenWidth * 0.05,
  },
  hedtext: {
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextHeading,
  },
  context: {
    fontSize: fontSize.large,
    color: colors.black,
    fontFamily: fontFamily.appTextHeading,
    fontWeight: 'bold',
    lineHeight: sizes.screenHeight * 0.06,
  },
  context1: {
    fontSize: fontSize.large,
    color: colors.gray,
    fontFamily: fontFamily.appTextRegular,

  },
  containecontent: {
    paddingBottom: sizes.screenHeight * 0.03,
  },
  button: {
    width: sizes.screenWidth * 0.3,
    height: sizes.screenHeight * 0.07,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.screenWidth * 0.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  btext: {
    color: colors.secondary,
    fontSize: fontSize.h5,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextRegular,

  },
  bcontainer: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.7,
    justifyContent: 'space-between',
  },
  btext2: {
    color: 'green',
    fontSize: fontSize.h5,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextRegular,

  },
});
