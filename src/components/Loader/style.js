import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  color: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
  },
  modalView: {
    width: sizes.screenWidth ,
    backgroundColor: '#0e0e0e',
    opacity: 0.9,
    marginLeft: sizes.screenWidth * 0.001,
    // marginLeft: sizes.screenWidth * 0.01,
    padding: 10,
    position: 'absolute',
    top: -20,
    height: sizes.screenHeight,
  },
  loader: {
    alignSelf: 'center',
  },
});
