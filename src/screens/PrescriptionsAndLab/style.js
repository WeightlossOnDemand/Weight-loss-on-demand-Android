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
  padding2: {
    padding: sizes.baseMargin,
    paddingBottom: 0,
  },
  coloredView: {
    backgroundColor: colors.secondary,
    paddingBottom: sizes.screenHeight * 0.02,
  },
  heading: {
    color: colors.white,
    fontSize: fontSize.h5,
    fontWeight: '300',
    width: sizes.screenWidth * 0.4,
  },
  paddingTop: {
    paddingTop: sizes.baseMargin,
  },
  text: {
    color: colors.primary,
    lineHeight: 20,
    fontSize: fontSize.medium,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tinyPadding: {
    paddingLeft: sizes.baseMargin,
    paddingRight: sizes.baseMargin,
    paddingBottom: sizes.TinyMargin,
  },
  right: {
    right: sizes.TinyMargin,
  },
  bold: {
    fontWeight: 'bold',
  },
  bottom: {
    paddingBottom:sizes.screenHeight * 0.15

  },
});
