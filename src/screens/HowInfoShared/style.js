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
  textColor: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextRegular,
  },
  row: {
    flexDirection: 'row',
    left: sizes.screenWidth * 0.02,
  },
  top: {
    top: sizes.screenHeight * 0.02,
  },
  width: {
    width: sizes.screenWidth * 0.8,
  },
  link: {
    color: colors.link,
    textDecorationLine: 'underline',
  },
  bottom: {
    paddingBottom: sizes.screenHeight * 0.15,
  },
});
