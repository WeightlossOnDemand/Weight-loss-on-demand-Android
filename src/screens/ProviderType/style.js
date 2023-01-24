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
    left: sizes.screenWidth * 0.01,
  },
  text: {
    fontFamily: fontFamily.appTextMedium,
    color: colors.primary,
    left: sizes.screenWidth * 0.01,
  },
  paddingTop: {
    paddingTop: sizes.screenHeight * 0.02,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  symbol: {
    color: colors.secondary,
    fontSize: fontSize.h4,
    bottom: 1,
  },
  cardText: {
    width: sizes.screenWidth * 0.55,
    color: colors.primary,
    fontSize: fontSize.h6,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextHeading,
    paddingLeft: sizes.screenWidth * 0.02,
  },
  text2: {
    color: colors.primary,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextLight,
    fontWeight: '600',
    paddingLeft: sizes.screenWidth * 0.02,
    paddingTop: sizes.screenHeight * 0.006,
    width: sizes.screenWidth * 0.6,
  },
  providerText: {
    color: colors.disabledBg2,
    fontFamily: fontFamily.appTextLight,
    paddingLeft: sizes.screenWidth * 0.02,
  },
  paddingTop2: {
    paddingTop: sizes.screenHeight * 0.01,
  },
  paddingTop3: {
    paddingTop: sizes.screenHeight * 0.03,
  },
  redText: {
    color: colors.secondary,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: fontSize.h6,
  },
  footerText: {
    color: colors.disabledBg2,
    fontSize: fontSize.smallM,
    width: sizes.screenWidth * 0.8,
  },
  icon: {
    height: sizes.screenHeight * 0.04,
    width: sizes.screenWidth * 0.12,
  },
  row2: {
    flexDirection: 'row',
    padding: sizes.screenWidth * 0.02,
    paddingTop: sizes.screenHeight * 0.05,
  },
  btnTop: {
    paddingTop: sizes.screenHeight * 0.05,
  },
});
