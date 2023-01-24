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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export const Whichmedication = () => {
    const [medicationone, setmedicationone] = useState();
    const [slectnumber, setslectnumber] = useState();
    const [show, setshow] = useState(false)
    const toogle=()=>{
        setshow(!show )
    }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header dark={true} />
       
      </View>
      <View style={styles.container1}>
        <View>
          <Text style={styles.hedtext}>
            Which medications ?
          </Text>
          
        </View>
       
        <View style={styles.hedtextcon}>
          <Text style={styles.hedtext1}>
          Please consider any medication you are taking, including those taken on aregular basis
          </Text>
         
        </View>
       <View>
       <View style={styles.inonecon}>
            <View style={styles.twoitem}>
              <CustomTextFiel
                label={'Medication 1'}
                value={medicationone}
                setValue={setmedicationone}
                style={styles.twoitem}
              />
            </View>
            <View style={styles.twoitem}>
            <CustomTextFiel
                label={'How long ?'}
                value={slectnumber}
                setValue={setslectnumber}
                style={styles.twoitem}
              />
              <MaterialIcons name="expand-more" color={colors.secondary} style={styles.icon} size={20} onPress={toogle} />
              { show ?<View style={styles.pap}>
                <Text style={styles.lstyle} onPress={()=>{setslectnumber('Past week');setshow(!show)}}>Past week</Text>
                <Text style={styles.lstyle} onPress={()=>{setslectnumber('Past Month');setshow(!show)}}>Past Month</Text>
                <Text style={styles.lstyle} onPress={()=>{setslectnumber('Past Year');setshow(!show)}}>Past Year</Text>
                <Text style={styles.lstyle} onPress={()=>{setslectnumber('Over a Year');setshow(!show)}}>Over a Year</Text>
                
            </View>:null}
            </View>
           
          </View>
          <View style={styles.inonecon}>
            <View style={styles.twoitem}>
              <CustomTextFiel
                label={'Medication 1'}
                value={medicationone}
                setValue={setmedicationone}
                style={styles.twoitem}
              />
            </View>
            <View style={styles.twoitem}>
            <CustomTextFiel
                label={'How long ?'}
                value={slectnumber}
                setValue={setslectnumber}
                style={styles.twoitem}
              />
              <MaterialIcons name="expand-more" color={colors.secondary} style={styles.icon} size={20} onPress={toogle} />
              { show ?<View style={styles.pap}>
                <Text style={styles.lstyle} onPress={()=>{setslectnumber('Past week');setshow(!show)}}>Past week</Text>
                <Text style={styles.lstyle} onPress={()=>{setslectnumber('Past Month');setshow(!show)}}>Past Month</Text>
                <Text style={styles.lstyle} onPress={()=>{setslectnumber('Past Year');setshow(!show)}}>Past Year</Text>
                <Text style={styles.lstyle} onPress={()=>{setslectnumber('Over a Year');setshow(!show)}}>Over a Year</Text>
                
            </View>:null}
            </View>
           
          </View>
          <View style={styles.inonecon}>
            <View style={styles.twoitem}>
              <CustomTextFiel
                label={'Medication 1'}
                value={medicationone}
                setValue={setmedicationone}
                style={styles.fieldleft}
              />
            </View>
            <View style={styles.twoitem}>
            <CustomTextFiel
                label={'How long ?'}
                value={slectnumber}
                setValue={setslectnumber}
               
              />
              <MaterialIcons name="expand-more" color={colors.secondary} style={styles.icon} size={20} onPress={toogle} />
              { show ?<View style={styles.pap}>
                <Text style={styles.lstyle} onPress={()=>{setslectnumber('Past week');setshow(!show)}}>Past week</Text>
                <Text style={styles.lstyle} onPress={()=>{setslectnumber('Past Month');setshow(!show)}}>Past Month</Text>
                <Text style={styles.lstyle} onPress={()=>{setslectnumber('Past Year');setshow(!show)}}>Past Year</Text>
                <Text style={styles.lstyle} onPress={()=>{setslectnumber('Over a Year');setshow(!show)}}>Over a Year</Text>
                
            </View>:null}
            </View>
           
          </View>
        
       </View>

       <View>
        <Text style={styles.addanother}>
            Add another
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    width:sizes.screenWidth*0.94
  },
  twoitem: {
    right:sizes.screenWidth*0.03,
    marginBottom: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.4,
  },
  pap:{
    position:'absolute',
    top:sizes.screenHeight*0.09,
    width:sizes.screenWidth*0.4,
    heigh:sizes.screenHeight*0.9,
    backgroundColor:colors.white,
    paddingLeft:sizes.screenWidth*0.02,
    zIndex:9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  lstyle:{
    fontSize:fontSize.h5,
    color:colors.black,
    fontWeight:"400",
    lineHeight:sizes.screenHeight*0.05
  },
  icon:{
    position:'absolute',
    left:sizes.screenWidth*0.3,
    top:sizes.screenHeight *0.03,
    fontSize:fontSize.h2
        // flexDirection:'row'
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
  }
});
