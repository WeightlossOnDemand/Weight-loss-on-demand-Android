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
  head: {
    fontFamily: fontFamily.appTextHeading,
    fontSize: fontSize.h5,
    color: colors.primary,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  head2: {
    right: sizes.screenWidth * 0.03,
    fontFamily: fontFamily.appTextMedium,
    color: colors.primary,
  },
  text: {
    top: sizes.screenHeight * 0.007,
    right: sizes.screenWidth * 0.03,
    fontFamily: fontFamily.appTextLight,
    color: colors.primary,
    width: sizes.screenWidth * 0.7,
    fontSize: fontSize.smallM,
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
  paddingTop: {
    paddingTop: sizes.screenHeight * 0.02,
  },
  container: {
    // flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // marginTop: 25,
},
pdf: {
    flex:1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
}
});
