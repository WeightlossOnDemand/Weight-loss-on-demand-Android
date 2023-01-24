import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {styles} from './style';
import {colors, sizes} from '../../services';
import Loader from 'react-native-three-dots-loader';
import Entypo from 'react-native-vector-icons/Entypo';
import Swiper from 'react-native-swiper';
import Spinner from 'react-native-spinkit';
import {
  findingProvider,
  updateAppointmentTrainer,
} from '../../services/utilities/api/auth';
import {useIsFocused} from '@react-navigation/native';

export default function FindingProvider({navigation, route}) {
  const [trainer, setTrainer] = useState('');
  const isVisible = useIsFocused();
  useEffect(() => {
    findingAProvider();
  }, [isVisible]);

  const findingAProvider = async () => {
    navigation.navigate(
      'ProviderReview',
      // , {
      // trainer: response.data.data[0],
      // }
    );
    // try {
    //   let response = await findingProvider();
    //   console.log(response.data.data);
    //   setTrainer(response.data.data);
    //   setTimeout(async () => {
    //     // console.log(trainer);
    //     // navigation.navigate('videocallingscreen');
    //     console.log(route?.params?.apt_id);
    //     console.log(response.data.data[0].tr_id);
    //     console.log(response.data.data[0].tr_name);
    //     if (route?.params?.apt_id) {
    //       try {
    //         let res = await updateAppointmentTrainer(
    //           route?.params?.apt_id,
    //           response.data.data[0].tr_id,
    //           response.data.data[0].tr_name,
    //         );
    //         if (res.data.status == 200) {
    //           navigation.navigate('ProviderReview', {
    //             trainer: response.data.data[0],
    //           });
    //         }
    //       } catch (error) {
    //         console.log(error);
    //       }
    //     } else {
    //       navigation.navigate('ProviderReview', {
    //         trainer: response.data.data[0],
    //       });
    //     }
    //   }, 5000);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <SafeAreaView>
      <View style={styles.color}>
        <View style={styles.userView}>
          <View style={[styles.padding]}>
            {/* <TouchableOpacity onPress={() => navigation.goBack()}>
              <View>
                <Text style={styles.cancel}>Cancel</Text>
              </View>
            </TouchableOpacity> */}
            <View style={styles.paddingTop}>
              <Text style={styles.findingText}>Finding a consultant...</Text>
              <View style={styles.paddingTop}>
                <Spinner
                  style={styles.spinner}
                  isVisible={true}
                  size={50}
                  type={'ThreeBounce'}
                  color={colors.white}
                />
              </View>
              <View style={styles.padding}>
                <Text style={[styles.findingText]}>
                  Estimated wait: <Text style={styles.bold}>{'<'} 5 min</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>

        <Swiper
          autoplay={true}
          style={styles.wrapper}
          autoplayTimeout={10}
          showsPagination={false}>
          <View style={[styles.row, styles.card, styles.paddingTop]}>
            <Entypo name="light-bulb" color={colors.secondary} size={40} />

            <View>
              <Text style={styles.cardText}>Turn on "Do Not Distrub"</Text>
              <Text style={styles.faqText}>
                Avoid getting distracted by notifications. Toggling between apps
                may between apps may disconnect your visit.
              </Text>
            </View>
          </View>
          <View style={[styles.row, styles.card, styles.paddingTop]}>
            <Entypo name="light-bulb" color={colors.secondary} size={40} />
            <View>
              <Text style={styles.cardText}>
                Give your provider a good view
              </Text>
              <Text style={styles.faqText}>
                Sit near a bright light. Find a secure place to prop your phone.
              </Text>
            </View>
          </View>
          <View style={[styles.row, styles.card, styles.paddingTop]}>
            <Entypo name="light-bulb" color={colors.secondary} size={40} />
            <View>
              <Text style={styles.cardText}>Time to focus</Text>
              <Text style={styles.faqText}>
                Make the most of your time with your provider by turning off
                distractions like the TV and video games.
              </Text>
            </View>
          </View>
          <View style={[styles.row, styles.card, styles.paddingTop]}>
            <Entypo name="light-bulb" color={colors.secondary} size={40} />
            <View>
              <Text style={styles.cardText}>Can you hear me now</Text>
              <Text style={styles.faqText}>
                For the best video and audio quality, connect to WiFi and sit
                close to your router. Avoid streaming music or videos, playing
                video games, and downloading large files.
              </Text>
            </View>
          </View>
        </Swiper>
      </View>
    </SafeAreaView>
  );
}
