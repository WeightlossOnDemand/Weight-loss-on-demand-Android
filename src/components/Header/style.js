import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  headerView: {
    padding: sizes.screenHeight * 0.02,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    bottom: 0,
    zIndex: 0,
  },
  headerBg: {
    backgroundColor: colors.secondary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    bottom: 0,
    zIndex: 0,
  },
  leftIOS: {
    left: sizes.screenWidth * 0.28,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rows: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.white,
    left: sizes.screenWidth * 0.05,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextLight,
    fontWeight: 'bold',
  },
  leftsi: {
    left: sizes.screenWidth * 0.41,
  },
  leftsiIOS: {
    left: sizes.screenWidth * 0.35,
  },
  titleIOS: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextLight,
  },
  titleIOS2: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextLight,
    left: sizes.screenWidth * 0.29,
  },
  titleExit: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextLight,
    left: sizes.screenWidth * 0.29,
  },
  centerTitle: {
    color: colors.white,
    left: sizes.screenWidth * 0.2,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextLight,
  },
  title2: {
    color: colors.white,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextMedium,
    right: sizes.screenWidth * 0.05,
  },
  title2IOS: {
    color: colors.white,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextMedium,
    right: sizes.screenWidth * 0.15,
  },
  filter: {
    color: colors.secondary,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextMedium,
  },
  darkTitle: {
    color: colors.primary,
    left: sizes.screenWidth * 0.05,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextLight,
  },
  skipView: {
    left: sizes.screenHeight * 0.2,
  },
  filterView: {
    left: sizes.screenHeight * 0.25,
  },
  skipIcon: {left: sizes.screenWidth * 0.05},
  bold: {
    fontWeight: 'bold',
  },
  left: {
    right: sizes.screenWidth * 0.05,
  },
  card: {
    // zIndex: 1,
  },
  leftDone: {
    left: sizes.screenWidth * 0.19,
  },
  leftDone2: {
    left: sizes.screenWidth * 0.07,
  },
  thretee: {
    left: sizes.screenWidth * 0.23,
  },
  filterLeft: {
    left: sizes.screenWidth * 0.22,
  },
});
