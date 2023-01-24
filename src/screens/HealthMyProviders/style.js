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
  head: {
    color: colors.disabledBg2,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextLight,
    fontSize: fontSize.medium,
  },
  paddingTop: {
    paddingTop: sizes.screenHeight * 0.03,
  },
  text: {
    color: colors.primary,
    fontFamily: fontFamily.appTextLight,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addBtn: {
    fontFamily: fontFamily.appTextMedium,
    color: colors.secondary,
  },
});
