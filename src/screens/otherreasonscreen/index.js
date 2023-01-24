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
import {colors, sizes, fontSize, fontFamily} from '../../services';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const OtherReason = ({navigation,route}) => {
  const [text, settext] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header dark={true} />
      </View>

      <View style={styles.headcontainer}>
        <Text style={styles.hedtext}>What is the reason for your session?</Text>
      </View>
      <View style={styles.getextcontainer}>
        <View style={styles.filedcon}>
          <CustomTextFiel
            label={'I would like to focus on '}
            value={aaa}
            setValue={settext}
          />
          <Text style={{textAlign:'right',fontSize:fontSize.large,color:colors.secondary,top:sizes.screenHeight*0.01}}>{text.length ? text.length : 0}/400</Text>
        </View>
        

        {text ? (
          <TouchableOpacity onPress={handleReason}>
            <View style={styles.bdiv}>
              <Text style={styles.btext}>›</Text>
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headcontainer: {
    paddingLeft: sizes.screenWidth * 0.05,
  },

  hedtext: {
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight: 'bold',
    fontStyle: fontFamily.appTextHeading,
  },
  getextcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.05,
  },
  filedcon: {
    width: sizes.screenWidth * 0.9,
  },

  bdiv: {
    marginTop: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.16,
    height: sizes.screenHeight * 0.081,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.screenWidth * 0.2,
  },
  btext: {
    fontSize: fontSize.h2,
    color: colors.white,
    fontWeight: 'bold',
    bottom: sizes.screenWidth * 0.01,
  },
});
