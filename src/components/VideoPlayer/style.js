import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  color: {
    backgroundColor: colors.black,
    height: sizes.screenHeight,
  },
  videoView: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.4,
  },
  top: {
    paddingTop: sizes.screenHeight * 0.25,
  },
  loader:{
    left:0,
    right:0,
    top:sizes.screenHeight * 0.4,
    zIndex:9,
    position:'absolute'
  }
});
