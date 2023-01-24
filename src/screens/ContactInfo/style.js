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
    fontFamily: fontFamily.appTextHeading,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  symbol: {
    color: colors.secondary,
    fontSize: fontSize.h4,
    bottom: 1,
  },
  cardText: {
    width: sizes.screenWidth * 0.42,
    color: colors.primary,
    fontFamily: fontFamily.appTextCondensed,
  },
  card: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.03,
    marginBottom: sizes.TinyMargin,
  },
  head: {
    color: colors.primary,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextHeading,
  },
  text: {
    top: sizes.TinyMargin,
    fontSize: fontSize.h6,
    color: colors.black,
    fontFamily: fontFamily.appTextLight,
  },
  width: {
    // backgroundColor:'red',
    width: sizes.screenWidth * 0.8,
  },
});
