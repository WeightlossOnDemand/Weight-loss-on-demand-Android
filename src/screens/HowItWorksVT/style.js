import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  color: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
  },
  bottom:{
    paddingBottom:sizes.screenHeight*0.04,
  },
  icon: {
    height: sizes.screenHeight * 0.08,
    width: sizes.screenWidth * 0.5,
  },
  padding: {
    padding: sizes.baseMargin,
  },
  heading: {
    fontSize: fontSize.h5,
    fontWeight: 'bold',
    color: colors.primary,
  },
  paddingTop: {
    paddingTop: sizes.screenHeight * 0.02,
  },
  bold: {fontWeight: 'bold'},
  textColor: {
    color: colors.black,
    fontSize: fontSize.medium,
  },
  subHeading: {
    color: colors.black,
    fontSize: fontSize.large,
  },
  italic: {
    fontStyle: 'italic',
  },
  bottomIOS: {
    paddingBottom: sizes.screenHeight * 0.1,
  },
});
