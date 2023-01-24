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
import {colors, sizes, fontSize,fontFamily} from '../../services';
import { TextInput } from 'react-native-paper';


export const AddTEmp = () => {
    const [temper, settemper] = useState()
    const [showState, setShowState] = useState(false);
    const [country, setCountry] = useState('');





  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Header dark={true} />
    </View>

    <View style={styles.headcontainer}>
      <Text style={styles.hedtext}>Add your temperature</Text>
    </View>
    <View style={styles.headcontainer}>
      <Text style={styles.hedtext1}>if you have a thermometer,adding your temperature now will save time during Your Visit. No guessing pieast</Text>
    </View>
    <View style={styles.filedContainer}>
    <View style={styles.filedcon}>
            <CustomTextFiel label={'Temperature'} value={temper} setValue={settemper} />
          </View>
          <View style={[styles.padding]}>
          <TextInput
            mode="contain"
            label={'Country'}
            onPressIn={() => setShowState(!showState)}
            activeUnderlineColor={colors.secondary}
            style={styles.field}
            value={country}
            right={
              <TextInput.Icon
                onPress={() => setShowState(!showState)}
                name="chevron-down"
                color={colors.secondary}
                style={styles.icon}
              />
            }
          />
          {showState && (
            <View style={styles.cardView}>
              <TouchableOpacity
                onPress={() => {
                  setCountry('United States');
                  setShowState(false);
                }}>
                <Text style={styles.listText}>Mouth</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setCountry('United States');
                  setShowState(false);
                }}>
                <Text style={styles.listText}>Forehead</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setCountry('United States');
                  setShowState(false);
                }}>
                <Text style={styles.listText}>Armpit</Text>
              </TouchableOpacity>



              <TouchableOpacity
                onPress={() => {
                  setCountry('Canada');
                  setShowState(false);
                }}>
                <Text style={styles.listText}>Ear</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setCountry('Canada');
                  setShowState(false);
                }}>
                <Text style={styles.listText}>Rectum</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.buttnView}>
          <TouchableOpacity>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
              <Text style={styles.addanother}>skip</Text>
            </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    headcontainer: {
      paddingLeft: sizes.screenWidth * 0.05,
    },
    field: {
        backgroundColor: colors.white,
        fontSize: fontSize.extraLarge,
        fontFamily: fontFamily.appTextRegular,
      },
    hedtext: {
        fontSize: fontSize.h4,
        color: colors.black,
        fontWeight: 'bold',
        fontFamily: fontFamily.appTextHeading,
      },
      hedtext1:{
        top:sizes.screenHeight*0.02,
        fontSize: fontSize.h6,
        color: colors.black,
        fontWeight: 'bold',
        fontFamily: fontFamily.appTextHeading,
      },
      filedContainer: {
        paddingLeft:sizes.screenWidth*0.05,
        paddingRight:sizes.screenWidth*0.05,
        paddingTop: sizes.screenHeight * 0.05,
      },
      filedcon: {
        marginBottom: sizes.screenHeight * 0.02,
      },
      cardView: {
        padding:sizes.screenWidth*0.02,
        position: 'absolute',
        zIndex: 9,
        height: sizes.screenHeight * 0.27,
        width: sizes.screenWidth * 0.7,
        backgroundColor: colors.white,
        top: sizes.screenHeight * 0.04,
        marginRight: sizes.screenWidth * 0.02,
        marginLeft: sizes.screenWidth * 0.0,
        borderRadius: sizes.TinyMargin,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.3,
    
        elevation: 13,
      },
    
      listText: {
        paddingTop:sizes.screenHeight * 0.0,
        padding: sizes.TinyMargin,
        paddingBottom: sizes.screenHeight * 0.02,
        fontSize: fontSize.h6,
        color: colors.primary,
        fontFamily:fontFamily.appTextRegular
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
      addanother: {
        paddingTop:sizes.screenHeight*0.04,
        fontSize: fontSize.large,
        color: colors.secondary,
        fontWeight: 'bold',
     alignSelf:'center'  
    },
    })