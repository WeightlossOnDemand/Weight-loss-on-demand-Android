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
  hedtext: {
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextHeading,
  },
  paddingTop: {
    paddingTop: sizes.screenHeight * 0.02,
  },
  text: {
    color: colors.primary,
    fontFamily: fontFamily.appTextLight,
    fontSize: fontSize.medium,
  },
  row: {
    flexDirection: 'row',
    paddingTop: sizes.TinyMargin,
  },
  searchIcon: {
    position: 'absolute',
    left: 0,
    top: sizes.screenHeight * 0.03,
    bottom: 0,
    zIndex: 9,
  },
  input: {
    backgroundColor: colors.lightGray,
    fontSize: fontSize.h6,
    width: sizes.screenWidth * 0.9,
    fontFamily: fontFamily.appTextRegular,
    paddingLeft: sizes.screenWidth * 0.05,
    height: 40,
  },
  lisbutton: {
    width: sizes.screenWidth * 0.8,
    height: sizes.screenHeight * 0.07,
    backgroundColor: colors.white,
    marginBottom: sizes.screenHeight * 0.01,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.2,
    shadowColor: '#000',
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
  paddingBottom:{
    marginBottom:sizes.screenHeight * 0.2
  }
});
