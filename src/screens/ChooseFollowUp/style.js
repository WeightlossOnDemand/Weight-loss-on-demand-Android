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
    paddingBottom: sizes.screenHeight * 0.06,
  },
  docImg: {
    height: sizes.screenHeight * 0.15,
    width: sizes.screenWidth * 0.3,
    left: sizes.screenWidth * 0.35,
  },
  imageView: {
    position: 'absolute',
    alignSelf: 'center',
    // left: sizes.screenWidth * 0.35,
    top: sizes.screenHeight * 0.06,
  },
  findingText: {
    textAlign: 'center',
    fontFamily: fontFamily.appTextLight,
    color: colors.white,
  },
  paddingTop: {
    marginTop: sizes.screenHeight * 0.02,
  },
  head: {
    fontFamily: fontFamily.appTextMedium,
    color: colors.primary,
    fontSize: fontSize.h6,
    alignSelf: 'center',
  },
  border: {
    top: sizes.screenHeight * 0.02,
    borderBottomWidth: 1,
    borderBottomColor: colors.disabledBg,
    width: sizes.screenWidth,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  symbol: {
    color: colors.secondary,
    fontSize: fontSize.h4,
    bottom: 1,
  },
  right:{
    right: sizes.screenWidth * 0.25,

  },
  left: {
    left: sizes.screenWidth * 0.25,
  },
  text: {
    textAlign: 'center',
    fontFamily: fontFamily.appTextLight,
    color: colors.primary,
  },
  noBtn: {
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.025,
    marginBottom: sizes.screenHeight * 0.012,
  },
  buttonView1: {
    borderWidth: 1,
    borderColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.85,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.secondary,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextHeading,
    fontWeight: '600',
  },
  text2: {
    color: colors.disabledBg2,
    fontFamily: fontFamily.appTextMedium,
    fontSize: fontSize.medium,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: colors.white,
    // padding: sizes.screenHeight * 0.007,
    // height:,
    // marginBottom: sizes.TinyMargin,
    alignSelf: 'center',
    width: sizes.screenWidth,
  },
  cardText: {
    color: colors.primary,
    fontSize: fontSize.h6,
    paddingLeft: sizes.baseMargin,
    fontFamily: fontFamily.appTextMedium,
  },
  symbol2: {
    color: colors.secondary,
    fontSize: fontSize.h4,
    bottom: 1,
    paddingRight: sizes.screenWidth * 0.02,
  },
  bottom: {
  },
});
