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
    left: sizes.TinyMargin,
  },
  padding: {
    padding: sizes.TinyMargin,
  },
  text: {
    color: colors.black,
    fontSize: fontSize.h6,
    width: sizes.screenWidth * 0.8,
    left: sizes.TinyMargin,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardText: {
    width: sizes.screenWidth * 0.6,
    color: colors.primary,
    fontSize: fontSize.h5,
    fontWeight: 'bold',
    paddingBottom: sizes.baseMargin,
    right: sizes.screenWidth * 0.05,
    fontFamily: fontFamily.appTextRegular,

  },
  card: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.02,
    marginBottom: sizes.TinyMargin,
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
  minsText: {
    color: colors.primary,
    fontSize: fontSize.h6,
    right: sizes.screenWidth * 0.04,
    width: sizes.screenWidth * 0.5,
    lineHeight: 30,
  },
  priceText: {
    color: colors.primary,
    fontSize: fontSize.h5,
    fontWeight: 'bold',
    left: sizes.screenWidth * 0.1,
    lineHeight: 30,
  },
  buttonView: {
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
  },
  top: {
    paddingBottom:sizes.screenHeight * 0.035,
    marginTop: sizes.screenHeight * 0.035,
  },
  learnMoreBtn: {
    marginTop: sizes.screenHeight * 0.02,
    alignItems: 'center',
  },
  learnMoreText: {
    fontSize: fontSize.h6,
    fontWeight: '500',
    color: colors.secondary,
  },
});
