import React, {useState} from 'react';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors, fontFamily, fontSize, sizes} from '../../services';
import {CustomTextFiel} from '../../component/textFiled';
import Header from '../../components/Header';

export const SearchScreen = () => {
  const [search, setsearch] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header dark={true} />

        <View style={styles.srccon}>
          <FontAwesome
            name="search"
            color={colors.secondary}
            size={20}
            style={styles.seacrchicon}
          />
          <View style={styles.widt}>
            <TextInput
              mode="contain"
              value={search}
              placeholder={'Search'}
              onChangeText={setsearch}
              autoCapitalize={'none'}
              activeUnderlineColor={colors.secondary}
              style={{
                backgroundColor: colors.lightGray,
                fontSize: fontSize.h6,
                paddingLeft: sizes.screenWidth * 0.01,
                width: sizes.screenWidth * 0.4,
                left: sizes.screenWidth * 0.1,
                fontFamily: fontFamily.appTextRegular,
                color:colors.black
              }}
            />
          </View>
        </View>
        <View style={styles.eg}>
          <Text style={styles.sbtd}>e.g HighMark, UnitedHealthcare</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  srccon: {
    flexDirection: 'row',
    backgroundColor: colors.lightGray,
    alignItems: 'center',
  },
  seacrchicon: {
    // position:'absolute',
    // top:40,
    left: sizes.screenWidth * 0.06,
  },
  widt: {
    left: 10,
    width: sizes.screenWidth * 0.5,
  },
  sbtd: {
    paddingTop: sizes.screenHeight * 0.01,
    textAlign: 'left',
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: '600',
    fontFamily: fontFamily.appTextMedium,
  },
  eg: {
    paddingLeft: sizes.screenWidth * 0.03,
  },
});
