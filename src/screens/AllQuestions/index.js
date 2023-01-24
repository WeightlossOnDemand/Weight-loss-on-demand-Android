import React, {useRef, useState, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {CustomTextFiel} from '../../component/textFiled';
import {colors, sizes, fontSize} from '../../services';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {getallQuestion} from '../../services/utilities/api/auth';
import {useSelector} from 'react-redux';

export const AllQuestions = ({navigation, route}) => {
  const [Qa, setQa] = useState([]);
  console.log(route?.params?.questions);
  const q1 = route?.params?.questions.response_1;
  const q2 = route?.params?.questions.response_2;
  const q3 = route?.params?.questions.response_3;
  const q4 = route?.params?.questions.response_4;
  const q5 = route?.params?.questions.response_5;
  const q6 = route?.params?.questions.response_6;
  const q7 = route?.params?.questions.response_7;
  const q8 = route?.params?.questions.response_8;
  const q9 = route?.params?.questions.response_9;
  const q10 = route?.params?.questions.response_10;
  const q11 = route?.params?.questions.response_11;
  const q12 = route?.params?.questions.response_12;
  const q13 = route?.params?.questions.response_13;
  const q14 = route?.params?.questions.response_14;
  const q15 = route?.params?.questions.response_15;
  const q16 = route?.params?.questions.response_16;
  const q17 = route?.params?.questions.response_17;
  const q18 = route?.params?.questions.response_18;
  const q19 = route?.params?.questions.response_19;
  const q20 = route?.params?.questions.response_20;
  const q21 = route?.params?.questions.response_21;
  const q22 = route?.params?.questions.response_22;
  const q23 = route?.params?.questions.response_23;
  const q24 = route?.params?.questions.response_24;
  const q25 = route?.params?.questions.response_25;
  const q26 = route?.params?.questions.response_26;
  const q27 = route?.params?.questions.response_27;
  const q28 = route?.params?.questions.response_28;
  const q29 = route?.params?.questions.response_29;
  const q30 = route?.params?.questions.response_30;
  const q31 = route?.params?.questions.response_31;
  const q32 = route?.params?.questions.response_32;
  const q33 = route?.params?.questions.response_33;
  const q34 = route?.params?.questions.response_34;
  const q35 = route?.params?.questions.response_35;
  const q36 = route?.params?.questions.response_36;
  const q37 = route?.params?.questions.response_37;
  const q38 = route?.params?.questions.response_38;
  const q39 = route?.params?.questions.response_39;
  const q40 = route?.params?.questions.response_40;
  const q41 = route?.params?.questions.response_41;
  const q42 = route?.params?.questions.response_42;
  const q43 = route?.params?.questions.response_43;
  const q44 = route?.params?.questions.response_44;
  const q45 = route?.params?.questions.response_45;
  const q46 = route?.params?.questions.response_46;
  const q47 = route?.params?.questions.response_47;
  const q48 = route?.params?.questions.response_48;
  const q49 = route?.params?.questions.response_49;
  const q50 = route?.params?.questions.response_50;

  console.log(q1, q2, q3, q4, q5, '==>');

  useEffect(() => {
    getallQuestions();
  }, []);
  const getallQuestions = async () => {
    try {
      let response = await getallQuestion();
      setQa(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header dark={true} />
      </View>
      <ScrollView>
        <View style={styles.container1}>
          <View>
            <Text style={styles.hedtext}>Client questions</Text>
          </View>
          <View style={styles.pa}>
            <View style={styles.box}>
              <View style={styles.borderrb}>
                <Text style={styles.textttt}>
                  1) List any health problems and physical limitations
                </Text>
              </View>
              <View style={styles.borderrb}>
                <Text style={styles.textttt}>Ans: {q1}</Text>
              </View>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.borderrb}>
              <Text style={styles.textttt}>
                2) List All Medications and their dosage
              </Text>
            </View>
            <View style={styles.borderrb}>
              <Text style={styles.textttt}>Ans: {q3}</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.borderrb}>
              <Text style={styles.textttt}>3) Current Weight</Text>
            </View>
            <View style={styles.borderrb}>
              <Text style={styles.textttt}>Ans: {q10}</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.borderrb}>
              <Text style={styles.textttt}>4) Height</Text>
            </View>
            <View style={styles.borderrb}>
              <Text style={styles.textttt}>Ans: {q11}</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.borderrb}>
              <Text style={styles.textttt}>
                5) What was your lowest adult weight?
              </Text>
            </View>
            <View style={styles.borderrb}>
              <Text style={styles.textttt}>
                Ans: {q12} ft , {q13} in
              </Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.borderrb}>
              <Text style={styles.textttt}>
                6) What was your highest adult weight?
              </Text>
            </View>
            <View style={styles.borderrb}>
              <Text style={styles.textttt}>
                Ans: {q4}ft , {q5}in
              </Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.borderrb}>
              <Text style={styles.textttt}>
                7) Describe any weight changes (gain or loss) in the past 2
                years
              </Text>
            </View>
            <View style={styles.borderrb}>
              <Text style={styles.textttt}>Ans: {q14}</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.borderrb}>
              <Text style={styles.textttt}>
                8) Have you dieted in the past for weight loss? (No/Yes) If yes,
                please indicate what you have done
              </Text>
            </View>
            <View style={styles.borderrb}>
              <Text style={styles.textttt}>Ans: {q15}</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.borderrb}>
              <Text style={styles.textttt}>
                9) How much weight would you like to lose?
              </Text>
            </View>
            <View style={styles.borderrb}>
              <Text style={styles.textttt}>Ans: {q18}</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.borderrb}>
              <Text style={styles.textttt}>
                10) How will you benefit from this weight loss?
              </Text>
            </View>
            <View style={styles.borderrb}>
              <Text style={styles.textttt}>Ans: {q19}</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.borderrb}>
              <Text style={styles.textttt}>
                11) What, if any, regular exercises do you do?
              </Text>
            </View>
            <View style={styles.borderrb}>
              <Text style={styles.textttt}>Ans: {q21}</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.borderrb}>
              <Text style={styles.textttt}>
                12) Who plans the meals at home?
              </Text>
            </View>
            <View style={styles.borderrb}>
              <Text style={styles.textttt}>Ans: {q48}</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.borderrb}>
              <Text style={styles.textttt}>
                13) Who prepares the meals at home?
              </Text>
            </View>
            <View style={styles.borderrb}>
              <Text style={styles.textttt}>Ans: {q49}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container1: {
    padding: sizes.screenWidth * 0.05,
  },
  hedtext: {
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight: 'bold',
  },
  hedtext1: {
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: 'bold',
  },
  hedtext2: {
    fontSize: fontSize.medium,
    color: colors.black,
    fontWeight: 'bold',
  },
  hedtext2: {
    top: sizes.screenHeight * 0.02,
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: 'bold',
  },
  hedtextcon: {
    marginTop: sizes.screenHeight * 0.05,
  },
  buttnView: {
    // marginRight:sizes.screenWidth*0.06,
    marginTop: sizes.screenHeight * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
    fontWeight: 'bold',
  },
  buttonView: {
    marginTop: sizes.screenHeight * 0.02,
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.92,
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: sizes.screenWidth * 0.2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inonecon: {
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    width: sizes.screenWidth * 0.94,
  },
  twoitem: {
    right: sizes.screenWidth * 0.03,
    marginBottom: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.9,
  },

  icon: {
    position: 'absolute',
    // left:sizes.screenWidth*0.3,
    // top:sizes.screenHeight *0.03,
    fontSize: fontSize.h2,
    // flexDirection:'row'
  },
  te: {
    top: sizes.screenHeight * 0.02,
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: 'bold',
  },
  addanother: {
    paddingTop: sizes.screenHeight * 0.02,
    fontSize: fontSize.large,
    color: colors.secondary,
    fontWeight: 'bold',
  },
  box: {
    marginBottom: sizes.screenHeight * 0.03,
    borderRadius: sizes.screenWidth * 0.02,
    height: sizes.screenHeight * 0.24,
    width: sizes.screenWidth * 0.9,
    borderWidth: 1,
    borderColor: colors.lightGray,
    padding: sizes.screenWidth * 0.04,
    shadowColor: '#000',
    backgroundColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textttt: {
    paddingTop: sizes.screenHeight * 0.02,
    paddingBottom: sizes.screenHeight * 0.02,
    fontSize: fontSize.large,
    color: colors.black,
  },
  borderrb: {
    borderColor: colors.gray,
    //    height:sizes.screenHeight * 0.05,
    borderBottomWidth: 1,
  },

  pa: {
    paddingTop: sizes.screenHeight * 0.05,
  },
  b2: {
    height: sizes.screenHeight * 0.26,
    width: sizes.screenWidth * 0.9,
  },
});
