import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  color: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
  },
  paddingLeft: {
    paddingLeft: sizes.baseMargin,
  },
  paddingBottom: {
    paddingBottom: sizes.baseMargin,
  },
  addPaymentText: {
    fontSize: fontSize.h4,
    fontWeight: 'bold',
    color: colors.primary,
  },
  contentView: {
    alignItems: 'center',
    top: sizes.screenHeight * 0.1,
    padding: sizes.baseMargin,
  },
  text: {
    color: colors.disabledText,
    fontSize: fontSize.h6,
    fontWeight: '500',
    top: sizes.screenHeight * 0.02,
    fontFamily: fontFamily.appTextRegular,

  },
  heading:{
    color: colors.disabledText,
    fontSize: fontSize.h5,
    fontWeight: '500',
    paddingTop:sizes.screenHeight * 0.02
  },
  buttonView: {
    alignSelf: 'center',
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.92,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextHeading,
    fontWeight: '600',
  },
  paddingTop: {
    paddingTop: sizes.screenHeight * 0.35,
    paddingBottom:sizes.screenHeight * 0.05

  },
  icon:{
    height:sizes.screenHeight * 0.3,
    width:sizes.screenWidth * 0.5
  }
});
