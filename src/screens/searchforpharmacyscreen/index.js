import React, {useState} from 'react';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {RadioButton} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors, fontFamily, fontSize, sizes} from '../../services';
import Octicons from 'react-native-vector-icons/Octicons';
import Header from '../../components/Header';
import {CustomTextFiel} from '../../component/textFiled';
export const ForPharmacy = () => {
  const [zipCode, setzipCode] = useState();
  const [Fieldsshowhide, setFieldsshowhide] = useState(false);
  const [checked, setChecked] = React.useState(true);
  const [retail, setretail] = useState(false);
  const [mailorder, setmailorder] = useState(false);
  const [longterm, setlongterm] = useState(false);
  const [Specialty, setSpecialty] = useState(false);
  const ShowFiled = () => {
    setFieldsshowhide(!Fieldsshowhide);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Header title={'Search for Pharmacy'} dark={true} />
        </View>
        <View style={styles.container2}>
          <View style={styles.btncontainer}>
            <View style={styles.gap}>
              <TouchableOpacity>
                <View style={styles.buttonView}>
                  <Text style={styles.buttonText}>Search Near Me</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.manually}>OR SEARCH MANUALLY :</Text>
          </View>

          <View style={styles.field}>
            <View style={styles.filedcon}>
              <CustomTextFiel
                label={'Zip code (optional)'}
                value={zipCode}
                setValue={setzipCode}
              />
            </View>
            <View style={styles.filedcon}>
              <CustomTextFiel
                label={'Name (optional)'}
                value={zipCode}
                setValue={setzipCode}
              />
            </View>
            <View style={styles.filedcon}>
              <CustomTextFiel
                label={'Phone number (optional)'}
                value={zipCode}
                setValue={setzipCode}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={ShowFiled}>
              <View style={styles.fle}>
                <Text style={styles.filtertext}>SHOW FILTERS</Text>
                {Fieldsshowhide ? (
                  <MaterialIcons
                    name="expand-less"
                    style={{color: colors.secondary}}
                    size={25}
                  />
                ) : (
                  <MaterialIcons
                    name="expand-more"
                    style={{color: colors.secondary}}
                    size={25}
                  />
                )}
              </View>
            </TouchableOpacity>
            {Fieldsshowhide ? (
              <View>
                <View>
                  <View style={styles.checkboxcont}>
                    <Checkbox
                      status={checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        setChecked(!checked);
                      }}
                      color={'#be1d2d'}
                      uncheckColor={colors.secondary}
                    />
                    <Text style={styles.fultime}>24 Hours only</Text>
                  </View>
                </View>
                <View style={styles.bg}>
                  <View style={styles.filedcontext}>
                    <Text style={styles.text}>Retail</Text>
                    <View>
                      <Checkbox
                        status={retail ? 'checked' : 'unchecked'}
                        onPress={() => {
                          setretail(!retail);
                        }}
                        color={'#be1d2d'}
                        uncheckColor={colors.secondary}
                      />
                    </View>
                  </View>
                  <View style={styles.filedcontext}>
                    <Text style={styles.text}>Mail Order</Text>
                    <View>
                      <Checkbox
                        status={mailorder ? 'checked' : 'unchecked'}
                        onPress={() => {
                          setmailorder(!mailorder);
                        }}
                        color={'#be1d2d'}
                        uncheckColor={colors.secondary}
                      />
                    </View>
                  </View>
                  <View style={styles.filedcontext}>
                    <Text style={styles.text}>Long Term Care</Text>
                    <View>
                      <Checkbox
                        status={longterm ? 'checked' : 'unchecked'}
                        onPress={() => {
                          setlongterm(!longterm);
                        }}
                        color={'#be1d2d'}
                        uncheckColor={colors.secondary}
                      />
                    </View>
                  </View>
                  <View style={styles.filedcontext}>
                    <Text style={styles.text}>Specialty</Text>
                    <View>
                      <Checkbox
                        status={Specialty ? 'checked' : 'unchecked'}
                        onPress={() => {
                          setSpecialty(!Specialty);
                        }}
                        color={'#be1d2d'}
                        uncheckColor={colors.secondary}
                      />
                    </View>
                  </View>
                </View>
              </View>
            ) : null}
            <View style={styles.field}>
              <View style={styles.btncontainer}>
                <View style={styles.gap}>
                  <TouchableOpacity>
                    <View style={styles.buttonView}>
                      <Text style={styles.buttonText}>Search</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
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
  container2: {
    paddingLeft: sizes.screenWidth * 0.05,
    paddingRight: sizes.screenWidth * 0.05,
  },
  buttonView: {
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.93,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
  },
  btncontainer: {
    // marginTop:sizes.screenHeight*0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gap: {
    marginBottom: sizes.screenHeight * 0.04,
  },
  manually: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextHeading,
  },
  filedcon: {
    marginBottom: deviceHeight * 0.03,
  },
  fle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkboxcont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fultime: {
    fontSize: fontSize.medium,
    color: colors.black,
    fontFamily:fontFamily.appTextMedium

  },
  filedcontext: {
    marginTop: deviceHeight * 0.03,
    paddingLeft: deviceWidth * 0.01,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: deviceHeight * 0.02,
  },
  text: {
    fontSize: fontSize.medium,
    color: '#000',
    fontFamily:fontFamily.appTextMedium

  },
  bg: {
    marginTop: sizes.screenHeight * 0.02,
    backgroundColor: colors.white,
  },
  filtertext: {
    fontSize: fontSize.medium,
    color: '#000',
    fontFamily:fontFamily.appTextMedium
  },
  field: {
    marginTop: sizes.screenHeight * 0.03,
  },
});
