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
    fontSize: fontSize.h5,
    fontWeight: 'bold',
    color: colors.primary,
    fontFamily: fontFamily.appTextHeading,
  },

  field: {
    backgroundColor: colors.lightGray,
    fontSize: fontSize.extraLarge,
    fontFamily: fontFamily.appTextRegular,
  },
  width: {
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.02,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  stateView: {
    width: sizes.screenWidth * 0.3,
    // alignSelf:'center'
  },
  zipView: {
    width: sizes.screenWidth * 0.5,
  },
  marginLeft: {
    marginLeft: sizes.screenWidth * 0.05,
  },
  marginTop: {
    marginTop: sizes.screenHeight * 0.02,
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
    marginTop: sizes.screenHeight * 0.02,
  },
  text: {
    color: colors.primary,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextLight,
  },
  bold: {
    fontWeight: 'bold',
    fontFamily:fontFamily.appTextLight
  },
  listText: {
    padding: sizes.TinyMargin,
    paddingBottom: sizes.screenHeight * 0.02,
    fontSize: fontSize.h6,
    color: colors.primary,
    fontFamily:fontFamily.appTextRegular
  },
  cardView: {
    position: 'absolute',
    zIndex: 9,
    height: sizes.screenHeight * 0.13,
    width: sizes.screenWidth * 0.9,
    backgroundColor: colors.white,
    top: sizes.screenHeight * 0.11,
    marginRight: sizes.screenWidth * 0.02,
    marginLeft: sizes.screenWidth * 0.05,
    borderRadius: sizes.TinyMargin,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
});
