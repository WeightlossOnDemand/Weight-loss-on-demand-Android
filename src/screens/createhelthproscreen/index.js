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


export const Healthpro = () => {
  return (
    <SafeAreaView style={styles.container}>
       <View>
        <Header dark={true}/>
       </View>
       <View style={styles.container1}>
        <View>
            <Text style={styles.hedtext}>Lets create your health profile</Text>
        </View>
        <View style={styles.hedtextcon}>
            <Text style={styles.hedtext1}>
                The next 5 questions will ask about your medications allergies,medical history, surgical history and family history
            </Text>
            <Text style={styles.hedtext2}>
                The next 5 questions will ask about your medications allergies,medical history, surgical history and family history
            </Text>
        </View>
        <View style={styles.buttnView}>
          <TouchableOpacity>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
        

       </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    container1:{
        padding:sizes.screenWidth*0.05
    },
    hedtext: {
        fontSize: fontSize.h3,
        color: colors.black,
        fontWeight: 'bold',
      },
      hedtext1:{
        fontSize: fontSize.large,
        color: colors.black,
        fontWeight: 'bold',
      },
      hedtext2:{
        top:sizes.screenHeight*0.02,
        fontSize: fontSize.large,
        color: colors.black,
        fontWeight: 'bold',
      },
      hedtextcon:{
     marginTop:sizes.screenHeight*0.1
      },
      buttnView: {
        // marginRight:sizes.screenWidth*0.06,
        marginTop:sizes.screenHeight*0.04,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        color: colors.white,
        fontSize: fontSize.h6,
      },
      buttonView: {
        backgroundColor: colors.secondary,
        height: sizes.screenHeight * 0.06,
        width: sizes.screenWidth * 0.92,
        alignItems: 'center',
        justifyContent: 'center',
      },
})
