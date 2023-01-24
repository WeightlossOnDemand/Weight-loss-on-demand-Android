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
  head: {
    fontFamily: fontFamily.appTextMedium,
    color: colors.disabledBg2,
    fontSize: fontSize.medium,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  symbol: {
    color: colors.secondary,
    fontSize: fontSize.h4,
    bottom: 1,
  },
  cardText: {
    width: sizes.screenWidth * 0.42,
    color: colors.primary,
    fontFamily: fontFamily.appTextCondensed,
  },
  card: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.02,
    marginBottom: sizes.TinyMargin,
  },
  head2: {
    color: colors.primary,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextHeading,
    left: sizes.screenWidth * 0.1,
  },
  text: {
    top: sizes.TinyMargin,
    fontSize: fontSize.smallM,
    color: colors.disabledBg2,
    fontFamily: fontFamily.appTextLight,
    // alignSelf:'center'
    left: sizes.screenWidth * 0.1,
  },
  width: {
    // backgroundColor:'red',
    width: sizes.screenWidth * 0.85,
    // alignItems:'center'
  },
});
