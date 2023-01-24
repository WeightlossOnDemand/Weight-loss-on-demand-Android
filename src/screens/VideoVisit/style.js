import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  color: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
  },
  image: {
    width: sizes.screenWidth * 0.92,
    height: sizes.screenHeight * 0.3,
    alignSelf: 'center',
    borderRadius: sizes.cardRadius,
  },
  padding: {
    padding: sizes.baseMargin,
  },
  heading: {
    color: colors.primary,
    fontSize: fontSize.h5,
    fontWeight: '500',
    fontFamily: fontFamily.appTextHeading,
  },
  textColor: {
    color: colors.primary,
    fontWeight: '300',
    fontFamily: fontFamily.appTextLight,
  },
  subHeading: {
    color: colors.primary,
    fontSize: fontSize.medium,
    fontWeight: '500',
    fontFamily: fontFamily.appTextHeading,
  },
  paddingBottom: {
    paddingBottom: sizes.screenHeight * 0.03,
  },
  bottomIOS: {
    paddingBottom: sizes.screenHeight * 0.05,
  },
});

