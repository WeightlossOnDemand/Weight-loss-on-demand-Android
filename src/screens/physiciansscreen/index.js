import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import GetCare from '../../components/GetCare';
import images from '../../services/utilities/images';
import ladyy from '../../assets/assets/ladyy.jpg';
import {WebView} from 'react-native-webview';
import Header from '../../components/Header';
import {colors, sizes, fontSize} from '../../services';
import {useIsFocused} from '@react-navigation/native';
import {getTrainerList} from '../../services/utilities/api/auth';
import Loader from '../../components/Loader';

export default function Physicans({navigation, route}) {
  const [showVideo, setShowVideo] = useState(false);
  const [loader, setLoader] = useState(false);
  const [trainerList, setTrainerList] = useState([]);
  const {t_name} = route?.params?.trainer;
  const isVisible = useIsFocused();
  useEffect(() => {
    getList();
  }, [isVisible]);

  const getList = () => {
    setLoader(true);
    setTimeout(async () => {
      try {
        let response = await getTrainerList(t_name);
        console.log(response.data.data);
        setTrainerList(response.data.data);
        setLoader(false);
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    }, 100);
  };
  return (
    <SafeAreaView>
      <Header dark={true} />

      <ScrollView style={styles.color}>
        <View style={styles.paddingLeft}>
          {trainerList?.length ? (
            <Text style={styles.subHeading}>{t_name} </Text>
          ) : (
            <Text style={styles.consultant}>No consultants found.</Text>
          )}
        </View>
        <View style={styles.paddingTop}>
          {trainerList?.map((item, index) => {
            console.log('------------------>>>', item);
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate('providerdetail', {trainer: item})
                }>
                <View style={[styles.row, styles.card]}>
                  <View>
                    <View style={styles.rowinner}>
                      <View style={styles.img}>
                        <Image
                          style={
                            Platform.OS !== 'ios'
                              ? styles.trImg
                              : styles.trImgIOS
                          }
                          source={{uri: item?.images}}
                        />
                      </View>
                      <View>
                        <Text style={styles.heading}>{item.tr_name}</Text>
                      </View>
                    </View>
                    <Text
                      style={styles.cardText1}
                      numberOfLines={3}
                      ellipsizeMode="tail">
                      {item?.tr_desc}
                    </Text>
                  </View>
                  {/* <View> */}
                  {/* <Text
                      style={
                        Platform.OS !== 'ios' ? styles.symbol : styles.symbolIOS
                      }>
                      {' '}
                      ›
                    </Text> */}
                  {/* </View> */}
                </View>
              </TouchableOpacity>
            );
          })}

          {/* <TouchableOpacity
            onPress={() => navigation.navigate('providerdetail')}>
            <View style={[styles.row, styles.card]}>
              <View>
                <View style={styles.rowinner}>
                  <View style={styles.img}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: sizes.screenWidth * 0.5,
                      }}
                      source={ladyy}
                    />
                  </View>
                  <View>
                    <Text style={styles.heading}>Dr.KiKi Lwin,Md</Text>
                  </View>
                </View>
                <Text style={styles.cardText1}>
                  Dr. Lwin was born and raised in Myanmar,formerly known as
                  Burma and graduated from University of Med....
                </Text>
              </View>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('providerdetail')}>
            <View style={[styles.row, styles.card]}>
              <View>
                <View style={styles.rowinner}>
                  <View style={styles.img}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: sizes.screenWidth * 0.5,
                      }}
                      source={ladyy}
                    />
                  </View>
                  <View>
                    <Text style={styles.heading}>Dr.KiKi Lwin,Md</Text>
                  </View>
                </View>
                <Text style={styles.cardText1}>
                  Dr. Lwin was born and raised in Myanmar,formerly known as
                  Burma and graduated from University of Med....
                </Text>
              </View>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('providerdetail')}>
            <View style={[styles.row, styles.card]}>
              <View>
                <View style={styles.rowinner}>
                  <View style={styles.img}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: sizes.screenWidth * 0.5,
                      }}
                      source={ladyy}
                    />
                  </View>
                  <View>
                    <Text style={styles.heading}>Dr.KiKi Lwin,Md</Text>
                  </View>
                </View>
                <Text style={styles.cardText1}>
                  Dr. Lwin was born and raised in Myanmar,formerly known as
                  Burma and graduated from University of Med....
                </Text>
              </View>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('providerdetail')}>
            <View style={[styles.row, styles.card]}>
              <View>
                <View style={styles.rowinner}>
                  <View style={styles.img}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: sizes.screenWidth * 0.5,
                      }}
                      source={ladyy}
                    />
                  </View>
                  <View>
                    <Text style={styles.heading}>Dr.KiKi Lwin,Md</Text>
                  </View>
                </View>
                <Text style={styles.cardText1}>
                  Dr. Lwin was born and raised in Myanmar,formerly known as
                  Burma and graduated from University of Med....
                </Text>
              </View>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity> */}
        </View>
        <View style={styles.paddingBottom}></View>
        {loader && <Loader />}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  color: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
  },
  image: {
    height: sizes.screenHeight * 0.25,
    width: sizes.screenWidth,
  },
  playBtn: {
    top: sizes.screenHeight * 0.08,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 247,0.3)',
    height: sizes.screenHeight * 0.1,
    width: sizes.screenWidth * 0.2,
    borderRadius: sizes.screenWidth * 0.8,
    justifyContent: 'center',
  },
  playIcon: {
    height: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.1,
    alignSelf: 'center',
  },
  textView: {
    paddingTop: sizes.screenHeight * 0.09,
    paddingLeft: sizes.screenWidth * 0.05,
  },
  heading: {
    fontSize: fontSize.h6,
    color: colors.black,
    fontWeight: 'bold',
    paddingLeft: sizes.screenWidth * 0.05,
  },
  padding: {
    padding: sizes.baseMargin,
  },
  subHeading: {
    fontSize: fontSize.h5,
    // fontWeight: 'bold',
    color: colors.black,
  },
  consultant: {
    alignSelf: 'center',
    top: sizes.screenHeight * 0.3,
    fontSize: fontSize.h5,
    color: colors.secondary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  cardText: {
    color: colors.primary,
    fontSize: fontSize.large,
    paddingRight: sizes.screenWidth * 0.06,
    lineHeight: sizes.screenHeight * 0.04,
  },
  cardText1: {
    color: colors.primary,
    fontSize: fontSize.medium,
    paddingTop: sizes.screenHeight * 0.01,
    paddingLeft: sizes.screenWidth * 0.04,
    lineHeight: sizes.screenHeight * 0.027,
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
  videoView: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.25,
    backgroundColor: colors.secondary,
    justifyContent: 'flex-end',
    paddingLeft: sizes.screenWidth * 0.04,
    paddingBottom: sizes.screenHeight * 0.03,
  },
  bOTtomPAD: {
    paddingBottom: sizes.screenHeight * 0.05,
  },
  img: {
    width: sizes.screenWidth * 0.2,
    height: sizes.screenHeight * 0.11,
  },
  paddingTop: {
    paddingTop: 10,
  },
  paddingLeft: {
    paddingTop: sizes.screenHeight * 0.03,
    paddingLeft: sizes.screenWidth * 0.05,
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
  paddingBottom: {
    paddingBottom: sizes.screenHeight * 0.1,
  },
});
