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
  card: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.03,
    marginBottom: sizes.TinyMargin,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  symbol: {
    color: colors.secondary,
    fontSize: fontSize.h4,
    left: sizes.screenWidth * 0.3,
    bottom: 1,
  },

  cardText: {
    width: sizes.screenWidth * 0.42,
    color: colors.primary,
    fontFamily: fontFamily.appTextRegular,
  },
  text: {
    color: colors.primary,
    fontFamily: fontFamily.appTextLight,
    fontSize: fontSize.medium,
  },
  link: {
    color: colors.secondary,
    fontFamily: fontFamily.appTextRegular,
  },
  bold: {
    fontWeight: '500',
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
    width: sizes.screenWidth * 0.9,
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
    alignSelf:'center'
  },
  paddingTop:{
    paddingTop:sizes.screenHeight * 0.03
  }
});
