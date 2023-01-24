import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  color: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
  },
  contentView: {
    alignItems: 'center',
    paddingTop: sizes.screenHeight * 0.25,
  },
  text: {
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextRegular,
    color: colors.disabledBg2,
  },
  paddingTop: {
    paddingTop: sizes.screenHeight * 0.02,
  },
  paddingTop2: {
    paddingTop: sizes.screenHeight * 0.03,
  },
  text2: {
    fontFamily: fontFamily.appTextLight,
    color: colors.disabledBg2,
    fontSize: fontSize.medium,
    width: sizes.screenWidth * 0.7,
    textAlign: 'center',
  },
  icon: {
    height: sizes.screenHeight * 0.15,
    width: sizes.screenWidth * 0.2,
  },
});
