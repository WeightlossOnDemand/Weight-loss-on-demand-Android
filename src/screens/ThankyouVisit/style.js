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
  skipBtn: {
    alignSelf: 'flex-end',
  },
  skipText: {
    fontFamily: fontFamily.appTextLight,
    color: colors.primary,
    fontSize: fontSize.h6,
  },
  providerTitle: {
    paddingTop: sizes.screenHeight * 0.01,
    fontSize: fontSize.h5,
    alignSelf: 'center',
    color: colors.primary,
    fontFamily: fontFamily.appTextMedium,
  },
  text: {
    textAlign: 'center',
    color: colors.primary,
    fontFamily: fontFamily.appTextLight,
    fontSize: fontSize.medium,
  },
  headerView: {
    alignSelf: 'center',
    paddingTop: sizes.baseMargin,
  },
  health: {
    fontFamily: fontFamily.appTextMedium,
    color: colors.disabledBg2,
  },
  visitHistory: {
    color: colors.secondary,
    fontFamily: fontFamily.appTextMedium,
  },
  borderView: {
    borderBottomWidth: 1,
    borderBottomColor: colors.disabledBg,
    width: sizes.screenWidth,
    // alignSelf:'center'
    marginTop: sizes.screenHeight * 0.04,
    right: sizes.screenWidth * 0.03,
  },
  inviteView: {
    paddingLeft: sizes.TinyMargin,
    paddingTop: sizes.screenHeight * 0.03,
    top: 10,
  },
  inviteText: {
    color: colors.primary,
    fontFamily: fontFamily.appTextMedium,
    fontSize: fontSize.medium,
  },
  list: {
    color: colors.primary,
    fontFamily: fontFamily.appTextLight,
    width: sizes.screenWidth * 0.4,
    left: 20,
  },
  textList: {
    left: -sizes.screenWidth * 0.008,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    right: sizes.screenWidth * 0.05,
    paddingTop: sizes.screenHeight * 0.02,
    paddingBottom: sizes.screenHeight * 0.01,
  },
  row2:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: sizes.screenHeight * 0.04,
    left: sizes.screenWidth * 0.01,
    width: sizes.screenWidth * 0.15,
  },
  icon2: {
    height: sizes.screenHeight * 0.036,
    width: sizes.screenWidth * 0.11,
    left: sizes.screenWidth * 0.03,
  },
  bottom: {
    bottom: sizes.screenHeight * 0.03,
  },
});
