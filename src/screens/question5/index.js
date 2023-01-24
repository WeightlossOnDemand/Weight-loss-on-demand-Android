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
import {Question5} from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';

export default function Questionthree({navigation, route}) {
  const [CheckedFemale, setCheckedFemale] = React.useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [question, setquestion] = useState(route.params.question1);
  const [questiontwo, setquestiontwo] = useState(route.params.questions2);
  const [questionthree, setquestionthree] = useState('');
  const [Qa, setQa] = useState();
  const [Yes, setYes] = useState();
  const [no, setno] = useState();
  const [selectanswer5, setselectanswer5] = useState();
  const [StrengthTraining, setStrengthTraining] = useState();
  const [Cardio, setCardio] = useState();

  const dispatch = useDispatch();

  // console.log(route.params,"q3screen");
  useEffect(() => {
    getQuestions();
  }, []);
  // const q3=useSelector(state=>state.question5)
  const getQuestions = async () => {
    try {
      let response = await getQuestion(5);
      setQa(response.data.data[0].question);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmail = () => {
    dispatch(Question5(selectanswer5));
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
          <Text style={styles.text}>{Qa}</Text>
          <View style={styles.width}>
            <TouchableOpacity
              onPress={() => {
                setStrengthTraining(!StrengthTraining);
                setCardio(false);
                setselectanswer5('Strength Training');
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>Strength</Text>
                <RadioButton
                  onPress={() => {
                    setStrengthTraining(!StrengthTraining);
                    setCardio(false);
                    setselectanswer5('Strength Training');
                  }}
                  status={StrengthTraining ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setCardio(!Cardio);
                setStrengthTraining(false);
                setselectanswer5('Cardio');
                // setgender('Female');
                // setCheckedMale(false);
                // setCheckedOther(false);
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>Cardio</Text>
                <RadioButton
                  onPress={() => {
                    setCardio(!Cardio);
                    setStrengthTraining(false);
                    setselectanswer5('Cardio');
                    // setgender('Female');
                    // setCheckedMale(false);
                    // setCheckedOther(false);
                  }}
                  status={Cardio ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.paddingTop}>
            <TouchableOpacity
              onPress={handleEmail}
              disabled={selectanswer5 ? false : true}>
              <View
                style={selectanswer5 ? styles.buttonView : styles.disabledView}>
                <Text style={styles.buttonText}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
