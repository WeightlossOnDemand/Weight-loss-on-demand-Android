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
import {styles} from './style';
import Header from '../../components/Header';
import {sizes} from '../../services';
import ladyy from '../../assets/assets/ladyy.jpg';
import {useIsFocused} from '@react-navigation/native';
import {getAllTrainers} from '../../services/utilities/api/auth';

export default function ChooseProvider({route, navigation}) {
  const [trainer, setTrainer] = useState([]);
  const isVisible = useIsFocused();

  useEffect(() => {
    getTrainers();
    setTrainer(route?.params?.filteredTrainer);
  }, [isVisible]);
  const getTrainers = async () => {
    try {
      let response = await getAllTrainers();
      setTrainer(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <SafeAreaView>
      <Header dark={true} filter={true} />

      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text
            style={
              Platform.OS !== 'ios' ? styles.subHeading : styles.subHeadingIOS
            }>
            Choose consultant{' '}
          </Text>
        </View>
        {trainer?.map((item, index) => {
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
                        style={Platform.OS !== 'ios' ? styles.trImg :styles.trImgIOS }
                        source={{uri:item?.images}}
                      />
                    </View>
                    <View>
                      <Text style={styles.heading}>{item?.tr_name}</Text>
                      {/* <Text style={styles.text}>Next Available: 10:30 PM</Text> */}
                    </View>
                  </View>
                  <Text
                    style={Platform.OS !== 'ios' ? styles.cardText : styles.cardTextIOS}
                    numberOfLines={3}
                    ellipsizeMode="tail">
                    {item.tr_desc}
                  </Text>
                </View>
                {/* <View>
                  <Text style={Platform.OS !== 'ios' ? styles.symbol : styles.symbolIOS}> ›</Text>
                </View> */}
              </View>
            </TouchableOpacity>
          );
        })}
        <View style={styles.paddingBottom2}></View>

        {/* <TouchableOpacity onPress={() => navigation.navigate('providerdetail')}>
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
                  <Text style={styles.text}>Next Available: 10:30 PM</Text>
                </View>
              </View>
              <Text style={styles.cardText}>
                Dr. Lwin was born and raised in Myanmar,formerly known as Burma
                and graduated from University of Med....
              </Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('providerdetail')}>
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
                  <Text style={styles.text}>Next Available: 10:30 PM</Text>
                </View>
              </View>
              <Text style={styles.cardText}>
                Dr. Lwin was born and raised in Myanmar,formerly known as Burma
                and graduated from University of Med....
              </Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('providerdetail')}>
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
                  <Text style={styles.text}>Next Available: 10:30 PM</Text>
                </View>
              </View>
              <Text style={styles.cardText}>
                Dr. Lwin was born and raised in Myanmar,formerly known as Burma
                and graduated from University of Med....
              </Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('providerdetail')}>
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
                  <Text style={styles.text}>Next Available: 10:30 PM</Text>
                </View>
              </View>
              <Text style={styles.cardText}>
                Dr. Lwin was born and raised in Myanmar,formerly known as Burma
                and graduated from University of Med....
              </Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('providerdetail')}>
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
                  <Text style={styles.text}>Next Available: 10:30 PM</Text>
                </View>
              </View>
              <Text style={styles.cardText}>
                Dr. Lwin was born and raised in Myanmar,formerly known as Burma
                and graduated from University of Med....
              </Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('providerdetail')}>
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
                  <Text style={styles.text}>Next Available: 10:30 PM</Text>
                </View>
              </View>
              <Text style={styles.cardText}>
                Dr. Lwin was born and raised in Myanmar,formerly known as Burma
                and graduated from University of Med....
              </Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('providerdetail')}>
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
                  <Text style={styles.text}>Next Available: 10:30 PM</Text>
                </View>
              </View>
              <Text style={styles.cardText}>
                Dr. Lwin was born and raised in Myanmar,formerly known as Burma
                and graduated from University of Med....
              </Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('providerdetail')}>
          <View style={[styles.row, styles.card, styles.paddingBottom]}>
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
                  <Text style={styles.text}>Next Available: 10:30 PM</Text>
                </View>
              </View>
              <Text style={styles.cardText}>
                Dr. Lwin was born and raised in Myanmar,formerly known as Burma
                and graduated from University of Med....
              </Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity> */}
      </ScrollView>
    </SafeAreaView>
  );
}
