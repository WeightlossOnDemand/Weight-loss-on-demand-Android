import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  color: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
  },
  paddingLeft: {
    paddingLeft: sizes.baseMargin,
  },
  paddingBottom: {
    paddingBottom: sizes.baseMargin,
  },
  addPaymentText: {
    fontSize: fontSize.h4,
    fontWeight: 'bold',
    color: colors.primary,
    fontFamily: fontFamily.appTextHeading,
    padding: sizes.TinyMargin,
    paddingLeft: sizes.screenWidth * 0.03,
  },
  googleFit: {
    alignSelf: 'center',
    height: sizes.screenHeight * 0.15,
    width: sizes.screenWidth * 0.8,
  },
  top: {
    paddingTop: sizes.baseMargin,
    paddingBottom: sizes.baseMargin,
  },
  padding: {
    padding: sizes.baseMargin,
    paddingLeft:sizes.screenWidth * 0.07
  },
  text: {
    color: colors.primary,
    fontSize: fontSize.h6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  right: {
    right: sizes.screenHeight * 0.1,
    width: sizes.screenWidth * 0.4,
  },
  top2: {
    paddingTop: sizes.screenHeight * 0.01,
  },
  learnMoreBtn: {
    marginTop: sizes.screenHeight * 0.02,
    alignItems: 'center',
  },
  learnMoreText: {
    fontSize: fontSize.h6,
    fontWeight: 'bold',
    color: colors.secondary,
    fontFamily: fontFamily.appTextHeading,
  },
  buttonView: {
    alignSelf: 'center',
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextHeading,
    fontWeight: '600',
  },
  btnTop: {
    paddingTop: sizes.screenHeight * 0.1,
  },
});
