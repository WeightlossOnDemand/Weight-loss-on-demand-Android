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
  userView: {
    backgroundColor: colors.secondary,
    // paddingBottom: sizes.screenHeight * 0.02,
  },
  cancel: {
    color: colors.white,
    fontFamily: fontFamily.appTextMedium,
    alignSelf: 'flex-end',
  },
  findingText: {
    textAlign: 'center',
    fontFamily: fontFamily.appTextLight,
    color: colors.white,
  },
  bold: {
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: colors.white,
    height: sizes.screenHeight * 0.25,
    padding: sizes.screenHeight * 0.03,
    marginBottom: sizes.TinyMargin,
    width: sizes.screenWidth * 0.9,
    borderRadius: sizes.screenWidth * 0.02,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    width: sizes.screenWidth * 0.8,
    color: colors.primary,
    fontSize: fontSize.h6,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextHeading,
    left: sizes.screenWidth * 0.05,
  },
  faqText: {
    color: colors.primary,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextLight,
    fontWeight: '600',
    width: sizes.screenWidth * 0.6,
    left: sizes.screenWidth * 0.05,
    paddingTop: sizes.TinyMargin,
  },
  paddingTop: {
    marginTop: sizes.screenHeight * 0.02,
  },
  spinner: {
    alignSelf: 'center',
  },
});
