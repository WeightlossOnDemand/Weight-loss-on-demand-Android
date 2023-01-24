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
    paddingTop: sizes.screenHeight * 0.45,
  },
  text: {
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextRegular,
    color: colors.disabledBg2,
  },
  card: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.01,
    marginBottom: sizes.TinyMargin,
    alignSelf: 'center',
    width: sizes.screenWidth * 0.99,
    borderBottomWidth: 1,
    borderColor: colors.disabledBg,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  icon: {height: sizes.icons.large, width: sizes.icons.large},

  cardText: {
    color: colors.primary,
    fontSize: fontSize.medium,
    // left: sizes.screenWidth * 0.03,
    fontFamily: fontFamily.appTextRegular,
    width: sizes.screenWidth * 0.65,
    paddingBottom: sizes.TinyMargin,
    // fontWeight: 'bold',
  },
  symbol: {
    color: colors.secondary,
    fontSize: 20,
    top: sizes.TinyMargin,
    // paddingRight: sizes.TinyMargin,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  marginTop: {
    marginTop: sizes.screenHeight * 0.02,
  },
  left: {
    paddingLeft: sizes.baseMargin,
  },
  top: {
    top: sizes.TinyMargin,
  },
  head: {
    color: colors.primary,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextLight,
    fontSize: fontSize.medium,
    paddingBottom: sizes.screenHeight * 0.02,
  },
  providerImg: {
    height: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.1,
    top: sizes.screenHeight * 0.01,
  },
  date: {
    color: colors.disabledBg2,
    paddingLeft: sizes.screenWidth * 0.08,
    width: sizes.screenWidth * 0.58,
    bottom: sizes.TinyMargin,
  },
  paddingBottom: {
    paddingBottom: sizes.screenHeight * 0.1,
  },
});
