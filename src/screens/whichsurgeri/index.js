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

export const Whichsurgeries = () => {
    const [surger, setsurger] = useState();
  
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header dark={true} />
       
      </View>
      <View style={styles.container1}>
        <View>
          <Text style={styles.hedtext}>
           Add surgeries ?
          </Text>
          
        </View>
       
       
       <View style={{paddingTop:sizes.screenHeight*0.05}}>
      
       <View style={styles.filedcon}>
            <CustomTextFiel label={'Surgery'} value={surger} setValue={setsurger} />
          </View>
      
        
       </View>

       <View>
        <Text style={styles.addanother}>
            Add other conditions
        </Text>
       </View>
        
          <TouchableOpacity>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Save</Text>
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
    fontWeight:'bold'
  },
  buttonView: {
    marginTop:sizes.screenHeight*0.02,
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.92,
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: sizes.screenWidth * 0.2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inonecon: {
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    width:sizes.screenWidth*0.94
  },
  twoitem: {
    right:sizes.screenWidth*0.03,
    marginBottom: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.9,
  },
  lstyle: {
    fontSize: fontSize.h6,
    color: colors.black,
    fontWeight: '400',
    lineHeight: sizes.screenHeight * 0.05,
  },


 
  te:{
    top: sizes.screenHeight * 0.02,
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: 'bold'
  },
  addanother:{
    fontSize: fontSize.large,
    color: colors.secondary,
    fontWeight: 'bold'
  },
  fieldleft:{
    right:sizes.screenWidth*0.04
  },
 
  filedcon: {
    marginBottom:sizes.screenHeight * 0.03,
  },
});
 