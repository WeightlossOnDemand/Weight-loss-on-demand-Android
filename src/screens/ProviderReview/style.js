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
  userView: {
    backgroundColor: colors.secondary,
    paddingBottom: sizes.screenHeight * 0.09,
  },
  cancel: {
    color: colors.white,
    fontFamily: fontFamily.appTextMedium,
    alignSelf: 'flex-end',
  },
  findingText: {
    textAlign: 'center',
    fontFamily: fontFamily.appTextLight,
    color: colors.white,
  },
  bold: {
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  paddingTop: {
    marginTop: sizes.screenHeight * 0.02,
  },
  imageView: {
    position: 'absolute',
    alignSelf: 'center',
    // left: sizes.screenWidth * 0.35,
    top: sizes.screenHeight * 0.19,
  },
  docImg: {
    height: sizes.screenHeight * 0.17,
    width: sizes.screenWidth * 0.32,
    borderRadius:sizes.screenWidth*0.5
  },
  docImgIOS:{
    height: sizes.screenHeight * 0.15,
    width: sizes.screenWidth * 0.33,
    alignSelf: 'center',
    borderRadius:sizes.screenWidth*0.5
  },
  info: {
    top: sizes.screenHeight * 0.1,
    alignSelf: 'center',
  },
  head: {
    color: colors.primary,
    fontFamily: fontFamily.appTextMedium,
    fontSize: fontSize.h6,
    paddingBottom: sizes.TinyMargin,
  },
  text: {
    textAlign: 'center',
    fontFamily: fontFamily.appTextLight,
    color: colors.disabledIcon,
  },
  top: {
    top: sizes.screenHeight * 0.48,
  },
  spinner: {
    alignSelf: 'center',
  },
});
