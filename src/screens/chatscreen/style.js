import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  color: {
    backgroundColor: '#fafafa',
    // paddingBottom:sizes.screenHeight*0.3
    height: sizes.screenHeight * 0.79,
  },
  col: {
    backgroundColor: '#fafafa',
  },
  inputbg: {
    // color:'red'
  },
  padding: {
    position: 'absolute',
    padding: sizes.baseMargin,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    top: sizes.screenHeight * 0.83,
    padding: sizes.baseMargin,
    backgroundColor: '#fafafa',
    // height:sizes.screenHeight*0.12
  },
  padding2: {
   justifyContent:'center',
  
    
    flexDirection: 'row',
  
    backgroundColor: '#fafafa',
  },
  text: {
    color: colors.primary,
    fontFamily: fontFamily.appTextLight,
    fontSize: fontSize.h4,
  },
  field: {
    backgroundColor: colors.lightGray,
    fontSize: fontSize.large,
    fontFamily: fontFamily.appTextRegular,
  },
  width: {
    width: sizes.screenWidth * 0.7,
    // alignSelf: 'center',
   marginTop:sizes.screenHeight*0.02,
   height:sizes.screenHeight*0.2,
  //  backgroundColor:"red"
  },
  width2: {
    // width: sizes.screenWidth * 0.7,
    // alignSelf: 'center',
    // paddingTop: sizes.screenHeight * 0.01,
  },
  paddingTop: {
    // paddingTop: sizes.screenHeight * 0.04,
  },
  buttonView: {
    // backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.12,
    width: sizes.screenWidth * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    // alignSelf: 'center',
  },
  buttonText: {
    color: colors.secondary,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextHeading,
    fontWeight: 'bold',
    // top:sizes.screenHeight*-0.03
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
    fontSize: fontSize.h5,
    color: colors.black,
    // fontWeight: 'bold',
    fontFamily: fontFamily.appTextHeading,
    // paddingLeft: sizes.screenWidth * 0.035,
    top: sizes.screenHeight * 0.03,
  },
  text11: {
    fontSize: fontSize.h5,
    color: colors.black,
    fontFamily: fontFamily.appTextHeading,
    marginTop: sizes.baseMargin,
    // paddingLeft: sizes.screenWidth * 0.035,
    // top:sizes.screenHeight*0.03
  },
  text1: {
    fontSize: fontSize.large,
    color: colors.black,
    fontFamily: fontFamily.appTextLight,
    // paddingLeft: sizes.screenWidth * 0.035,
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
  card: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.01,
    marginTop: sizes.screenHeight * 0.02,
    alignSelf: 'center',
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.16,
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
  card2: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.02,
    marginTop: sizes.screenHeight * 0.02,
    // marginBottom:sizes.screenHeight* 0.2,

    alignSelf: 'center',
    width: sizes.screenWidth * 0.9,
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
  icon: {
    height: sizes.screenHeight * 0.062,
    width: sizes.screenWidth * 0.13,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    // right: sizes.screenWidth * 0.01,
  },
  left: {
    left: sizes.screenWidth * 0.02,
  },
});
