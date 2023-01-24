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
import {colors, sizes, fontSize, fontFamily} from '../../services';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TextInput} from 'react-native-paper';

export const ShareViste = ({navigation}) => {
  const [name, setname] = useState();
  const [show, setshow] = useState(false);
  const [slectnumber, setslectnumber] = useState();
  const [state, setState] = useState('');
  const [showState, setShowState] = useState(false);
  const [stateList, setStateList] = useState([
    ' ',
    'AL',
    'AK',
    'AZ',
    'AR',
    'AA',
    'AE',
    'AP',
    'CA',
    'CO',
    'CT',
    'DE',
    'DC',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY',
  ]);

  const handleState = item => {
    setState(item);
    setShowState(false);
  };
  return (
    <SafeAreaView style={styles.container}>
    
        <View>
          <Header dark={true} />
        </View>

        <View style={styles.headcontainer}>
          <Text style={styles.hedtext}>
            Add your external physician details
          </Text>
        </View>
        <View style={styles.headcontainer}>
          <Text style={styles.hedtex1t}>
            This enables us share medical records with your external
            physician.This creates more familiarity,better care,and easier
            referrals to specialists
          </Text>
        </View>
        <View style={styles.headcontainer}>
          <View style={styles.filedcon}>
            <CustomTextFiel
              label={'Physician Name'}
              value={name}
              setValue={setname}
            />
          </View>
          <View style={styles.filedcon}>
            <CustomTextFiel label={'Clinic'} value={name} setValue={setname} />
          </View>
          <View style={styles.inonecon}>
            <View style={styles.twoitem1}>
              <CustomTextFiel
                label={'Phone number'}
                value={name}
                setValue={setname}
              />
            </View>
            <View style={styles.twoitem}>
              <View
                style={{
                  width: sizes.screenWidth * 0.2,
                  left: sizes.screenWidth * 0.05,
                }}>
                <CustomTextFiel
                  label={'Ext.'}
                  value={slectnumber}
                  setValue={setslectnumber}
                />
              </View>
            </View>
          </View>
          <View style={styles.filedcon}>
            <CustomTextFiel label={'Fax'} value={name} setValue={setname} />
          </View>
          <View style={styles.inonecon}>
            <View style={styles.twoitem1}>
              <CustomTextFiel label={'City'} value={name} setValue={setname} />
            </View>
            <View style={styles.twoitem}>
              <View style={styles.stateView}>
                <TouchableOpacity>
                  <TextInput
                    mode="contain"
                    label={'State'}
                    onPressIn={() => setShowState(!showState)}
                    activeUnderlineColor={colors.secondary}
                    style={styles.field}
                    onChangeText={text => setState(text)}
                    value={state}
                    right={
                      <TextInput.Icon
                        onPress={() => setShowState(!showState)}
                        name="chevron-down"
                        color={colors.secondary}
                        style={styles.icon}
                      />
                    }
                  />
                </TouchableOpacity>
              </View>
              {showState && (
                <View style={styles.dropdown}>
                  <ScrollView>
                    {stateList?.map((item, index) => {
                      return (
                        <TouchableOpacity
                          key={index}
                          onPress={() => handleState(item)}>
                          <Text style={styles.listText}>{item}</Text>
                        </TouchableOpacity>
                      );
                    })}
                  </ScrollView>
                </View>
              )}
            </View>
          </View>

          <View style={styles.buttnView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('healthprofilereview')}>
              <View style={styles.buttonView}>
                <Text style={styles.buttonText}>Add Physicans</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
     
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  twoitem: {
    paddingRight: sizes.screenWidth * 0.03,
    paddingLeft: sizes.screenWidth * 0.03,
    marginBottom: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.5,
  },
  headcontainer: {
    paddingLeft: sizes.screenWidth * 0.05,
    paddingRight: sizes.screenWidth * 0.05,
    marginBottom: sizes.screenHeight * 0.03,
  },

  hedtext: {
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight: 'bold',
  },
  hedtex1t: {
    fontSize: fontSize.medium,
    color: colors.black,
    fontWeight: 'bold',
  },
  filedcon: {
    marginBottom: sizes.screenHeight * 0.03,
  },
  twoitem1: {
    width: sizes.screenWidth * 0.6,
  },
  inonecon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdown: {
    position: 'absolute',
    zIndex: 9,
    height: sizes.screenHeight * 0.5,
    width: sizes.screenWidth * 0.25,
    backgroundColor: colors.white,
    // marginTop: sizes.screenHeight * 0.2,
    marginRight: sizes.screenWidth * 0.02,
    marginLeft: sizes.screenWidth * 0.04,
    bottom:sizes.screenHeight*0.01,
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
    padding: sizes.TinyMargin,
    paddingBottom: sizes.screenHeight * 0.02,
    fontSize: fontSize.h6,
    color: colors.primary,
    fontFamily: fontFamily.appTextRegular,
  },
  field: {
    backgroundColor: colors.white,
    fontSize: fontSize.large,
    fontFamily: fontFamily.appTextRegular,
  },

  icon: {
    top: sizes.screenHeight * 0.01,
  },
  stateView: {
    width: sizes.screenWidth * 0.3,
    // alignSelf:'center'
  },
  buttnView: {
    // marginRight:sizes.screenWidth*0.06,
    marginTop: sizes.screenHeight * 0.01,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.92,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextHeading,
    fontWeight: '600',
  },
});
