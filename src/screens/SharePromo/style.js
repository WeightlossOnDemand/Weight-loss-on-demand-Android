import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  userView: {
    backgroundColor: colors.secondary,
    paddingBottom: sizes.screenHeight * 0.03,
  },
  btnText: {
    fontSize: fontSize.medium,
    color: colors.white,
    fontFamily: fontFamily.appTextLight,
  },
  code: {
    fontSize: fontSize.h5,
    color: colors.white,
    fontWeight: '400',
    fontFamily: fontFamily.appTextRegular,
  },
  padding: {
    padding: sizes.baseMargin,
  },
  shareText: {
    fontSize: fontSize.h6,
    fontWeight: '700',
    color: colors.lightGray2,
    fontFamily: fontFamily.appTextLight,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: sizes.screenHeight * 0.08,
    width: sizes.screenWidth * 0.18,
  },
  iconText: {
    textAlign: 'center',
    fontSize: fontSize.small,
    color: colors.primary,
    top: 5,
    fontFamily: fontFamily.appTextRegular,
  },
  gmailView: {justifyContent: 'space-around', paddingTop: 0},
  playIcon: {left: sizes.TinyMargin},
  mailRight: {right: sizes.TinyMargin},
  around: {justifyContent: 'space-around'},
  alignCenter: {alignItems: 'center'},
  width: {
    width: sizes.screenWidth * 0.4,
  },
  buttonView: {
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextHeading,
    fontWeight: '600',
  },
});
