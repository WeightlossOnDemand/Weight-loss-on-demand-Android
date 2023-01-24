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


export const YourHabits = () => {
  return (
    <SafeAreaView style={styles.container}>
       <View>
        <Header dark={true}/>
       </View>
      <ScrollView>
      
       <View style={styles.container1}>
        <View>
            <Text style={styles.hedtext}>Tell us about your habits</Text>
        </View>
        <View style={styles.hedtextcon}>
            <Text style={styles.hedtext1}>
                please provide the following information to help your provider get a better understanding of Your lifestyle
            </Text>
           
        </View>

        <View style={styles.pa}>
          <View style={styles.box}>
            <View style={styles.borderrb}>
            <Text style={styles.textttt}>Do you use any tobacco products ? </Text>
            </View>
           <Text style={styles.etext}>e.g Cigarettes,e-Cigarettes,Vaping</Text> 
            <TouchableOpacity>
          <View style={styles.buttonViewbox}>
            <Text style={styles.buttonTextt}>Yes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonViewbox}>
            <Text style={styles.buttonTextt}>No</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonViewbox}>
            <Text style={styles.buttonTextt}>In the past</Text>
          </View>
        </TouchableOpacity>
            
            
          </View>
       
        </View>
        <View style={styles.pa}>
          <View style={styles.box}>
            <View style={styles.borderrb}>
            <Text style={styles.textttt}>Do you drink alcohol </Text>
            </View>
            <TouchableOpacity>
          <View style={styles.buttonViewbox}>
            <Text style={styles.buttonTextt}>Yes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonViewbox}>
            <Text style={styles.buttonTextt}>No</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonViewbox}>
            <Text style={styles.buttonTextt}>In the past</Text>
          </View>
        </TouchableOpacity>
            
            
          </View>
       
        </View>
        <View style={styles.pa}>
          <View style={styles.box}>
            <View style={styles.borderrb}>
            <Text style={styles.textttt}>Do you use marijuana ? </Text>
            </View>
            <TouchableOpacity>
          <View style={styles.buttonViewbox}>
            <Text style={styles.buttonTextt}>Yes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonViewbox}>
            <Text style={styles.buttonTextt}>No</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonViewbox}>
            <Text style={styles.buttonTextt}>In the past</Text>
          </View>
        </TouchableOpacity>
            
            
          </View>
       
        </View>
        <View style={styles.pa}>
          <View style={styles.box}>
            <View style={styles.borderrb}>
            <Text style={styles.textttt}>Do you use any recreational drugs ? </Text>
            </View>
           <Text style={styles.etext}>e.g Cocain,ecstasy,LSD</Text> 
            <TouchableOpacity>
          <View style={styles.buttonViewbox}>
            <Text style={styles.buttonTextt}>Yes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonViewbox}>
            <Text style={styles.buttonTextt}>No</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonViewbox}>
            <Text style={styles.buttonTextt}>In the past</Text>
          </View>
        </TouchableOpacity>
            
            
          </View>
       
        </View>

        <View style={styles.buttnView}>
          <TouchableOpacity>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Continue</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
              <Text style={styles.addanother}>skip</Text>
            </TouchableOpacity>
        

       </View>
       </ScrollView>
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
     marginTop:sizes.screenHeight*0.01
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
      pa:{
        paddingTop:sizes.screenHeight*0.01
      },
      box: {
        paddingBottom:sizes.screenHeight*0.06,
        marginTop:sizes.screenHeight*0.03,
        marginBottom:sizes.screenHeight*0.00,
        borderRadius:sizes.screenWidth*0.02,
        // height:sizes.screenHeight * 0.24,
        width: sizes.screenWidth * 0.90,
        borderWidth: 1,
        borderColor:colors.lightGray,
        padding: sizes.screenWidth * 0.04,
        shadowColor: '#000',
        backgroundColor:colors.white,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
      },
      textttt: {
        paddingTop:sizes.screenHeight*0.02,
       paddingBottom:sizes.screenHeight*0.02,
        fontSize:fontSize.h4,
        color:colors.black,
        fontWeight:'bold'
      },
      buttonViewbox: {
        marginTop: sizes.screenHeight * 0.02,
        backgroundColor: colors.white,
        height: sizes.screenHeight * 0.07,
        // width: sizes.screenWidth * 0.92,
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
    
        elevation: 3,
      },
      addanother: {
        paddingTop:sizes.screenHeight*0.04,
        fontSize: fontSize.large,
        color: colors.secondary,
        fontWeight: 'bold',
     alignSelf:'center'  
    },
    buttonTextt: {
      color: colors.secondary,
      fontSize: fontSize.h6,
      fontWeight: 'bold',
    },
    etext:{
      fontSize:fontSize.large,
      color: colors.black,
      fontWeight: '400',
    }
})
