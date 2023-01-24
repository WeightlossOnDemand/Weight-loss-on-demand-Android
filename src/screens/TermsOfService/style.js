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
  paddingLeft: {
    paddingLeft: sizes.baseMargin,
  },
  paddingBottom: {
    paddingBottom: sizes.baseMargin,
  },
  subHeading: {
    fontSize: fontSize.h6,
    fontWeight: 'bold',
    color: colors.primary,
    textDecorationLine: 'underline',
    fontFamily: fontFamily.appTextHeading,
  },
  heading: {
    fontSize: fontSize.medium,
    fontWeight: 'bold',
    color: colors.primary,
    fontFamily: fontFamily.appTextHeading,
  },
  addPaymentText: {
    fontSize: fontSize.h5,
    fontWeight: 'bold',
    color: colors.primary,
    fontFamily: fontFamily.appTextHeading,
  },
  paddingTop: {
    paddingTop: sizes.screenHeight * 0.015,
    paddingRight: sizes.screenWidth * 0.035,
  },
  bold: {fontWeight: 'bold'},
  regular: {fontWeight: '400'},
  textColor: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextRegular,
  },
  link: {
    color: colors.link,
    textDecorationLine: 'underline',
  },
  border: {
    borderWidth: 0.5,
    borderColor: colors.grayBorder,
  },
  top: {
    top: sizes.screenHeight * 0.02,
    paddingBottom: sizes.baseMargin,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    left: sizes.screenWidth * 0.05,
  },
  right: {
    right: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.7,
  },
  left: {
    left: sizes.screenHeight * 0.15,
  },
  top2: {
    top: sizes.TinyMargin,
  },
  top3: {
    top: sizes.screenHeight * 0.009,
  },
  paddingBottom2: {
    paddingBottom: sizes.screenHeight * 0.15,
  },
});
