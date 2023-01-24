import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  color: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
  },
  contentView: {
    padding: sizes.TinyMargin,
    paddingTop: sizes.screenHeight * 0.04,
  },
  text: {
    textAlign: 'center',
    color: colors.primary,
    fontFamily: fontFamily.appTextLight,
    fontSize: fontSize.h6,
  },
  btnText: {
    textAlign: 'center',
    color: colors.secondary,
    fontFamily: fontFamily.appTextMedium,
    fontSize: fontSize.h6,
  },
  paddingTop:{
    paddingTop:sizes.screenHeight * 0.03
  }
});
