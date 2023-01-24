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
  image: {
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.27,
    alignSelf: 'center',
    borderRadius: sizes.cardRadius,
  },
  heading: {
    color: colors.primary,
    fontSize: fontSize.h5,
    fontWeight: '500',
    fontFamily: fontFamily.appTextMedium,
  },
  heading2: {
    color: colors.primary,
    fontSize: fontSize.medium,
    fontWeight: '500',
    fontFamily: fontFamily.appTextMedium,
  },
  textColor: {
    color: colors.primary,
    fontWeight: '300',
    fontFamily: fontFamily.appTextLight,
    lineHeight: 20,
  },
  paddingBottom: {
    paddingBottom: sizes.screenHeight * 0.1,
  },
  paddingTop: {
    paddingTop: sizes.screenHeight * 0.05,
  },
  paddingTop2: {
    paddingTop: sizes.screenHeight * 0.02,
  },
});
