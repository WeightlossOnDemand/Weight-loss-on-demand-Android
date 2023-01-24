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
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {CustomTextFiel} from '../../component/textFiled';
import {colors, sizes, fontSize} from '../../services';

export const Drugallergies = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header dark={true} />
        <View style={styles.mainandi}>
          <View>
            <View style={styles.andication}>
                <View style={styles.andicationiner}></View>
            </View>
          </View>
          <View>
            <Text>1/5</Text>
          </View>
        </View>
      </View>
      <View style={styles.container1}>
        <View>
          <Text style={styles.hedtext}>
            Do you have any drug allergies
          </Text>
        </View>
        <View style={styles.hedtextcon}>
          <Text style={styles.hedtext1}>
           Example
          </Text>
          <Text style={styles.hedtext2}>Amoxicillin</Text>
          <Text style={styles.hedtext2}>Bactrim</Text>
          <Text style={styles.hedtext2}>Aspiorin</Text>
        </View>
        <View style={styles.buttnView}>
          <TouchableOpacity>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Yes</Text>
            </View>
          </TouchableOpacity>
        </View>
        
          <TouchableOpacity>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>No</Text>
            </View>
          </TouchableOpacity>
     
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container1: {
    padding: sizes.screenWidth * 0.05,
  },
  hedtext: {
    fontSize: fontSize.h3,
    color: colors.black,
    fontWeight: 'bold',
  },
  hedtext1: {
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: 'bold',
  },
  hedtext2:{
    fontSize: fontSize.medium,
    color: colors.black,
    fontWeight: 'bold',
  },
  hedtext2: {
    top: sizes.screenHeight * 0.02,
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: 'bold',
  },
  hedtextcon: {
    marginTop: sizes.screenHeight * 0.05,
  },
  buttnView: {
    // marginRight:sizes.screenWidth*0.06,
    marginTop: sizes.screenHeight * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
  },
  buttonView: {
    marginTop:sizes.screenHeight*0.02,
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.92,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.screenWidth * 0.2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  andication: {
    width: sizes.screenWidth * 0.3,
    height: sizes.screenHeight * 0.02,
    borderRadius: sizes.screenWidth * 0.2,
    backgroundColor: colors.lightGray,
  },
  andicationiner:{
    width: sizes.screenWidth * 0.05,
    height: sizes.screenHeight * 0.02,
    borderRadius: sizes.screenWidth * 0.2,
    backgroundColor: colors.secondary,
  },

  mainandi: {
    position: 'relative',
    bottom: sizes.screenHeight * 0.05,
    left: sizes.screenWidth * 0.33,
    width: sizes.screenWidth * 0.6,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
