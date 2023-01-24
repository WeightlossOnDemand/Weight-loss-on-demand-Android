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
  userView: {
    backgroundColor: colors.secondary,
    paddingBottom: sizes.screenHeight * 0.02,
  },
  text: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextLight,
  },
  padding2: {
    paddingTop: sizes.screenHeight * 0.01,
    paddingLeft: sizes.baseMargin,
  },
  heading: {
    color: colors.white,
    fontSize: fontSize.h5,
    fontFamily: fontFamily.appTextMedium,
  },
  head2: {
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextMedium,
    color: colors.primary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row2: {
    left: sizes.TinyMargin,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  card: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.01,
    alignSelf: 'center',
    width: sizes.screenWidth,
    paddingBottom: sizes.screenHeight * 0.015,
  },
  borderTop: {
    borderTopWidth: 0.3,
    borderColor: colors.disabledBg,
  },
  borderBottom: {
    borderBottomWidth: 0.6,
    borderColor: colors.disabledBg,
  },
  cardText: {
    color: colors.primary,
    fontSize: fontSize.medium,
    left: sizes.screenWidth * 0.03,
    fontFamily: fontFamily.appTextLight,
    width: sizes.screenWidth * 0.5,
  },
  symbol: {
    color: colors.secondary,
    fontSize: 20,
    bottom: 1,
    paddingRight: sizes.TinyMargin,
  },
  addPaymentText: {
    color: colors.disabledBg2,
    fontFamily: fontFamily.appTextLight,
    left: sizes.screenWidth * 0.015,
  },
  size: {
    fontSize: fontSize.medium,
  },
  checkText: {
    color: colors.primary,
    fontFamily: fontFamily.appTextLight,
    left: sizes.screenWidth * 0.03,
  },
  icon: {
    left: sizes.screenWidth * 0.02,
  },
  buttonView: {
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.93,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  disabledBtn:{
    backgroundColor: colors.disabledBg,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.93,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextHeading,
    fontWeight: '600',
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
    paddingTop: sizes.screenHeight * 0.02,
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
  noBtn: {
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.025,
  },
  buttonView2: {
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.89,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonView1: {
    borderWidth: 1,
    borderColor: colors.white,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.89,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenIcon: {
    height: sizes.screenHeight * 0.1,
    width: sizes.screenWidth * 0.2,
  },
  paddingTop: {
    paddingTop: sizes.screenHeight * 0.02,
  },
  text2: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextLight,
    width: sizes.screenWidth * 0.85,
    top: 2,
    lineHeight: 20,
    right: sizes.TinyMargin,
  },
  color2: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
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
