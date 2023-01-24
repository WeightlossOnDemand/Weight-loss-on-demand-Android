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
import {Checkbox} from 'react-native-paper';
export const Whichmedicalconditions = ({navigation}) => {
    const [dreugallergi, setdreugallergi] = useState();
    const [slectnumber, setslectnumber] = useState();
    const [CheckedFemale, setCheckedFemale] = React.useState();
    const [show, setshow] = useState(false)
    const toogle=()=>{
        setshow(!show )
    }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header dark={true} />
       
      </View>
      <ScrollView>
      <View style={styles.container1}>
        <View>
          <Text style={styles.hedtext}>
           Add conditions?
          </Text>
          
        </View>
       
        <View style={styles.hedtextcon}>
          <Text style={styles.hedtext1}>
          Please include any medical conditions you have now or have had in past
          </Text>
         
        </View>
       <View>
       <View style={styles.container1}>
      
       
        
      <View style={styles.flo}>
          <Text style={styles.lstyle}>Abnormal thyroid</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>Anxiety </Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>Arthritis</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>Asthma</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>Cancer</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>Chronic Kidney disease</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>Chronic pain</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>COPD</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>COVID-19</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>Depression</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>Diabetes</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>Foreign travel (past month)</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>Heart disease(CHF,MI)</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>Hemophilia</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>High blood pressure</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>High cholesterol</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>History of fainting/seizure</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>History of falls</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>History of skin ancer</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>History of STD</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>History of stroke</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>Hospitalized (past six months)</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>Insomnia</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>Iron deficiency anemia</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>joint replacement</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>Nicotine dependence</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>Obesity</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>Prediabetes</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>Pregnant</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>Rheumatoid arthritis</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>Seasonal allergies/allergic rhinitis</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
        <View style={styles.flo}>
          <Text style={styles.lstyle}>Substance abuse</Text>
          <Checkbox
            status={CheckedFemale ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedFemale(!CheckedFemale);
            }}
            color={'#be1d2d'}
            uncheckColor={colors.secondary}
          />
        </View>
       
      </View>
      
      
     

       <View>
        <Text style={styles.addanother}>
            Add other conditions
        </Text>
       </View>
        
          <TouchableOpacity onPress={()=>navigation.navigate('pharmacymaplocation')}>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Confirm</Text>
            </View>
          </TouchableOpacity>
          
      </View>
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
    padding: sizes.screenWidth * 0.02,
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
  flo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: sizes.screenHeight * 0.02,
  },
});
 