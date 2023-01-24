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
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {styles} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../services';

export default function MessageSupport({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header dark={true} />
        </View>

        <View style={styles.contentView}>
         
          <Image source={images.messageIcon} style={styles.icon}/>
          <Text style={styles.heading}>No Messages Yet</Text>
          <Text style={styles.text}>
            Conversations with our support team will appear here.
          </Text>
        </View>
        <View style={styles.paddingTop}>
          <TouchableOpacity onPress={()=>navigation.navigate('chatscreen')}>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}> Ask a new question</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
