import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {CustomTextFiel} from '../../component/textFiled';
import {colors, sizes, fontSize} from '../../services';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



export const Temperaturescreen = () => {
    const [temperature, settemperature] = useState()
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header dark={true} />
      </View>

      <View style={styles.headcontainer}>
        <Text style={styles.hedtext}>Add your temperature</Text>
      </View>
      <View style={styles.headcontaine2}>
        <Text style={styles.hedtext1}>if you have a therometer,adding your temperature now will save time  during your visits no guessing please</Text>
      </View>
      <View>
      <View style={styles.filedcon}>
            <CustomTextFiel
              label={'Password'}
              value={temperature}
              setValue={settemperature}
            /></View>
      </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headcontainer: {

    paddingLeft: sizes.screenWidth * 0.05,
    paddingRight: sizes.screenWidth * 0.05,
  },

  hedtext: {
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight: 'bold',
  },
  hedtext1:{
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: 'bold',
  },
  headcontaine2: {
marginTop:sizes.screenHeight*0.05,
    paddingLeft: sizes.screenWidth * 0.05,
    paddingRight: sizes.screenWidth * 0.05,
  },
  filedcon: {
    marginBottom:sizes.screenHeight     * 0.03,
  },
})