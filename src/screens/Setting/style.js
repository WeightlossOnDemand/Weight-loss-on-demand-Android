import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  color: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
  },
  userView: {
    backgroundColor: colors.secondary,
    paddingBottom: sizes.screenHeight * 0.02,
  },
  signOutBtn: {
    alignSelf: 'flex-end',
    right: sizes.baseMargin,
    // top:sizes.screenHeight* 0.053,
    // backgroundColor:colors.appBgColor2
  },
  signOutText: {
    color: colors.white,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextLight,
    fontWeight:'bold'
  },
  userName: {
    color: colors.white,
    fontSize: fontSize.h6,
    paddingLeft: sizes.baseMargin,
    fontFamily: fontFamily.appTextMedium,
  },
  left: {
    paddingLeft: sizes.baseMargin,
  },
  padding: {
    padding: sizes.baseMargin,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    left: sizes.screenWidth * 0.06,
    fontSize: fontSize.medium,
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
  },
  fingerprintText: {
    right: sizes.screenWidth * 0.07,
    fontSize: fontSize.medium,
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
  },
  fingerprintTextIOS: {
    right: sizes.screenWidth * 0.04,
    fontSize: fontSize.medium,
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
  },
  top: {
    top: sizes.TinyMargin,
  },
  head: {
    color: colors.primary,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextLight,
    fontSize: fontSize.medium,
  },
  version: {
    color: colors.secondary,
    fontWeight: '700',
    fontFamily: fontFamily.appTextLight,
  },
  redText: {
    color: colors.secondary,
    left: sizes.screenWidth * 0.008,
    fontFamily: fontFamily.appTextLight,
  },
  medicalIcon: {
    height: sizes.screenHeight * 0.03,
    width: sizes.screenHeight * 0.03,
  },
  justifyCenter: {justifyContent: 'space-between'},
  right: {
    alignSelf: 'flex-end',
    paddingRight: sizes.screenWidth * 0.08,
    paddingBottom: sizes.baseMargin,
  },
  bottom: {
    paddingBottom: sizes.screenWidth * 0.25,
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
    width: sizes.screenWidth * 0.89,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView1: {
    borderWidth: 1,
    borderColor: colors.white,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.89,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noBtn: {
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.025,
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
  bottomIOS: {
    paddingBottom: sizes.screenHeight * 0.05,
  },
  contactLeft: {
    left: sizes.screenWidth * 0.05,
    fontSize: fontSize.medium,
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
  },
});
