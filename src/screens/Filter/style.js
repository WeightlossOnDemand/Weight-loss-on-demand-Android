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
  paddingTop: {
    paddingTop: sizes.screenHeight * 0.03,
  },
  text: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: fontSize.medium,
    color: colors.disabledBg2,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    padding: sizes.TinyMargin,
    height: sizes.screenHeight * 0.045,
    width: sizes.screenWidth * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.disabledBg,
    borderRadius: sizes.TinyMargin,
  },
  selected: {
    borderColor: colors.secondary,
    borderWidth: 2,
    borderRadius: sizes.TinyMargin,
  },
  text2: {
    color: colors.primary,
    fontFamily: fontFamily.appTextLight,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.01,
    marginBottom: sizes.TinyMargin,
    alignSelf: 'center',
    width: sizes.screenWidth,
    borderWidth: 1,
    borderColor: colors.disabledBg,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  cardText: {
    color: colors.primary,
    fontSize: fontSize.h6,
    paddingLeft: sizes.baseMargin,
    fontFamily: fontFamily.appTextLight,
  },
  symbol: {
    color: colors.secondary,
    fontSize: fontSize.h4,
    bottom: 1,
    paddingRight: sizes.screenWidth * 0.02,
  },
  italic: {
    fontStyle: 'italic',
    color: colors.disabledBg2,
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
    fontFamily: fontFamily.appTextHeading,
    fontWeight: '600',
  },
  redBtn: {
    color: colors.secondary,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextHeading,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paddingTop2:{
    paddingTop:sizes.screenHeight * 0.02
  }
});
