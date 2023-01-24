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
    paddingBottom: sizes.screenHeight * 0.13,
  },
  paddingBottom2: {
    paddingBottom: sizes.screenHeight * 0.02,
  },
  paddingTop: {
    paddingTop: sizes.screenHeight * 0.02,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    // justifyContent: 'space-around',
  },
  text: {
    color: colors.primary,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextLight,
    width: sizes.screenWidth * 0.85,
    top: 2,
    lineHeight: 20,
  },
  paddingTop2: {
    paddingTop: sizes.screenHeight * 0.005,
  },
  bottomIOS: {
    paddingBottom: sizes.screenHeight * 0.15,
  },
});
