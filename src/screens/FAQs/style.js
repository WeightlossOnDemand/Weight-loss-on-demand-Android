import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  color: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
  },
  padding: {
    padding: sizes.screenWidth * 0.03,
  },
  bold: {fontWeight: 'bold', color: colors.black},
  text: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextRegular,
    paddingTop:sizes.screenHeight*0.02
  },
  link: {
    color: colors.link,
    textDecorationLine: 'underline',
    fontFamily: fontFamily.appTextRegular,
  },
  redText: {
    fontFamily: fontFamily.appTextMedium,
    color: colors.secondary,
  },
  header: {
    backgroundColor: '#0e0e0e',
    opacity: 0.9,
    height: sizes.screenHeight * 0.5,
    justifyContent: 'center',
  },
  heading: {
    color: colors.black,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextHeading,
    // textAlign: 'center',
    fontWeight: '600',
  },
  textView: {
    width: sizes.screenWidth * 0.6,
    alignSelf: 'center',
  },
  field: {
    backgroundColor: colors.white,
    width: sizes.screenWidth * 0.7,
    height: 40,
    borderTopLeftRadius: sizes.screenWidth * 0.1,
    borderBottomLeftRadius: sizes.screenWidth * 0.1,
    paddingLeft: sizes.screenWidth * 0.05,
    color: colors.primary,
    fontFamily: fontFamily.appTextRegular,
  },
  paddingTop: {
    paddingTop: sizes.screenHeight * 0.05,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchView: {
    backgroundColor: colors.secondary,
    padding: sizes.screenWidth * 0.03,
    height: 40,
    width: sizes.screenWidth * 0.2,
    borderTopRightRadius: sizes.screenWidth * 0.1,
    borderBottomRightRadius: sizes.screenWidth * 0.1,
  },
  textHead: {
    fontSize: fontSize.h6,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  marginTop: {
    marginTop: sizes.screenHeight * 0.03,
  },
  marginTop2: {
    marginTop: sizes.screenHeight * 0.02,
  },
  light: {
    fontFamily: fontFamily.appTextLight,
    color: colors.primary,
    width: sizes.screenWidth * 0.9,
  },
  paddingBottom: {
    paddingBottom: sizes.screenHeight * 0.13,
  },
  buttonView: {
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.04,
    width: sizes.screenWidth * 0.28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.TinyMargin,
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextHeading,
    fontWeight: '600',
  },
  footerText: {
    color: colors.primary,
    fontSize: fontSize.small,
  },
  paddingLeft:{
    paddingLeft:sizes.screenWidth* 0.03
  },
  top:{
    marginTop:sizes.screenHeight * 0.01
  },
  condensed:{
    fontFamily:fontFamily.appTextCondensed,
  },
  bottomIOS: {
    paddingBottom: sizes.screenHeight * 0.15,
  },
});
