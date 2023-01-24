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
  width: {
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.02,
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
    marginTop: sizes.screenHeight * 0.05,
  },
  redText: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  text: {
    color: colors.primary,
    fontSize: fontSize.medium,
  },
  icon: {
    top: sizes.screenHeight * 0.01,
  },
  stateView: {
    width: sizes.screenWidth * 0.3,
    // alignSelf:'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  zipView: {
    width: sizes.screenWidth * 0.5,
  },
  dropdown: {
    position: 'absolute',
    zIndex: 9,
    height: sizes.screenHeight * 0.5,
    width: sizes.screenWidth * 0.25,
    backgroundColor: colors.white,
    marginTop: sizes.screenHeight * 0.012,
    marginRight: sizes.screenWidth * 0.02,
    marginLeft: sizes.screenWidth * 0.04,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  listText: {
    padding: sizes.TinyMargin,
    paddingBottom: sizes.screenHeight * 0.02,
    fontSize: fontSize.h6,
    color: colors.primary,
    fontFamily: fontFamily.appTextRegular,
  },
});
