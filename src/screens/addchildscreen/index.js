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
import {RadioButton} from 'react-native-paper';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo';
export const ChildScreen = ({navigation, route}) => {
  const [CheckedMale, setCheckedMale] = React.useState();
  const [CheckedfeMale, setCheckedfeMale] = React.useState();
  const [name, setname] = useState();
  const [lastname, setlastname] = useState();
  const [Middle, setMiddle] = useState();
  const [date, setdate] = useState();
  const [sufix, setsufix] = useState();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header dark={true} />
      </View>

      <View style={styles.headcontainer}>
        <Text style={styles.hedtext}>Add your child</Text>
      </View>

      <View
        style={{
          paddingLeft: sizes.screenWidth * 0.05,
          paddingRight: sizes.screenWidth * 0.05,
        }}>
        <View>
          <View style={styles.filedcon}>
            <CustomTextFiel
              label={'First Name'}
              value={name}
              setValue={setname}
            />
          </View>
          <View style={styles.filedcon}>
            <CustomTextFiel
              label={'Middle Name (Optional)'}
              value={Middle}
              setValue={setMiddle}
            />
          </View>
          <View style={styles.filedcon}>
            <CustomTextFiel
              label={'Last Name'}
              value={lastname}
              setValue={setlastname}
            />
          </View>
          <View style={styles.filedcon}>
            <CustomTextFiel
              label={'Suffix (Optional)'}
              value={sufix}
              setValue={setsufix}
            />
          </View>
          <View style={styles.filedcon}>
            <CustomTextFiel
              label={'Date of birth'}
              value={date}
              setValue={setdate}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: sizes.screenHeight * 0.03,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: sizes.screenWidth * 0.04,
              }}>
              <Text style={styles.lstyle}>Male</Text>
              <RadioButton
                status={CheckedMale ? 'checked' : 'unchecked'}
                onPress={() => {
                  setCheckedMale(!CheckedMale);
                  setCheckedfeMale(false);
                }}
                color={'#be1d2d'}
                uncheckColor={colors.secondary}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: sizes.screenWidth * 0.02,
              }}>
              <Text style={styles.lstyle}>Female</Text>
              <RadioButton
                status={CheckedfeMale ? 'checked' : 'unchecked'}
                onPress={() => {
                  setCheckedfeMale(!CheckedfeMale);
                  setCheckedMale(false)
                }}
                color={'#be1d2d'}
                uncheckColor={colors.secondary}
              />
            </View>
          </View>
          <TouchableOpacity onPress={toggleModal}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.lightGray,
                width: sizes.screenWidth * 0.08,
                height: sizes.screenHeight * 0.04,
                borderRadius: sizes.screenWidth * 0.4,
                bottom: sizes.screenHeight * -0.017,
              }}>
              <Text style={styles.lstyle1}>?</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: sizes.screenHeight * 0.04,
            marginBottom: sizes.screenHeight * 0.03,
          }}>
          <View style={styles.mrk}>
            <Text style={styles.lstyle2}>!</Text>
          </View>
          <View
            style={{
              paddingLeft: sizes.screenWidth * 0.05,
              paddingRight: sizes.screenWidth * 0.1,
            }}>
            <Text style={styles.lstylem}>
              Note: By continuing, I agree that I am legally authorized to make
              medical decisions for this individual
            </Text>
          </View>
        </View>
        <View style={styles.buttnView}>
          <TouchableOpacity
            onPress={() =>
              route?.params?.to ? navigation.navigate(route?.params?.to) : null
            }>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        style={{
          width: sizes.screenWidth,
          height: sizes.screenHeight,
          backgroundColor: 'rgba(52, 52, 52, 0.8)',
          marginLeft: sizes.screenWidth * 0.001,

          padding: sizes.screenWidth*0.02,
          position:'absolute',
          top:-sizes.baseMargin,
        }}
        isVisible={isModalVisible}>
        <TouchableOpacity onPress={toggleModal}>
          <View
            style={{
              position: 'relative',
              bottom: sizes.screenHeight * 0.25,
              left: sizes.screenWidth * 0.85,
            }}>
            <Entypo name="cross" color={colors.secondary} size={30} />
          </View>
        </TouchableOpacity>

        <View style={styles.texcon}>
          <Text style={styles.text111}>Why we ask</Text>
        </View>
        <View style={styles.texcon1}>
          <Text style={styles.text1}>
            Weight Loss on Demand is accepting of all gender identities.however
            in order to use your insurance coverage or for your provider to
            prescribe medication,you need to specify your chlds sex as either
            Male or Female
          </Text>
        </View>

        <View style={styles.buttnView}>
          <TouchableOpacity onPress={toggleModal}>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Done</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
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
    fontStyle: fontFamily.appTextHeading,
  },
  lstyle: {
    fontSize: fontSize.h6,
    left: sizes.TinyMargin,
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
    fontWeight: '400',
    lineHeight: sizes.screenHeight * 0.05,
    paddingRight: sizes.screenWidth * 0.03,
  },
  lstyle1: {
    fontSize: fontSize.h5,
    color: colors.black,
    fontWeight: '400',
  },
  mrk: {
    borderRadius: sizes.screenWidth * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    width: sizes.screenWidth * 0.06,
    height: sizes.screenHeight * 0.03,
    backgroundColor: colors.secondary,
  },
  lstyle2: {
    fontSize: fontSize.large,
    color: colors.white,
    fontWeight: '400',
    fontStyle: fontFamily.appTextRegular,
  },
  lstylem: {
    fontSize: fontSize.medium,
    color: colors.black,
    fontWeight: '400',
    fontStyle: fontFamily.appTextRegular,
    right: sizes.screenWidth * 0.03,
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
  buttnView: {
    // marginRight: sizes.screenWidth * 0.05,
    marginTop: sizes.screenHeight * 0.03,
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
  text111: {
    fontSize: fontSize.h4,
    color: colors.white,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextRegular,
  },
  texcon: {
    bottom: sizes.screenHeight * 0.1,
  },
  texcon1: {
    bottom: sizes.screenHeight * 0.08,
  },
  text1: {
    fontSize: fontSize.large,
    color: colors.white,
    fontFamily: fontFamily.appTextLight,
  },
});
