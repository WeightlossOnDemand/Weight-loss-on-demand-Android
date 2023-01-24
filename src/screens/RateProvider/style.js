import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  color: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
  },
  padding: {
    padding: sizes.baseMargin,
  },
  skipBtn: {
    alignSelf: 'flex-end',
  },
  skipText: {
    fontFamily: fontFamily.appTextLight,
    color: colors.primary,
    fontSize: fontSize.h6,
  },

  rateText: {
    fontFamily: fontFamily.appTextMedium,
    color: colors.primary,
    paddingBottom: sizes.screenHeight * 0.03,
    alignSelf: 'center',

  },
  docImg: {
    height: sizes.screenHeight * 0.2,
    width: sizes.screenWidth * 0.4,
    alignSelf: 'center',
    borderRadius:sizes.screenWidth*0.5
  },
  docImgIOS:{
    height: sizes.screenHeight * 0.15,
    width: sizes.screenWidth * 0.33,
    alignSelf: 'center',
    borderRadius:sizes.screenWidth*0.5
  },
  providerTitle: {
    paddingTop: sizes.screenHeight * 0.01,
    fontSize:fontSize.h5,
    alignSelf: 'center',
    color:colors.primary,
    fontFamily:fontFamily.appTextMedium
  },
  modalView: {
    width: sizes.screenWidth,
    backgroundColor: '#0e0e0e',
    opacity: 0.9,
    marginLeft: sizes.screenWidth * 0.001,
    padding: 10,
    position: 'absolute',
    top: -20,
    height: sizes.screenHeight,
  },
  texcon: {
    paddingBottom: sizes.screenHeight * 0.1,
  },
  texcon1: {
    bottom: sizes.screenHeight * 0.08,
  },
  text111: {
    fontSize: fontSize.h4,
    color: colors.white,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextHeading,
    paddingLeft: sizes.screenWidth * 0.035,
  },
  text1: {
    fontSize: fontSize.large,
    color: colors.white,
    fontFamily: fontFamily.appTextLight,
    paddingLeft: sizes.screenWidth * 0.035,
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
  },
  buttonView: {
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.89,
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
  },
});
