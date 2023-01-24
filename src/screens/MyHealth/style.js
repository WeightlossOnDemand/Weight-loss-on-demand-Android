import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  color: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settingIcon: {
    height: sizes.screenHeight * 0.09,
    width: sizes.screenWidth * 0.1,
  },
  heading: {
    fontSize: fontSize.h4,
    fontWeight: 'bold',
    color: colors.primary,
    fontFamily: fontFamily.appTextHeading,
    bottom: sizes.screenHeight * 0.009,
  },
  padding: {
    padding: sizes.baseMargin,
  },
  card: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.01,
    marginBottom: sizes.TinyMargin,
    alignSelf: 'center',
    width: sizes.screenWidth * 0.9,
    borderWidth: 1,
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
    left: sizes.screenWidth * 0.03,
    fontFamily: fontFamily.appTextRegular,
    width: sizes.screenWidth * 0.5,
  },
  symbol: {
    color: colors.secondary,
    fontSize: 20,
    bottom: 1,
    paddingRight: sizes.TinyMargin,
  },
});
