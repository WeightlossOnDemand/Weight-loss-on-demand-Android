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
  Button,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {colors, fontFamily, fontSize, sizes} from '../../services';
import {CustomTextFiel} from '../../component/textFiled';
import Header from '../../components/Header';
import medi from '../../assets/medi.png';
import Modal from 'react-native-modal';
export const InsuranceScreen = ({navigation, route}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header dark={true} />
        <View>
          <View>
            <Image source={medi} />
          </View>
          <View style={styles.insu}>
            {route?.params?.title ? (
              <Text style={styles.insutext}>{route?.params?.title}</Text>
            ) : (
              <Text style={styles.insutext}>We take health insurance</Text>
            )}
          </View>
          <View style={styles.insu2}>
            <Text style={styles.insutext2}>
              Search for your insurance provider to see if you re covered
            </Text>
          </View>
          <View style={styles.srchcont}>
            <TouchableOpacity
              onPress={() => navigation.navigate('searchscreen')}>
              <View style={styles.sb}>
                <FontAwesome
                  name="search"
                  color={colors.secondary}
                  size={20}
                  style={styles.seacrchicon}
                />
                <Text style={styles.sbt}>Search</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.sbtd}>e.g Hoghmark, UnitedHealthcare</Text>
          </View>
          {!route?.params?.title && (
            <View style={styles.skipin}>
              <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.ski}> Skip Insurance</Text>
              </TouchableOpacity>
              <View style={styles.padd}>
                <Text style={styles.sbtd}>
                  You can see a provider widthout insurance{' '}
                </Text>
              </View>
            </View>
          )}
        </View>
        <View>{/* <Button title="Show modal" onPress={toggleModal} /> */}</View>
      </ScrollView>
      <Modal isVisible={isModalVisible}>
        <View style={styles.model}>
          <View>
            <Text style={styles.why}>Why are you skipping insurance?</Text>
          </View>
          <View>
            <View style={styles.fle}>
              <View>
                <AntDesign
                  name="rightcircle"
                  color={colors.secondary}
                  size={24}
                  style={styles.seacrchicon}
                />
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    route?.params?.screenName
                      ? navigation.navigate(route?.params?.screenName)
                      : navigation.navigate('employerhelpscreen');
                    setModalVisible(!isModalVisible);
                  }}>
                  <Text style={styles.modalll}>
                    Prefer not to use insurance
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.fle}>
              <View>
                <AntDesign
                  name="rightcircle"
                  color={colors.secondary}
                  size={24}
                  style={styles.seacrchicon}
                />
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    route?.params?.screenName
                      ? navigation.navigate(route?.params?.screenName)
                      : navigation.navigate('employerhelpscreen');
                    setModalVisible(!isModalVisible);
                  }}>
                  <Text style={styles.modalll}>Insurance isnt nearby</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.fle}>
              <View>
                <AntDesign
                  name="rightcircle"
                  color={colors.secondary}
                  size={24}
                  style={styles.seacrchicon}
                />
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    route?.params?.screenName
                      ? navigation.navigate(route?.params?.screenName)
                      : navigation.navigate('employerhelpscreen');
                    setModalVisible(!isModalVisible);
                  }}>
                  <Text style={styles.modalll}>I'll add it later</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.fle}>
              <View>
                <AntDesign
                  name="rightcircle"
                  color={colors.secondary}
                  size={24}
                  style={styles.seacrchicon}
                />
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    route?.params?.screenName
                      ? navigation.navigate(route?.params?.screenName)
                      : navigation.navigate('employerhelpscreen');
                    setModalVisible(!isModalVisible);
                  }}>
                  <Text style={styles.modalll}>Others</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* <Button title="Hide modal" onPress={toggleModal} /> */}
        </View>
      </Modal>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  model: {
    paddingTop: sizes.screenHeight * 0.03,
    paddingLeft: sizes.screenWidth * 0.05,
    top: sizes.screenHeight * 0.35,
    right: sizes.screenWidth * 0.05,
    height: sizes.screenHeight * 0.3,
    backgroundColor: colors.lightGray,
    width: sizes.screenWidth,
  },
  insu: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: sizes.screenHeight * 0.02,
  },
  insu2: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: sizes.screenWidth * 0.05,
    paddingRight: sizes.screenWidth * 0.05,
  },
  insutext: {
    fontSize: fontSize.h5,
    color: colors.black,
    fontWeight: '500',
    fontFamily: fontFamily.appTextMedium,
  },
  insutext2: {
    textAlign: 'center',
    fontSize: fontSize.h6,
    color: colors.black,
    fontWeight: '500',
    fontFamily: fontFamily.appTextMedium,
  },
  srchcont: {
    paddingTop: sizes.screenHeight * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sb: {
    width: sizes.screenWidth * 0.8,
    backgroundColor: colors.lightGray,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: sizes.screenHeight * 0.02,
    paddingBottom: sizes.screenHeight * 0.02,
  },
  seacrchicon: {
    right: sizes.screenWidth * 0.05,
  },
  sbt: {
    textAlign: 'center',
    fontSize: fontSize.h6,
    color: colors.black,
    fontWeight: '500',
    fontFamily: fontFamily.appTextHeading,
  },
  sbtd: {
    paddingTop: sizes.screenHeight * 0.01,
    textAlign: 'center',
    fontSize: fontSize.medium,
    color: colors.black,
    fontWeight: '500',
    fontFamily: fontFamily.appTextMedium,
  },
  skipin: {
    marginTop: sizes.screenHeight * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  padd: {
    paddingBottom: sizes.screenHeight * 0.03,
    paddingLeft: sizes.screenWidth * 0.2,
    paddingRight: sizes.screenWidth * 0.2,
  },
  ski: {
    textAlign: 'center',
    fontSize: fontSize.h6,
    color: colors.secondary,
    fontWeight: '700',
    fontFamily: fontFamily.appTextLight,
  },
  why: {
    fontSize: fontSize.large,
    color: colors.secondary,
    fontWeight: '400',
    fontFamily: fontFamily.appTextMedium,
  },
  fle: {
    flexDirection: 'row',
    paddingLeft: sizes.screenWidth * 0.04,
    paddingTop: sizes.screenHeight * 0.02,
  },
  modalll: {
    // fontSize: fontSize.large,
    color: colors.black,
    fontWeight: '400',
    fontFamily: fontFamily.appTextRegular,
  },
});
