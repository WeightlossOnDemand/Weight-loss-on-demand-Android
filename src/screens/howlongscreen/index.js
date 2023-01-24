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

import Slider from '@react-native-community/slider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export const Howlong = ({navigation, route}) => {
  const [sliderValue, setSliderValue] = useState(15);
  const [slectnumber, setslectnumber] = useState();
  const [show, setshow] = useState(false);
  const toogle = () => {
    setshow(!show);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header dark={true} />
      </View>

      <View style={styles.headcontainer}>
        <Text style={styles.hedtext}>How long have you felt this way ?</Text>
      </View>

      <View style={styles.fle}>
        <View style={styles.slid}>
          <Text style={styles.slidvalue}>{sliderValue}</Text>
          <Slider
            maximumValue={10}
            minimumValue={1}
            minimumTrackTintColor="red"
            maximumTrackTintColor="red"
            step={1}
            value={sliderValue}
            onValueChange={sliderValue => setSliderValue(sliderValue)}
            style={styles.slidit}
          />
        </View>
        <View>
          <View style={styles.twoitem}>
            <CustomTextFiel
              label={'Days'}
              value={slectnumber}
              setValue={setslectnumber}
            />
            <MaterialIcons
              name="expand-more"
              color={colors.secondary}
              style={styles.icon}
              size={20}
              onPress={toogle}
            />
            {show ? (
              <View style={styles.pap}>
                <Text
                  style={styles.lstyle}
                  onPress={() => {
                    setslectnumber('Days');
                    setshow(!show);
                  }}>
                  Days
                </Text>
                <Text
                  style={styles.lstyle}
                  onPress={() => {
                    setslectnumber('Month');
                    setshow(!show);
                  }}>
                  Months
                </Text>
                <Text
                  style={styles.lstyle}
                  onPress={() => {
                    setslectnumber('Years');
                    setshow(!show);
                  }}>
                  Years
                </Text>
              </View>
            ) : null}
          </View>
        </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('symptomsscreen', {
              GoogleFit: route?.params?.GoogelFit,
            });
          }}>
          <View style={styles.bdiv}>
            <Text style={styles.btext}>›</Text>
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
  headcontainer: {
    marginTop: sizes.screenHeight * 0.2,
    paddingLeft: sizes.screenWidth * 0.05,
    paddingRight: sizes.screenWidth * 0.05,
  },

  hedtext: {
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight: 'bold',
  },
  fle: {
    marginTop: sizes.screenHeight * 0.05,
    flexDirection: 'row',
  },
  slid: {
    width: sizes.screenWidth * 0.7,
  },
  slidvalue: {
    paddingLeft: sizes.screenWidth * 0.05,
    bottom: sizes.screenHeight * 0.02,
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: 'bold',
  },
  twoitem: {
    width: sizes.screenWidth * 0.2,
  },
  icon: {
    position: 'absolute',
    left: sizes.screenWidth * 0.15,
    top: sizes.screenHeight * 0.03,
    fontSize: fontSize.h2,
    // flexDirection:'row'
  },
  pap: {
    width: sizes.screenWidth * 0.4,
    heigh: sizes.screenHeight * 0.9,
    backgroundColor: colors.white,
  },
  lstyle: {
    fontSize: fontSize.h5,
    color: colors.black,
    fontWeight: '400',
    lineHeight: sizes.screenHeight * 0.05,
  },
  bdiv: {
    marginTop: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.16,
    height: sizes.screenHeight * 0.081,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.screenWidth * 0.2,
  },
  btext: {
    fontSize: fontSize.h2,
    color: colors.white,
    fontWeight: 'bold',
    alignSelf: 'center',
    bottom: sizes.TinyMargin,
  },
  slidit: {
    top: sizes.screenHeight * 0.04,
  },
});
