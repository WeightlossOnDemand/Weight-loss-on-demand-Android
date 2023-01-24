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
  Linking
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {CustomTextFiel} from '../../component/textFiled';
import {colors, sizes, fontSize, fontFamily} from '../../services';
import ladyy from '../../assets/assets/ladyy.jpg';
import calender from '../../assets/assets/calender.png';
import favourite from '../../assets/assets/favourite.jpeg';
import book from '../../assets/assets/book.png';
import question from '../../assets/assets/question.png';
import share from '../../assets/assets/share.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export const WhatCANWEhelp = () => {
  const [show, setshow] = useState(false);
  const [reason, setreason] = useState();
  const [text, settext] = useState();
 console.log(text);
  
  const [slectnumber, setslectnumber] = useState();

  const Toogle = () => {
    setshow(!show);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title={'Ask a Question'} dark={true} />
      </View>
      <ScrollView>
        <View style={styles.container1}>
          <View style={{top: sizes.screenHeight * -0.02}}>
            <Text style={styles.hedtext}>What can we help you with</Text>
          </View>
          <TouchableOpacity onPress={Toogle}>
            <CustomTextFiel
              editable={false}
              label={'Select Reason'}
              value={slectnumber}
              setValue={setreason}
            />
            <MaterialIcons
              name="expand-more"
              color={colors.secondary}
              size={25}
              style={styles.ex}
            />
          </TouchableOpacity>
          {show ? (
            <View style={styles.crd}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text
                  style={styles.hedtext1}
                  onPress={() => {
                    setslectnumber('Technical Support');
                    setshow(!show);
                  }}>
                  Technical Support
                </Text>
                <Text
                  style={styles.hedtext1}
                  onPress={() => {
                    setslectnumber('Documents or Records');
                    setshow(!show);
                  }}>
                  Documents or Records
                </Text>
                <Text
                  style={styles.hedtext1}
                  onPress={() => {
                    setslectnumber('Account Assistance');
                    setshow(!show);
                  }}>
                  Account Assistance
                </Text>
                <Text
                  style={styles.hedtext1}
                  onPress={() => {
                    setslectnumber('Insurance or Employer');
                    setshow(!show);
                  }}>
                  Insurance or Employer
                </Text>
                <Text
                  style={styles.hedtext1}
                  onPress={() => {
                    setslectnumber('Labs');
                    setshow(!show);
                  }}>
                  Labs
                </Text>
                <Text
                  style={styles.hedtext1}
                  onPress={() => {
                    setslectnumber('RX: Missing from pharmacy');
                    setshow(!show);
                  }}>
                  RX: Missing from pharmacy
                </Text>
                <Text
                  style={styles.hedtext1}
                  onPress={() => {
                    setslectnumber('RX: Medication substitutions');
                    setshow(!show);
                  }}>
                  RX: Medication substitutions
                </Text>
                <Text
                  style={styles.hedtext1}
                  onPress={() => {
                    setslectnumber('RX: send different pharmacy');
                    setshow(!show);
                  }}>
                  RX: send different pharmacy
                </Text>
                <Text
                  style={styles.hedtext1}
                  onPress={() => {
                    setslectnumber('RX: Refill');
                    setshow(!show);
                  }}>
                  RX: Refill
                </Text>
                <Text
                  style={styles.hedtext1}
                  onPress={() => {
                    setslectnumber('RX: Allergy or drug Interation');
                    setshow(!show);
                  }}>
                  RX: Allergy or drug Interation
                </Text>
                <Text
                  style={styles.hedtext1}
                  onPress={() => {
                    setslectnumber('RX: Question about medication');
                    setshow(!show);
                  }}>
                  RX: Question about medication
                </Text>
                <Text
                  style={styles.hedtext1}
                  onPress={() => {
                    setslectnumber('RX: Feedback');
                    setshow(!show);
                  }}>
                  RX: other
                </Text>
                <Text style={styles.hedtext1}>RX: Feedback</Text>
                <Text
                  style={styles.hedtext1}
                  onPress={() => {
                    setslectnumber('Other');
                    setshow(!show);
                  }}>
                  Other
                </Text>
              </ScrollView>
            </View>
          ) : null}

        {slectnumber ?   <View>
          <CustomTextFiel
              label={'e.g i need and excuse not'}
              value={text}
              setValue={settext}
            />
            <Text style={styles.length}>{text?.length}/400</Text>
          </View>:null}

          {slectnumber ? <View>
            {text?.length ?<View>
      
      <TouchableOpacity  >
        <View style={styles.buttonView}>
          <Text style={styles.buttonText}>Save</Text>
        </View>
      </TouchableOpacity>
      </View>:<View>
      
      <TouchableOpacity disabled >
        <View style={styles.buttonView1}>
          <Text style={styles.buttonText}>Save</Text>
        </View>
      </TouchableOpacity>
      </View>}
          </View> : null}
        
          <View style={{top:sizes.screenHeight*0.02}}>
            <Text style={styles.length1}>Crisis or emergency ? if you are experience a crisis or emergency .please dial 911.you may also acess the free 24-Hour National Sucide Prevention Lifeline at </Text>
            
          </View>
          <Text style={[styles.length1,styles.color]}  onPress={() => {
            Linking.openURL('tel:1-8002738255');
          }}>1-8002738255 </Text>

        </View>
      </ScrollView>
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
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight: 'bold',
  },
  hedtext1: {
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextHeading,
    marginBottom: sizes.screenHeight * 0.02,
  },
  ex: {
    alignSelf: 'flex-end',
    bottom: sizes.screenHeight * 0.05,
  },

  crd: {
    paddingBottom: sizes.screenHeight * 0.03,
    marginTop: sizes.screenHeight * -0.03,
    marginBottom: sizes.screenHeight * 0.0,
    borderRadius: sizes.screenWidth * 0.02,
    height: sizes.screenHeight * 0.5,
    width: sizes.screenWidth * 0.9,
    borderWidth: 1,
    borderColor: colors.lightGray,
    padding: sizes.screenWidth * 0.04,
    shadowColor: '#000',
    backgroundColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  padding: {
    paddingRight: sizes.screenWidth * 0.1,
  },
  border: {
    fontSize: fontSize.h5,
    color: colors.gray,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextLight,
    // marginLeft:sizes.screenWidth*0.03,
  },
  borderbottom: {
    paddingTop: sizes.screenHeight * 0.03,

    borderBottomWidth: sizes.screenWidth * 0.002,
  },
  addanother: {
    paddingTop: sizes.screenHeight * 0.04,
    fontSize: fontSize.large,
    color: colors.secondary,
    fontWeight: 'bold',
  },
  flex3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: sizes.screenHeight * 0.02,
  },
  mt: {
    marginTop: sizes.screenHeight * 0.02,
  },
  length:{
    paddingTop: sizes.screenHeight * 0.01,
    fontSize: fontSize.large,
    color: colors.secondary,
    alignSelf:'flex-end'
  },
  length1:{
    paddingTop: sizes.screenHeight * 0.01,
    fontSize: fontSize.large,
    color: colors.black,
  },
  buttonView1:{
    marginTop:sizes.screenHeight*0.02,
    backgroundColor: colors.disabledBg,
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
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
    fontWeight:'bold'
  },
  color:{
    color:colors.secondary,
    top:sizes.screenHeight*0.02
  }
});
