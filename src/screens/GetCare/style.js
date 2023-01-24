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
    fontSize: fontSize.h4,
    fontWeight: 'bold',
    color: colors.primary,
    fontFamily: fontFamily.appTextHeading,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  symbol: {
    color: colors.secondary,
    fontSize: fontSize.h4,
    bottom: 1,
  },
  cardText: {
    width: sizes.screenWidth * 0.55,
    color: colors.secondary,
    fontSize: fontSize.h6,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextHeading,
    paddingLeft: sizes.screenWidth * 0.02,
  },
  card: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.015,
    width: sizes.screenWidth * 0.9,
    borderRadius: sizes.screenWidth * 0.02,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: colors.primary,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextLight,
    fontWeight: '600',
    paddingLeft: sizes.screenWidth * 0.02,
    paddingTop: sizes.screenHeight * 0.006,
  },
  bold: {
    fontWeight: '700',
  },
  icon: {
    height: sizes.screenHeight * 0.048,
    width: sizes.screenWidth * 0.12,
    left: sizes.screenWidth * 0.02,
  },
  iconIOS:{
    height: sizes.screenHeight * 0.048,
    width: sizes.screenWidth * 0.14,
    left: sizes.screenWidth * 0.02,
  },
  icon2: {
    height: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.1,
    left: sizes.screenWidth * 0.02,
  },
  icon2IOS:{
    height: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.12,
    left: sizes.screenWidth * 0.02,
  },
  providerText: {
    color: colors.disabledBg2,
    fontFamily: fontFamily.appTextLight,
    paddingLeft: sizes.screenWidth * 0.02,
    paddingTop: sizes.screenHeight * 0.003,
  },
});
