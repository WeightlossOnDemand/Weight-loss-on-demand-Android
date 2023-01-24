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
} from 'react-native';
import GetCare from '../../components/GetCare';
import images from '../../services/utilities/images';

import {WebView} from 'react-native-webview';
import Header from '../../components/Header';
import {styles} from './style';
import {useIsFocused} from '@react-navigation/native';
import {getTrainerType} from '../../services/utilities/api/auth';
import Loader from '../../components/Loader';

export default function Meetourproviders({navigation}) {
  const [showVideo, setShowVideo] = useState(false);
  const [loader, setLoader] = useState(false);
  const [trainerType, setTrainerType] = useState([]);
  const isVisible = useIsFocused();

  useEffect(() => {
    getTypeTrainer();
  }, [isVisible]);

  const getTypeTrainer = () => {
    setLoader(true);
    setTimeout(async () => {
      try {
        let response = await getTrainerType();
        console.log('---?',response.data.data);
        setTrainerType(response.data.data);
        setLoader(false);
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    }, 100);
  };
  return (
    <SafeAreaView>
      <Header title={'Connect to all consultants '} />
      <ScrollView style={styles.color}>
        {!showVideo ? (
          <ImageBackground source={images.allTrainer} style={styles.image}>
            {/* <TouchableOpacity onPress={() => setShowVideo(true)}>
              <View style={styles.playBtn}>
                <Image source={images.playIcon} style={styles.playIcon} />
              </View>
              <View style={styles.textView}>
                <Text style={styles.heading}>Meet Our Consultants</Text>
              </View>
            </TouchableOpacity> */}
          </ImageBackground>
        ) : (
          <WebView
            source={{uri: 'https://www.youtube.com/embed/JLnycPtolfw'}}
            style={styles.videoView}
          />
        )}

        <View style={styles.padding}>
          {/* <TouchableOpacity onPress={() => navigation.navigate('HowItWorksVT')}>
            <View style={[styles.top]}>
              <Text style={styles.subHeading}>See transcript for video</Text>
            </View>
          </TouchableOpacity> */}
          <View style={styles.padding}>
            <TouchableOpacity
              onPress={() => navigation.navigate('introductionscreen')}>
              <View style={[styles.row, styles.card]}>
                <Text style={styles.cardText}>Introduction</Text>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
            {/* <TouchableOpacity
              onPress={() => navigation.navigate('physiciansscreen')}>
              <View style={[styles.row, styles.card]}>
                <Text style={styles.cardText}>Trainers1</Text>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity> */}
            {trainerType?.map((item, index) => {
              console.log(item)
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.navigate('physiciansscreen', {trainer: item})
                  }>
                  <View style={[styles.row, styles.card]}>
                    <Text style={styles.cardText}>See all consultants</Text>
                    {/* <Text style={styles.cardText}>{item.t_name}</Text> */}
                    <View>
                      <Text style={styles.symbol}> ›</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
            {/* <TouchableOpacity
              onPress={() => navigation.navigate('Featuresproviderscreen')}>
              <View style={[styles.row, styles.card]}>
                <Text style={styles.cardText}>Trainer Type</Text>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity> */}

            {/* As discussed with Jeff this was hidden at the last moment */}
            {/* <TouchableOpacity
              onPress={() => navigation.navigate('screeningandtrainingscreen')}>
              <View style={[styles.row, styles.card]}>
                <Text style={styles.cardText}>Screening & Training</Text>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('qualityandoversight')}>
              <View style={[styles.row, styles.card]}>
                <Text style={styles.cardText}>Quality & Oversight</Text>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity> */}
          </View>

        </View>
        {loader && <Loader />}
      </ScrollView>
    </SafeAreaView>
  );
}
