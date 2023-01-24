import React, {useRef, useState} from 'react';
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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {WebView} from 'react-native-webview';
import Header from '../../components/Header';
import {styles} from './style';

export default function  MentalHealth({navigation}) {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <SafeAreaView>
      <Header title={'Mental Health'} />
      <ScrollView style={styles.color}>
        {!showVideo ? (
          <ImageBackground source={images.mother} style={styles.image}>
            <TouchableOpacity onPress={() => setShowVideo(true)}>
              <View style={styles.playBtn}>
                <Image source={images.playIcon} style={styles.playIcon} />
              </View>
            </TouchableOpacity>
            {/* <View style={styles.textView}>
              <Text style={styles.heading}>Meet Our Providers</Text>
            </View> */}
          </ImageBackground>
        ) : (
          <WebView
            source={{uri: 'https://www.youtube.com/embed/JLnycPtolfw'}}
            style={styles.videoView}
          />
        )}

        <View style={styles.padding}>
          <TouchableOpacity onPress={() => navigation.navigate('HowItWorksVT')}>
            <View style={[styles.top]}>
              <Text style={styles.subHeading}>See transcript for video</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.padding}>
          
            <TouchableOpacity onPress={() => navigation.navigate('introductionscreen')}>
              <View style={[styles.row, styles.card,styles.whbackgroundcolor]}>
              
                  
                <Text style={[styles.cardText,styles.whi]}>Schedule an Appointment</Text>

 
                <View>
                  <Text style={[styles.symbol,styles.symbolwhite]}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('howcanwehepl')}>
                     <View style={[styles.row, styles.card]}>
                <View style={styles.fl}>
                <FontAwesome5
              name="video"
           
              size={20}
            
            />
                <Text style={styles.cardText}>How We can help </Text>
                </View>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('whattoexpect')}>
              <View style={[styles.row, styles.card]}>
               <View style={styles.fl}>
               <FontAwesome5
              name="Video"
           
              size={20}
            
            />

               <Text style={styles.cardText}>What to Expect</Text>
               </View>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={() => navigation.navigate('therapistscreen')}>
              <View style={[styles.row, styles.card]}>
              <View style={styles.fl}>
                <FontAwesome5
              name="Video"
           
              size={20}
            
            />
                <Text style={styles.cardText}>Therapists vs. Psychiatrist</Text>
                </View>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Featuresproviderscreen')}>
              <View style={[styles.row, styles.card]}>
              <View style={styles.fl}>
                <FontAwesome5
              name="Video"
           
              size={20}
            
            />
                <Text style={styles.cardText}>Our Providers</Text>
                </View>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
