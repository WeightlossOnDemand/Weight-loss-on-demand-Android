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
    fontFamily: fontFamily.appTextHeading,
  },
  field: {
    backgroundColor: colors.lightGray,
    fontSize: fontSize.large,
    fontFamily: fontFamily.appTextRegular,
  },
  width:{
    width:sizes.screenWidth * 0.9,
    alignSelf:'center',
    marginBottom:sizes.screenHeight * 0.02
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
  top: {
    marginTop: sizes.screenHeight * 0.04,
  },
  redText:{
    color:colors.secondary,
    fontWeight:'700',
    fontFamily: fontFamily.appTextLight,

  },
  text:{
    color:colors.primary,
    fontSize:fontSize.medium,
    left:sizes.screenWidth * 0.02,
    fontWeight:'600',
    fontFamily: fontFamily.appTextLight,
  }
});
