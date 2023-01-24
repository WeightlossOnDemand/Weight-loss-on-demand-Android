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
  text: {
    color: colors.primary,
    fontFamily: fontFamily.appTextLight,
    fontSize: fontSize.h5,
    fontWeight: '900',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingTop: sizes.screenHeight * 0.03,
  },
  text2: {
    color: colors.black,
    fontFamily: fontFamily.appTextLight,
    fontSize: fontSize.h6,
    fontWeight: '800',
    left: sizes.screenWidth * 0.02,
  },
  field: {
    backgroundColor: colors.lightGray,
    fontSize: fontSize.large,
    fontFamily: fontFamily.appTextRegular,
  },
  width: {
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    paddingTop: sizes.screenHeight * 0.04,
  },
  paddingTop: {
    paddingTop: sizes.screenHeight * 0.04,
  },
  buttonView: {
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextHeading,
    fontWeight: '600',
  },
  modalView: {
    width: sizes.screenWidth,
    backgroundColor: '#0e0e0e',
    opacity: 0.9,
    marginLeft: sizes.screenWidth * 0.001,
    padding: 10,
    position: 'absolute',
    top: -20,
    height: sizes.screenHeight,
  },
  texcon: {
    paddingBottom: sizes.screenHeight * 0.1,
  },
  texcon1: {
    bottom: sizes.screenHeight * 0.08,
  },
  text111: {
    fontSize: fontSize.h4,
    color: colors.white,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextHeading,
    paddingLeft: sizes.screenWidth * 0.035,
  },
  text1: {
    fontSize: fontSize.large,
    color: colors.white,
    fontFamily: fontFamily.appTextLight,
    paddingLeft: sizes.screenWidth * 0.035,
  },

  link: {
    color: colors.modalLink,
    textDecorationLine: 'underline',
    fontFamily: fontFamily.appTextMedium,
  },

  codeFieldRoot: {marginTop: sizes.screenHeight * 0.05},
  cell: {
    width: sizes.screenWidth * 0.08,
    height: sizes.screenHeight * 0.06,
    fontSize: fontSize.large,
    borderBottomWidth: 1,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
  ro: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: sizes.screenWidth * 0.01,
  },
  lstyle: {
    fontSize: fontSize.h6,
    color: colors.black,
    fontWeight: '400',
    lineHeight: sizes.screenHeight * 0.05,
    fontFamily: fontFamily.appTextMedium,
    left: sizes.screenWidth * 0.02,
  },
  disabledView: {
    alignSelf: 'center',
    backgroundColor: colors.disabledBg,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.92,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gcon: {
    paddingTop: sizes.screenHeight * 0.04,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rate: {
    fontSize: fontSize.h5,
    fontFamily: fontFamily.appTextRegular,
    color: colors.primary,
    right: sizes.screenWidth * 0.01,
  },
  rating: {
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextRegular,
    color: colors.primary,
    fontWeight: 'bold',
  },
  left: {
    left: sizes.screenWidth * 0.03,
    bottom: 2,
  },
  leftIOS: {
    left: sizes.screenWidth * 0.01,
  },
  sliderWidth: {
    width: sizes.screenWidth * 0.8,
  },
  bottom2: {paddingBottom: sizes.screenHeight * 0.15},
  rateText: {
    color: colors.black,
    alignSelf: 'center',
    top: sizes.screenHeight * 0.03,
  },
  field2: {
    backgroundColor: colors.lightGray,
    fontSize: fontSize.large,
    fontFamily: fontFamily.appTextRegular,
    width: sizes.screenWidth * 0.4,
  },
});
