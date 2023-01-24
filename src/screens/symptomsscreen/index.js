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
  TextInput,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {CustomTextFiel} from '../../component/textFiled';
import {colors, sizes, fontSize} from '../../services';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Checkbox} from 'react-native-paper';

export const SymtomsScreen = ({navigation, route}) => {
  const [CheckedFemale, setCheckedFemale] = React.useState();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header dark={true} />
      </View>

      <View style={styles.headcontainer}>
        <Text style={styles.hedtext}>Do you have any of these symptoms ?</Text>
      </View>
      <ScrollView>
        <View style={styles.heding}>
          <Text style={styles.syp}>GENERAL SYMPTOMS</Text>
        </View>
        <View style={styles.container1}>
          <View style={styles.flo}>
            <Text style={styles.lstyle}>Difficulty sleeping</Text>
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
            <Text style={styles.lstyle}>Fatigue / Weakness </Text>
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
            <Text style={styles.lstyle}>Fever</Text>
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
            <Text style={styles.lstyle}>Loss of appetite</Text>
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
            <Text style={styles.lstyle}>Mood changes</Text>
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
            <Text style={styles.lstyle}>Night sweats</Text>
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
            <Text style={styles.lstyle}>Weight loss /gain</Text>
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
        <View style={styles.heding}>
          <Text style={styles.syp}>HEAD/NECK</Text>
        </View>
        <View style={styles.container1}>
          <View style={styles.flo}>
            <Text style={styles.lstyle}>Congestion / sinus problem </Text>
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
            <Text style={styles.lstyle}>Difficulty / pain swallowing </Text>
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
            <Text style={styles.lstyle}>Ear pain </Text>
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
            <Text style={styles.lstyle}>Eye redness/ discharge </Text>
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
            <Text style={styles.lstyle}>Headache </Text>
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
            <Text style={styles.lstyle}>Hearing loss/ ringing </Text>
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
            <Text style={styles.lstyle}>Loss of smell </Text>
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
            <Text style={styles.lstyle}>Loss of taste </Text>
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
            <Text style={styles.lstyle}>Nasal discharge </Text>
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
            <Text style={styles.lstyle}>Nose bleeds </Text>
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
            <Text style={styles.lstyle}>sore throat </Text>
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
            <Text style={styles.lstyle}>Fatigue / Weakness </Text>
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
        <View style={styles.heding}>
          <Text style={styles.syp}>CHEST</Text>
        </View>
        <View style={styles.container1}>
          <View style={styles.flo}>
            <Text style={styles.lstyle}>Chest pressure / pain </Text>
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
            <Text style={styles.lstyle}>Cough </Text>
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
            <Text style={styles.lstyle}>Decreased ecercise tolerance </Text>
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
            <Text style={styles.lstyle}>Palpitations </Text>
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
            <Text style={styles.lstyle}>Shortness of breath </Text>
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
            <Text style={styles.lstyle}>
              sputum / productive cough /phlegm{' '}
            </Text>
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
            <Text style={styles.lstyle}>Wheezing </Text>
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
        <View style={styles.heding}>
          <Text style={styles.syp}>GASTROINTESTINAL</Text>
        </View>
        <View style={styles.container1}>
          <View style={styles.flo}>
            <Text style={styles.lstyle}>Abdominal pain / discomfort </Text>
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
            <Text style={styles.lstyle}>Blood in stool </Text>
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
            <Text style={styles.lstyle}>Constipation </Text>
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
            <Text style={styles.lstyle}>Diarrhea </Text>
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
            <Text style={styles.lstyle}>Heartburn/ reflux </Text>
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
            <Text style={styles.lstyle}>Nausea/ vomiting </Text>
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
        <View style={styles.heding}>
          <Text style={styles.syp}>GENITOURINARY</Text>
        </View>
        <View style={styles.container1}>
          <View style={styles.flo}>
            <Text style={styles.lstyle}>Blood in urine </Text>
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
            <Text style={styles.lstyle}>
              Discomfort/burning with urination{' '}
            </Text>
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
            <Text style={styles.lstyle}>Frequent urination </Text>
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
            <Text style={styles.lstyle}>Penile discharge </Text>
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
            <Text style={styles.lstyle}>Testicular pain </Text>
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
            <Text style={styles.lstyle}>Testicular swelling </Text>
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
        <View style={styles.heding}>
          <Text style={styles.syp}>NEUROLOGICAL</Text>
        </View>
        <View style={styles.container1}>
          <View style={styles.flo}>
            <Text style={styles.lstyle}>Dizzy/lightheaded </Text>
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
            <Text style={styles.lstyle}>Loss of consiousness </Text>
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
            <Text style={styles.lstyle}>Memory loss </Text>
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
            <Text style={styles.lstyle}>Numbness /tingling </Text>
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
            <Text style={styles.lstyle}>Tremors </Text>
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
            <Text style={styles.lstyle}>Vision changes </Text>
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
        <View style={styles.heding}>
          <Text style={styles.syp}>SKIN</Text>
        </View>
        <View style={styles.container1}>
          <View style={styles.flo}>
            <Text style={styles.lstyle}>Bites </Text>
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
            <Text style={styles.lstyle}>Bleeding </Text>
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
            <Text style={styles.lstyle}>Bruising/discoloration </Text>
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
            <Text style={styles.lstyle}>itching </Text>
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
            <Text style={styles.lstyle}>skin rashes/ bumps</Text>
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
            <Text style={styles.lstyle}>sores </Text>
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
            <Text style={styles.lstyle}>Swelling </Text>
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
        <View style={styles.heding}>
          <Text style={styles.syp}>MUSCULOSKELETAL</Text>
        </View>
        <View style={styles.container1}>
          <View style={styles.flo}>
            <Text style={styles.lstyle}>Back pain </Text>
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
            <Text style={styles.lstyle}>Joint stiffness </Text>
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
            <Text style={styles.lstyle}>Limited motion /mobility </Text>
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
            <Text style={styles.lstyle}>Muscle weakness </Text>
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
            <Text style={styles.lstyle}>Swelling </Text>
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
        <View style={styles.buttnView}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('healthprofilereview', {
                GoogleFit: route?.params?.GoogelFit,
                pharmacy:true
              })
            }>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Next</Text>
            </View>
          </TouchableOpacity>
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
  headcontainer: {
    paddingLeft: sizes.screenWidth * 0.05,
  },

  hedtext: {
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight: 'bold',
  },
  container1: {
    paddingLeft: sizes.screenWidth * 0.05,
    paddingRight: sizes.screenWidth * 0.05,
  },
  heding: {
    marginTop: sizes.screenHeight * 0.02,
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.09,
    backgroundColor: colors.lightGray,
    justifyContent: 'center',
    paddingLeft: sizes.screenWidth * 0.05,
  },
  syp: {
    fontSize: fontSize.h6,
    color: colors.gray,
    fontWeight: 'bold',
  },
  lstyle: {
    fontSize: fontSize.h6,
    color: colors.black,
    fontWeight: '400',
    lineHeight: sizes.screenHeight * 0.05,
  },
  flo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: sizes.screenHeight * 0.02,
  },
  buttnView: {
    // marginRight:sizes.screenWidth*0.06,
    marginTop: sizes.screenHeight * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: sizes.screenHeight * 0.05,
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
});
