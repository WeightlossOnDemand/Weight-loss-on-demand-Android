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
import {Rating} from 'react-native-ratings';
import {trainerRating} from '../../services/utilities/api/auth';
import Error from '../../components/Error';
import Modal from 'react-native-modal';
import Loader from '../../components/Loader';
import {useSelector} from 'react-redux';

export default function RateProvider({navigation, route}) {
  const [message, setMessage] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loader, setLoader] = useState(false);

  const ratingCompleted = async rating => {
    setLoader(true);
    try {
      let response = await trainerRating(rating, tr_id);
      setMessage(response.data.message);
      setIsModalVisible(true);
      setLoader(true);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };
  const tr_id = useSelector(state => state.tr_id);
  const tr_name = useSelector(state => state.tr_name);
  const tr_image = useSelector(state => state.tr_image);
  const tr_amount = useSelector(state => state.tr_amount);
  console.log(tr_id,tr_name);
  return (
    <SafeAreaView>
      <View style={styles.color}>
        <View style={styles.padding}>
          <View style={styles.skipBtn}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('HowLikelyRecommend', {
                  tr_id: tr_id,
                  tr_name: tr_name,
                  tr_image: tr_image,
                  tr_amount: tr_amount,
                })
              }>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.rateText}>Rate your session </Text>
        <Image
          source={{
            uri:tr_image,
          }}
          style={Platform.OS !== 'ios' ? styles.docImg : styles.docImgIOS}
        />
        <Text style={styles.providerTitle}>{tr_name}</Text>
        <Rating
          type="custom"
          ratingColor={colors.secondary}
          onFinishRating={ratingCompleted}
          reviewColor={colors.secondary}
          ratingBackgroundColor={colors.disabledBg}
          tintColor={'#fafafa'}
          style={{
            paddingVertical: 20,
            backgroundColor: '#fafafa',
            borderColor: 'red',
          }}
        />
      </View>
      {isModalVisible && (
        <Modal style={styles.modalView} isVisible={isModalVisible}>
          <View style={styles.texcon}>
            <Text style={styles.text111}>Your rating is submitted!</Text>
          </View>
          <View style={styles.texcon1}>
            <Text style={styles.text1}>{message}</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setIsModalVisible(false);
                navigation.navigate('HowLikelyRecommend', {
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
