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
import {styles} from './style';
import {RadioButton} from 'react-native-paper';
import {colors} from '../../services';
import {getAllTrainers} from '../../services/utilities/api/auth';
import {useIsFocused} from '@react-navigation/native';

export default function selectTrainer({navigation}) {
  const [english, setEnglish] = useState(false);
  const [french, setFrench] = useState(false);
  const [german, setGerman] = useState(false);
  const [hindi, setHindi] = useState(false);
  const [russian, setRussian] = useState(false);
  const [spanish, setSpanish] = useState(false);
  const [vietnamese, setVietnamese] = useState(false);
  const [value,setValue] = useState("")
  const [trainer, setTrainer] = useState([]);
  const isVisible = useIsFocused();

  const handleEnglish = (item) => {
    setEnglish(!english);
    setValue(item)
    setTimeout(() => {
      navigation.navigate('Filter', {area: item});
    }, 200);
  };

  
  useEffect(() => {
    getTrainers();
  }, [isVisible]);
  const getTrainers = async () => {
    try {
      let response = await getAllTrainers();
      // setTrainer(response.data.data);
      var newArr = [];
      response.data.data.forEach(item => {
        if (newArr.some(el => el.type === item.type) === false) {
          newArr.push(item);
        }
      });
      setTrainer(newArr);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <Header dark={true} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.addPaymentText}>Select Consultant</Text>
        </View>
        {trainer?.map((item, index) => {
          return (
            <TouchableOpacity onPress={() => handleEnglish(item.type)}>
              <View style={[styles.row, styles.card]}>
                <Text style={[styles.cardText, styles.italic]}>
                  {item.type}
                </Text>
                <View>
                  <RadioButton
                    status={value== item.type ? 'checked' : 'unchecked'}
                    color={'#be1d2d'}
                    uncheckColor={colors.secondary}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}

        {/* <TouchableOpacity onPress={handleFrench}>
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
        </TouchableOpacity> */}
      </ScrollView>
    </SafeAreaView>
  );
}
