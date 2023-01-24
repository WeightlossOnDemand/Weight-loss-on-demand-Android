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
  smallText: {
    fontFamily: fontFamily.appTextLight,
    fontSize: fontSize.medium,
    color: colors.disabledBg2,
  },
  paddingTop: {
    paddingTop: sizes.screenHeight * 0.03,
  },
  text: {
    color: colors.primary,
    fontFamily: fontFamily.appTextLight,
    fontSize: fontSize.medium,
  },
});
