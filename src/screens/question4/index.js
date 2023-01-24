import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {styles} from './style';
import {TextInput} from 'react-native-paper';
import {colors, sizes} from '../../services';
import Modal from 'react-native-modal';
import {openInbox} from 'react-native-email-link';
import {CustomTextFiel} from '../../component/textFiled';
import {getQuestion} from '../../services/utilities/api/auth';
import {RadioButton} from 'react-native-paper';
import {Question4} from '../../store/actions';
import {useDispatch} from 'react-redux';

export default function Questionfour({navigation, route}) {
  const [CheckedFemale, setCheckedFemale] = React.useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [question, setquestion] = useState(route.params.question1);
  const [questiontwo, setquestiontwo] = useState(route.params.questions2);
  const [questionthree, setquestionthree] = useState(route.params.questions3);
  const [questionfour, setquestionfour] = useState();
  const [StrengthTraining, setStrengthTraining] = useState(false);
  const [Yoga, setYoga] = useState(false);
  const [Aerobicsanddance, setAerobicsanddance] = useState(false);
  const [Pilates, setPilates] = useState(false);
  const [selectanswer4, setselectanswer4] = useState();
  const [Qa, setQa] = useState();
  const [breakfastTime, setBreakfastTime] = useState('');
  const [breakfastEaten, setBreakfastEaten] = useState('');
  const [breakfastFood, setBreakfastFood] = useState('');
  const [snackTime, setSnackTime] = useState('');
  const [snackEaten, setSnackEaten] = useState('');
  const [snackFood, setSnackFood] = useState('');
  const [lunchTime, setLunchTime] = useState('');
  const [lunchEaten, setLunchEaten] = useState('');
  const [lunchFood, setLunchFood] = useState('');
  const [snackTime2, setSnackTime2] = useState('');
  const [snackEaten2, setSnackEaten2] = useState('');
  const [snackFood2, setSnackFood2] = useState('');
  const [dinnerTime, setDinnerTime] = useState('');
  const [dinnerEaten, setDinnerEaten] = useState('');
  const [dinnerFood, setDinnerFood] = useState('');
  const [snackTime3, setSnackTime3] = useState('');
  const [snackEaten3, setSnackEaten3] = useState('');
  const [snackFood3, setSnackFood3] = useState('');
  const [fastFood, setFastFood] = useState('');
  const [whichGrocery, setWhichGrocery] = useState('');
  const [groceryShopping, setGroceryShopping] = useState('');
  const [whoPlans, setWhoPlans] = useState('');
  const [whoPrepare, setWhoPrepare] = useState('');
  const [dietChange, setDietChange] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    try {
      let response = await getQuestion(4);
      setQa(response.data.data[0].question);
    } catch (error) {
      console.log(error);
    }
  };
  const handleNext = () => {
    dispatch(
      Question4(
        breakfastTime,
        breakfastEaten,
        breakfastFood,
        snackTime,
        snackEaten,
        snackFood,
        lunchTime,
        lunchEaten,
        lunchFood,
        snackTime2,
        snackEaten2,
        snackFood2,
        dinnerTime,
        dinnerEaten,
        dinnerFood,
        snackTime3,
        snackEaten3,
        snackFood3,
        fastFood,
        whichGrocery,
        groceryShopping,
        whoPlans,
        whoPrepare,
        dietChange,
      ),
    );
  
    navigation.navigate('healthprofilereview', {
      slot: route?.params?.slot,
      trainer: route?.params?.trainer,
    });
  };

  return (
    <SafeAreaView>
      <Header title={'Questionnaires '} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.text}>Nutrition Information</Text>
         
          <View style={styles.paddingTop}>
            <Text style={styles.text2}>Who plans the meals at home?</Text>
            <View>
              <TextInput
                mode="contain"
                activeUnderlineColor={colors.secondary}
                style={styles.field}
                onChangeText={text => setWhoPlans(text)}
                value={whoPlans}
              />
            </View>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text2}>Who prepares the meals at home?</Text>
            <View>
              <TextInput
                mode="contain"
                activeUnderlineColor={colors.secondary}
                style={styles.field}
                onChangeText={text => setWhoPrepare(text)}
                value={whoPrepare}
              />
            </View>
          </View>
         
          <View style={styles.paddingTop}>
            <TouchableOpacity onPress={handleNext}>
              <View style={styles.buttonView}>
                <Text style={styles.buttonText}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottom2}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
