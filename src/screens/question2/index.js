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
import {RadioButton} from 'react-native-paper';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {styles} from './style';
import {TextInput} from 'react-native-paper';
import {colors, sizes} from '../../services';
import Modal from 'react-native-modal';
import {openInbox} from 'react-native-email-link';
import {CustomTextFiel} from '../../component/textFiled';
import {getQuestion} from '../../services/utilities/api/auth';
import {Question2} from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';

export default function Questiontwo({navigation, route}) {
  const [Morning, setMorning] = React.useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [questiontwo, setquestiontwo] = useState();
  const [question, setquestion] = useState(route?.params?.selectanswer);
  const [Qa, setQa] = useState();
  const [Afternoon, setAfternoon] = useState();
  const [Evening, setEvening] = useState();
  const [Night, setNight] = useState();
  const [selectanswer1, setselectanswer1] = useState();
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [lowestWeight, setLowestWeight] = useState('');
  const [highestWeight, sethighestWeight] = useState('');
  const [weightChanges, setWeightChanges] = useState('');
  const [dietedPast, setDietedPast] = useState('');
  const [hardLose, setHardLose] = useState('');
  const [helpLose, setHelpLose] = useState('');
  const [howMuch, setHowMuch] = useState('');
  const [benefit, setBenefit] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    try {
      let response = await getQuestion(2);
      // setQa(response.data.data[0].question);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(question,"question");
  // console.log('question2', {question1: question});
  // const q2=useSelector(state =>state.question2)
  // console.log(q2,'====>q2');
  const handleNext = () => {
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
    navigation.navigate('question3', {
      slot: route?.params?.slot,
      trainer: route?.params?.trainer,
    });
  };
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  return (
    <SafeAreaView>
      <Header title={'Questionnaires '} />
      <KeyboardAvoidingView behavior="height">
        <ScrollView style={styles.color}>
          <View style={styles.padding}>
            <Text style={styles.text}>Weight Information</Text>
            <View style={styles.paddingTop}>
              <Text style={styles.text2}>Current Weight</Text>
              <View>
                <TextInput
                  mode="contain"
                  activeUnderlineColor={colors.secondary}
                  style={styles.field}
                  onChangeText={text => setWeight(text)}
                  value={weight}
                />
              </View>
            </View>
            <View style={styles.paddingTop}>
              <Text style={styles.text2}>Height</Text>
              <View>
                <TextInput
                  mode="contain"
                  activeUnderlineColor={colors.secondary}
                  style={styles.field}
                  onChangeText={text => setHeight(text)}
                  value={height}
                />
              </View>
            </View>
            <View style={styles.paddingTop}>
              <Text style={styles.text2}>
                What was your lowest and highest adult weight?
              </Text>
              <View style={styles.row}>
                <TextInput
                  mode="contain"
                  label={'lb'}
                  activeUnderlineColor={colors.secondary}
                  style={styles.field2}
                  onChangeText={text => setLowestWeight(text)}
                  value={lowestWeight}
                />
                <TextInput
                  mode="contain"
                  label={'lb'}
                  activeUnderlineColor={colors.secondary}
                  style={styles.field2}
                  onChangeText={text => sethighestWeight(text)}
                  value={highestWeight}
                />
              </View>
            </View>
            <View style={styles.paddingTop}>
              <Text style={styles.text2}>
                Describe any weight changes (gain or loss) in the past 2 years
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
                Have you dieted in the past for weight loss? (No/Yes) If yes,
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
                How much weight would you like to lose?
              </Text>
              <View>
                <TextInput
                  mode="contain"
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
                How will you benefit from this weight loss?
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
              <TouchableOpacity
                onPress={handleNext}
                // disabled={selectanswer1 ? false : true}
              >
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
