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

  skipText: {
    fontFamily: fontFamily.appTextLight,
    color: colors.primary,
    fontSize: fontSize.medium,
    alignSelf: 'center',
    width: sizes.screenWidth * 0.5,
    textAlign: 'center',
  },
  extremelyText: {
    color: colors.primary,
    fontSize: fontSize.medium,
    width: sizes.screenWidth * 0.25,
    textAlign: 'left',
    alignSelf: 'flex-start',
    right: sizes.screenWidth * 0.07,
  },
  extremelyText2: {
    color: colors.primary,
    fontSize: fontSize.medium,
    width: sizes.screenWidth * 0.25,
    textAlign: 'right',
    alignSelf: 'flex-end',
    left: sizes.screenWidth * 0.07,
  },
  top: {
    paddingTop: sizes.screenHeight * 0.2,
  },
  paddingTop: {
    paddingTop: sizes.screenHeight * 0.03,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rate: {
    fontSize: fontSize.h5,
    fontFamily: fontFamily.appTextRegular,
    color: colors.primary,
    right: sizes.screenWidth * 0.01,
  },
  rating: {
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextRegular,
    color: colors.primary,
    fontWeight: 'bold',
  },
  left: {
    left: sizes.screenWidth * 0.03,
    bottom: 2,
  },
  leftIOS: {
    left: sizes.screenWidth * 0.01,
  },
  right: {
    right: sizes.screenWidth * 0.03,
    bottom: 2,
  },
  rightIOS: {
    right: sizes.screenWidth * 0.01,
    bottom: 2,
  },
  sliderWidth: {
    width: sizes.screenWidth * 0.8,
  },
  disabledView: {
    alignSelf: 'center',
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.92,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
  },
  center: {
    alignItems: 'center',
  },
  skip: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextLight,
  },
  skipIOS: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextLight,
    fontSize: fontSize.medium,
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
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
