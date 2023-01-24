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
  cardText: {
    width: sizes.screenWidth * 0.42,
    color: colors.primary,
    fontFamily: fontFamily.appTextRegular,

  },
  card: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.03,
    marginBottom: sizes.TinyMargin,
    borderTopWidth: 1,
    borderColor: colors.disabledBg,
  },
  width: {
    width: sizes.screenWidth * 0.8,
  },
  head: {
    color: colors.primary,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextHeading,
  },
  text: {
    top: sizes.TinyMargin,
    fontSize: fontSize.h6,
    color: colors.secondary,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextHeading,
  },
});
