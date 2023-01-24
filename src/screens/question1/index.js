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
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {styles} from './style';
import {RadioButton} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import {colors, sizes} from '../../services';
import Modal from 'react-native-modal';
import {openInbox} from 'react-native-email-link';
import {CustomTextFiel} from '../../component/textFiled';
import {getQuestion} from '../../services/utilities/api/auth';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Question1, Question2, Question3, Question4} from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import Slider from '@react-native-community/slider';

export default function Question({navigation, route}) {
  const [Onceaweek, setOnceaweek] = useState(false);
  const [question, setquestion] = useState();
  const [Qa, setQa] = useState(
    'List any health problems and physical limitations',
  );
  const [Twiceaweek, setTwiceaweek] = useState(false);
  const [Daily, setDaily] = useState(false);
  const [restFul, setRestFul] = useState('');
  const [restFulYes, setRestFulYes] = useState(false);
  const [restFulNo, setRestFulNo] = useState(false);
  const [selectanswer, setselectanswer] = useState();
  const [stressRate, setStressRate] = useState(0);
  const [healthProblem, setHealthProblem] = useState('');
  const [allergies, setAllergies] = useState('');
  const [medicationDos, setMedicationDos] = useState('');
  const [copeStress, setCopeStress] = useState('');
  const [listCultural, setListCultural] = useState('');
  const [lifestyleRate, setLifestyleRate] = useState(0);
  const [confidenceRate, setConfidenceRate] = useState(0);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [lowestWeight, setLowestWeight] = useState('');
  const [highestWeight, sethighestWeight] = useState('');
  const [lowestWeight1, setLowestWeight1] = useState('');
  const [highestWeight1, sethighestWeight1] = useState('');

  const [weightChanges, setWeightChanges] = useState('');
  const [dietedPast, setDietedPast] = useState('');
  const [hardLose, setHardLose] = useState('');
  const [helpLose, setHelpLose] = useState('');
  const [howMuch, setHowMuch] = useState('');
  const [benefit, setBenefit] = useState('');
  const [activeThing, setActiveThing] = useState('');
  const [regularExercise, setRegularExercise] = useState('');
  const [days, setDays] = useState('');
  const [minutes, setMinutes] = useState('');
  const [intensityLevel, setIntensityLevel] = useState('');
  const [fitTime, setFitTime] = useState('');
  const [phyLimitations, setPhyLimitations] = useState('');
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
      let response = await getQuestion(1);
      console.log(response.data.data[0].question);
      // setQa(response.data.data[0].question);
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuestion = () => {
    // console.log(question,'q1param');

    dispatch(
      Question1(
        healthProblem,
        allergies,
        medicationDos,
        lowestWeight1,
        highestWeight1,
        copeStress,
        listCultural,
        lifestyleRate,
        confidenceRate,
      ),
    );
    handleq2();
    handleq3();
    handleq4();
  };

  const handleq2 = () => {
    dispatch(
      Question2(
        weight,
        height,
        lowestWeight,
        highestWeight,
        weightChanges,
        dietedPast,
        hardLose,
        helpLose,
        howMuch,
        benefit,
      ),
    );
  };
  const handleq3 = () => {
    dispatch(
      Question3(
        activeThing,
        regularExercise,
        days,
        minutes,
        intensityLevel,
        fitTime,
        phyLimitations,
      ),
    );
  };
  const handleq4 = () => {
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
      <Header title={'Weight Loss Form '}  />
      <KeyboardAvoidingView behavior="height">
        <ScrollView style={styles.color}>
          <View style={styles.padding}>
            <Text style={styles.text}>General Health Information</Text>
            <View style={styles.paddingTop}>
              <Text style={styles.text2}>
                1) List any health problems and physical limitations
              </Text>
              <View>
                <TextInput
                  mode="contain"
                  activeUnderlineColor={colors.secondary}
                  style={styles.field}
                  multiline={true}

                  onChangeText={text => setHealthProblem(text)}
                  value={healthProblem}
                />
              </View>
            </View>

            <View style={styles.paddingTop}>
              <Text style={styles.text2}>
                2) List All Medications and their dosage
              </Text>
              <View>
                <TextInput
                  mode="contain"
                  activeUnderlineColor={colors.secondary}
                  style={styles.field}
                  multiline={true}
                  // numberOfLines={4}
                  onChangeText={text => setMedicationDos(text)}
                  value={medicationDos}
                />
              </View>
            </View>
          </View>
          <View style={styles.padding}>
            <Text style={styles.text}>Weight Information</Text>
            <View style={styles.paddingTop}>
              <Text style={styles.text2}>3) Current Weight</Text>
              <View>
                <TextInput
                  mode="contain"
                  label={'lbs'}
                  activeUnderlineColor={colors.secondary}
                  style={styles.field}
                  onChangeText={text => setWeight(text)}
                  value={weight}
                />
              </View>
            </View>
            <View style={styles.paddingTop}>
              <Text style={styles.text2}>4) Height</Text>
              <View style={styles.row}>
                <TextInput
                  mode="contain"
                  label={'ft'}
                  activeUnderlineColor={colors.secondary}
                  style={styles.field2}
                  onChangeText={text => setLowestWeight(text)}
                  value={lowestWeight}
                />
                <TextInput
                  mode="contain"
                  label={'in'}
                  activeUnderlineColor={colors.secondary}
                  style={styles.field2}
                  onChangeText={text => sethighestWeight(text)}
                  value={highestWeight}
                />
              </View>
              {/* <View>
                <TextInput
                  mode="contain"
                  activeUnderlineColor={colors.secondary}
                  style={styles.field}
                  onChangeText={text => setHeight(text)}
                  value={height}
                />
              </View> */}
            </View>
            <View style={styles.paddingTop}>
              <Text style={styles.text2}>
                5) What was your lowest adult weight?
              </Text>
               <View>
                <TextInput
                  mode="contain"
                  label={'lbs'}
                  activeUnderlineColor={colors.secondary}
                  style={styles.field}
                  onChangeText={text => setLowestWeight1(text)}
                  value={lowestWeight1}
                />
              </View>
            </View>
            <View style={styles.paddingTop}>
              <Text style={styles.text2}>
                6) What was your highest adult weight?
              </Text>
              <View>
                <TextInput
                  mode="contain"
                  label={'lbs'}
                  activeUnderlineColor={colors.secondary}
                  style={styles.field}
                  onChangeText={text => sethighestWeight1(text)}
                  value={highestWeight1}
                />
              </View>
             
            </View>
            <View style={styles.paddingTop}>
              <Text style={styles.text2}>
                7) Describe any weight changes (gain or loss) in the past 2
                years
              </Text>
              <View>
                <TextInput
                  mode="contain"
                  activeUnderlineColor={colors.secondary}
                  style={styles.field}
                  multiline={true}
                  onChangeText={text => setWeightChanges(text)}
                  value={weightChanges}
                />
              </View>
            </View>
            <View style={styles.paddingTop}>
              <Text style={styles.text2}>
                8) Have you dieted in the past for weight loss? (No/Yes) If yes,
                please indicate what you have done
              </Text>
              <View>
                <TextInput
                  mode="contain"
                  activeUnderlineColor={colors.secondary}
                  style={styles.field}
                  multiline={true}
                  onChangeText={text => setDietedPast(text)}
                  value={dietedPast}
                />
              </View>
            </View>

            <View style={styles.paddingTop}>
              <Text style={styles.text2}>
                9) How much weight would you like to lose?
              </Text>
              <View>
                <TextInput
                  mode="contain"
                  label={'lbs'}
                  activeUnderlineColor={colors.secondary}
                  style={styles.field}
                  multiline={true}
                  onChangeText={text => setHowMuch(text)}
                  value={howMuch}
                />
              </View>
            </View>
            <View style={styles.paddingTop}>
              <Text style={styles.text2}>
                10) How will you benefit from this weight loss?
              </Text>
              <View>
                <TextInput
                  mode="contain"
                  activeUnderlineColor={colors.secondary}
                  style={styles.field}
                  multiline={true}
                  onChangeText={text => setBenefit(text)}
                  value={benefit}
                />
              </View>
            </View>
            <View style={styles.paddingTop}>
              <Text style={styles.text}>Physical Activity Information</Text>

              <View style={styles.paddingTop}>
                <Text style={styles.text2}>
                  11) What, if any, regular exercises do you do?
                </Text>
                <View>
                  <TextInput
                    mode="contain"
                    activeUnderlineColor={colors.secondary}
                    style={styles.field}
                    multiline={true}
                    onChangeText={text => setRegularExercise(text)}
                    value={regularExercise}
                  />
                </View>
              </View>
            </View>
            <View style={styles.paddingTop}>
              <Text style={styles.text}>Nutrition Information</Text>

              <View style={styles.paddingTop}>
                <Text style={styles.text2}>
                  12) Who plans the meals at home?
                </Text>
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
                <Text style={styles.text2}>
                  13) Who prepares the meals at home?
                </Text>
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
            </View>
            <View style={styles.paddingTop}>
              <TouchableOpacity onPress={handleQuestion}>
                <View style={styles.buttonView}>
                  <Text style={styles.buttonText}>Submit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottom2}></View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
