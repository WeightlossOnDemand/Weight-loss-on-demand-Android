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
  text: {
    color: colors.primary,
    fontSize: fontSize.medium,
    width: sizes.screenWidth * 0.83,
    fontFamily: fontFamily.appTextRegular,
  },
  medicalText: {
    fontSize: fontSize.h6,
    color: colors.black,
    fontFamily: fontFamily.appTextLight,
  },
  medicalText2: {
    fontSize: fontSize.h6,
    color: colors.black,
    width: sizes.screenWidth * 0.7,
    fontFamily: fontFamily.appTextLight,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  top: {
    paddingTop: sizes.screenHeight * 0.05,
    paddingLeft: sizes.TinyMargin,
  },
  head: {
    color: colors.primary,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextHeading,
  },
  card: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.01,
    paddingLeft: sizes.screenHeight * 0.03,
    paddingRight: sizes.screenHeight * 0.03,
    // marginBottom: sizes.TinyMargin,
  },
  symbol: {
    color: colors.secondary,
    fontSize: fontSize.h4,
    bottom: 1,
  },
  cardText: {
    color: colors.primary,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextRegular,
  },
});
