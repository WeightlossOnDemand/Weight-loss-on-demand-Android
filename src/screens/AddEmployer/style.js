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
    paddingLeft: sizes.screenWidth * 0.05,
  },
  addPaymentText: {
    fontSize: fontSize.h4,
    fontWeight: 'bold',
    color: colors.primary,
    fontFamily: fontFamily.appTextHeading,
  },
  text: {
    color: colors.primary,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextLight,
  },
  paddingTop: {
    paddingTop: sizes.screenHeight * 0.015,
  },
  input: {
    backgroundColor: colors.lightGray,
    fontSize: fontSize.h6,
    width: sizes.screenWidth * 0.9,
    fontFamily: fontFamily.appTextRegular,
    paddingLeft: sizes.screenWidth * 0.05,
    height: 40,
  },
  row: {
    flexDirection: 'row',
    paddingTop: sizes.TinyMargin,
  },
  searchIcon: {
    position: 'absolute',
    left: 0,
    top: sizes.screenHeight * 0.02,
    bottom: 0,
    zIndex: 9,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.015,
    width: '100%',
    alignSelf: 'center',
    paddingLeft: sizes.screenHeight * 0.03,
    paddingRight: sizes.screenHeight * 0.03,
    borderBottomWidth: 2,
    borderColor: '#e9edef',
    // marginBottom: sizes.TinyMargin,
  },
  symbol: {
    color: colors.secondary,
    fontSize: fontSize.h4,
    bottom: 1,
  },
  cardText: {
    color: colors.primary,
    fontSize: fontSize.medium,
    fontWeight: '600',
    fontFamily: fontFamily.appTextLight,
  },
  top: {
    marginTop: sizes.screenHeight * 0.01,
  },
  height: {
    height: sizes.screenHeight * 0.6,
  },
  keyboardHeight: {
    height: sizes.screenHeight * 0.25,
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

  paddingLeft: {
    paddingLeft: sizes.baseMargin,
  },
  bold: {
    fontWeight: 'bold',
  },
  text2: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextLight,
  },
  right: {
    right: sizes.screenHeight * 0.09,
    width: sizes.screenWidth * 0.7,
  },
  bottom: {
    bottom: sizes.screenHeight * 0.015,
  },
  left: {
    right: sizes.screenWidth * 0.02,
  },
});
