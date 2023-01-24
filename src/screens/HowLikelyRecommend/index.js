import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
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
import Slider from '@react-native-community/slider';
import {appRating} from '../../services/utilities/api/auth';
import Error from '../../components/Error';
import Modal from 'react-native-modal';
import Loader from '../../components/Loader';

export default function HowLikelyRecommend({navigation, route}) {
  const [rate, setRate] = useState(5);
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleRating = () => {
    setLoader(true);
    setTimeout(async () => {
      try {
        let response = await appRating(rate);
        setMessage(response.data.message);
        setIsModalVisible(true);
        // setFirstName(response.data.data.first_name);
        // setLastName(response.data.data.last_name);
        setLoader(false);
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    }, 100);
  };
  return (
    <SafeAreaView>
      <View style={styles.color}>
        <View style={[styles.padding, styles.top]}>
          <Text style={styles.skipText}>
            How likely are you to recommend Weight Loss On Demand to a friend or
            colleague?
          </Text>
          <View style={styles.paddingTop}>
            <View style={[styles.padding, styles.row]}>
              <Text style={styles.extremelyText}>Extremely Unlikely</Text>
              <Text style={styles.rate}>{rate}</Text>
              <Text style={styles.extremelyText2}>Extremely Likely</Text>
            </View>
            <View style={[styles.row]}>
              <View
                style={Platform.OS !== 'ios' ? styles.left : styles.leftIOS}>
                <Text style={styles.rating}>0</Text>
              </View>
              <View>
                <Slider
                  onSlidingComplete={val => setRate(Math.round(val))}
                  style={styles.sliderWidth}
                  thumbTintColor={colors.secondary}
                  value={rate}
                  minimumValue={0}
                  maximumValue={10}
                  minimumTrackTintColor={colors.secondary}
                  maximumTrackTintColor={colors.primary}
                />
              </View>
              <View
                style={Platform.OS !== 'ios' ? styles.right : styles.rightIOS}>
                <Text style={styles.rating}>10</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.paddingTop}>
          <TouchableOpacity onPress={handleRating}>
            <View style={styles.disabledView}>
              <Text style={styles.buttonText}>Submit</Text>
            </View>
          </TouchableOpacity>
          <View style={[styles.center, styles.paddingTop]}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ThankyouVisit', {
                  tr_id: route?.params?.tr_id,
                  tr_name: route?.params?.tr_name,
                  tr_image: route?.params?.tr_image,
                  tr_amount: route?.params?.tr_amount,
                })
              }>
              <Text
                style={Platform.OS !== 'ios' ? styles.skip : styles.skipIOS}>
                Skip
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* {message !== '' && (
        <Error
          title={'We’re so happy to hear from you!'}
          message={message}
          screen={'ThankyouVisit'}
        />
      )} */}
      {isModalVisible && (
        <Modal style={styles.modalView} isVisible={isModalVisible}>
          <View style={styles.texcon}>
            <Text style={styles.text111}>We’re so happy to hear from you!</Text>
          </View>
          <View style={styles.texcon1}>
            <Text style={styles.text1}>{message}</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setIsModalVisible(false);

                navigation.navigate('ThankyouVisit', {
                  tr_id: route?.params?.tr_id,
                  tr_name: route?.params?.tr_name,
                  tr_image: route?.params?.tr_image,
                  tr_amount: route?.params?.tr_amount,
                });
              }}>
              <View style={styles.buttonView}>
                <Text style={styles.buttonText}>OK</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
      {loader && <Loader />}
    </SafeAreaView>
  );
}
