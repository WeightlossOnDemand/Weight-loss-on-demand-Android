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
  addPaymentText: {
    fontSize: fontSize.h4,
    fontWeight: 'bold',
    color: colors.primary,
    fontFamily: fontFamily.appTextHeading,
    width: sizes.screenWidth * 0.8,
  },
  paddingTop: {
    paddingTop: sizes.screenHeight * 0.03,
  },
  text: {
    color: colors.primary,
    fontFamily: fontFamily.appTextLight,
    fontSize: fontSize.medium,
  },
  lisbutton: {
    width: sizes.screenWidth * 0.8,
    height: sizes.screenHeight * 0.07,
    backgroundColor: colors.white,
    marginBottom: sizes.screenHeight * 0.01,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.screenWidth * 0.2,
    shadowColor: '#000',
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 5,
  },
  text2: {
    fontSize: fontSize.large,
    color: colors.secondary,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextRegular,
  },
});
