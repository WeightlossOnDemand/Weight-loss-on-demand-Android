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
import {TextInput} from 'react-native-paper';
export const EdiTChildscreen = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setemail] = useState();
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header dark={true} />
        <View style={styles.headcontainer}>
          <Text style={styles.hedtext}>Update your email</Text>
        </View>
        <View style={styles.headcontainer1}>
          <Text style={styles.hedtext2}>
            Please also enter your Weightloss on Demand in the future, you will
            use your new email address to sign into the app
          </Text>
        </View>

        <View style={styles.filedContainer}>
          <View style={styles.filedcon}>
            <CustomTextFiel
              label={'Patient first name '}
              value={email}
              setValue={setemail}
            />
          </View>
          <View style={styles.filedcon}>
            <TextInput
              mode="contain"
              label={'Enter password'}
              activeUnderlineColor={colors.secondary}
              style={styles.field}
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry={!showPassword}
              right={
                <TextInput.Icon
                  icon={showPassword ? 'eye' : 'eye-off'}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
            />
            <View style={styles.buttnView}>
              <TouchableOpacity>
                <View style={styles.buttonView}>
                  <Text style={styles.buttonText}>Save</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
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
  headcontainer: {
    paddingLeft: sizes.screenWidth * 0.06,
  },
  hedtext: {
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextHeading,
  },
  headcontainer1: {
    marginTop: sizes.screenHeight * 0.05,
    justifyContent: 'center',
    paddingLeft: sizes.screenWidth * 0.06,
    // paddingRight: sizes.screenWidth * 0.04,
    alignItems: 'center',
  },
  hedtext2: {
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: 'bold',
    paddingRight: sizes.screenWidth * 0.01,
    lineHeight: sizes.screenHeight * 0.03,
    right: sizes.screenWidth * 0.03,
    fontFamily: fontFamily.appTextRegular,
  },
  filedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: sizes.screenHeight * 0.05,
  },
  filedcon: {
    width: sizes.screenWidth * 0.9,
    marginBottom: sizes.screenHeight * 0.03,
  },
  field: {
    backgroundColor: colors.white,
    fontFamily: fontFamily.appTextRegular,
  },
  buttnView: {
    // marginRight:sizes.screenWidth*0.06,
    marginTop: sizes.screenHeight * 0.03,
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
});
