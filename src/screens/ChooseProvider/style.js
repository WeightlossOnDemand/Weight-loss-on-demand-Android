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
  subHeading: {
    fontSize: fontSize.h4,
    fontWeight: 'bold',
    color: colors.black,
  },
  subHeadingIOS: {
    fontSize: fontSize.h5,
    fontWeight: 'bold',
    color: colors.black,
  },
  symbol: {
    color: colors.secondary,
    fontSize: fontSize.h3,
    bottom: 1,
    paddingRight: sizes.TinyMargin,
  },
  symbolIOS: {
    color: colors.secondary,
    fontSize: fontSize.h3,
    bottom: 1,
    right: sizes.screenWidth * 0.05,
  },
  cardText: {
    color: colors.primary,
    fontSize: fontSize.large,
    fontFamily: fontFamily.appTextLight,
    paddingTop: sizes.screenHeight * 0.02,
    paddingLeft: sizes.screenWidth * 0.04,
    lineHeight: sizes.screenHeight * 0.027,
  },
  cardTextIOS:{
    color: colors.primary,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextLight,
    paddingTop: sizes.screenHeight * 0.02,
    paddingLeft: sizes.screenWidth * 0.04,
    lineHeight: sizes.screenHeight * 0.027,
  },
  heading: {
    fontSize: fontSize.h6,
    color: colors.black,
    fontWeight: 'bold',
    paddingLeft: sizes.screenWidth * 0.05,
  },
  text: {
    fontSize: fontSize.medium,
    color: colors.disabledBg2,
    fontFamily: fontFamily.appTextLight,
    paddingLeft: sizes.screenWidth * 0.05,
  },
  img: {
    width: sizes.screenWidth * 0.2,
    height: sizes.screenHeight * 0.11,
  },
  rowinner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.0,
    paddingLeft: sizes.screenWidth * 0.03,
    // justifyContent: 'space-between',
  },
  card: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.01,
    marginBottom: sizes.screenHeight * 0.02,
    alignSelf: 'center',
    width: sizes.screenWidth * 0.96,
    height: sizes.screenHeight * 0.26,
    borderWidth: 1,
    borderColor: colors.disabledBg,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paddingBottom: {
    marginBottom: sizes.screenHeight * 0.15,
  },
  paddingBottom2: {
    marginBottom: sizes.screenHeight * 0.12,
  },
  trImg: {
    width: '100%',
    height: '100%',
    borderRadius: sizes.screenWidth * 0.5,
  },
  trImgIOS: {
    width: sizes.screenWidth * 0.22,
    height: sizes.screenHeight * 0.1,
    borderRadius: sizes.screenWidth * 0.5,
  },
});
