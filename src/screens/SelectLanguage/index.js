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
import {styles} from './style';
import {RadioButton} from 'react-native-paper';
import {colors} from '../../services';

export default function SelectLanguage({navigation}) {
  const [english, setEnglish] = useState(false);
  const [french, setFrench] = useState(false);
  const [german, setGerman] = useState(false);
  const [hindi, setHindi] = useState(false);
  const [russian, setRussian] = useState(false);
  const [spanish, setSpanish] = useState(false);
  const [vietnamese, setVietnamese] = useState(false);

  const handleEnglish = () => {
    setEnglish(!english);
    setTimeout(() => {
      navigation.navigate('Filter', {language: 'English'});
    }, 200);
  };

  const handleFrench = () => {
    setFrench(!french);
    setTimeout(() => {
      navigation.navigate('Filter', {language: 'French'});
    }, 200);
  };
  const handleGerman = () => {
    setGerman(!german);
    setTimeout(() => {
      navigation.navigate('Filter', {language: 'German'});
    }, 200);
  };
  const handleHindi = () => {
    setHindi(!hindi);
    setTimeout(() => {
      navigation.navigate('Filter', {language: 'Hindi'});
    }, 200);
  };
  const handleRussian = () => {
    setRussian(!russian);
    setTimeout(() => {
      navigation.navigate('Filter', {language: 'Russian'});
    }, 200);
  };
  const handleSpanish = () => {
    setSpanish(!spanish);
    setTimeout(() => {
      navigation.navigate('Filter', {language: 'Spanish'});
    }, 200);
  };
  const handleVietnamese = () => {
    setVietnamese(!vietnamese);
    setTimeout(() => {
      navigation.navigate('Filter', {language: 'Vietnamese'});
    }, 200);
  };
  return (
    <SafeAreaView>
      <Header dark={true} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.addPaymentText}>Select language</Text>
        </View>
        <TouchableOpacity onPress={handleEnglish}>
          <View style={[styles.row, styles.card]}>
            <Text style={[styles.cardText, styles.italic]}>English</Text>
            <View>
              <RadioButton
                status={english ? 'checked' : 'unchecked'}
                color={'#be1d2d'}
                uncheckColor={colors.secondary}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFrench}>
          <View style={[styles.row, styles.card]}>
            <Text style={[styles.cardText, styles.italic]}>French</Text>
            <View>
              <RadioButton
                status={french ? 'checked' : 'unchecked'}
                color={'#be1d2d'}
                uncheckColor={colors.secondary}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGerman}>
          <View style={[styles.row, styles.card]}>
            <Text style={[styles.cardText, styles.italic]}>German</Text>
            <View>
              <RadioButton
                status={german ? 'checked' : 'unchecked'}
                color={'#be1d2d'}
                uncheckColor={colors.secondary}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleHindi}>
          <View style={[styles.row, styles.card]}>
            <Text style={[styles.cardText, styles.italic]}>Hindi</Text>
            <View>
              <RadioButton
                status={hindi ? 'checked' : 'unchecked'}
                color={'#be1d2d'}
                uncheckColor={colors.secondary}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRussian}>
          <View style={[styles.row, styles.card]}>
            <Text style={[styles.cardText, styles.italic]}>Russian</Text>
            <View>
              <RadioButton
                status={russian ? 'checked' : 'unchecked'}
                color={'#be1d2d'}
                uncheckColor={colors.secondary}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSpanish}>
          <View style={[styles.row, styles.card]}>
            <Text style={[styles.cardText, styles.italic]}>Spanish</Text>
            <View>
              <RadioButton
                status={spanish ? 'checked' : 'unchecked'}
                color={'#be1d2d'}
                uncheckColor={colors.secondary}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleVietnamese}>
          <View style={[styles.row, styles.card]}>
            <Text style={[styles.cardText, styles.italic]}>Vietnamese</Text>
            <View>
              <RadioButton
                status={vietnamese ? 'checked' : 'unchecked'}
                color={'#be1d2d'}
                uncheckColor={colors.secondary}
              />
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
