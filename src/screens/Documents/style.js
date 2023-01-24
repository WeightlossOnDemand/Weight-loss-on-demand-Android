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
    paddingTop: sizes.screenHeight * 0.01,
  },
  paddingTop2: {
    paddingTop: sizes.screenHeight * 0.03,
  },
  text2: {
    fontFamily: fontFamily.appTextLight,
    color: colors.disabledBg2,
    fontSize: fontSize.medium,
    width: sizes.screenWidth * 0.5,
    textAlign: 'center',
  },
  buttonView: {
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextHeading,
    fontWeight: '600',
  },
});
