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
  Platform,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {CustomTextFiel} from '../../component/textFiled';
import {colors, sizes, fontSize} from '../../services';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {getallQuestion} from '../../services/utilities/api/auth';
import {useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';

export const ReviewHealthprofile = ({navigation, route}) => {
  const [Qa, setQa] = useState([]);
  const q1 = useSelector(state => state.q1);
  const q2 = useSelector(state => state.q2);
  const q3 = useSelector(state => state.q3);
  const q4 = useSelector(state => state.q4);
  const q5 = useSelector(state => state.q5);
  const q6 = useSelector(state => state.q6);
  const q7 = useSelector(state => state.q7);
  const q8 = useSelector(state => state.q8);
  const q9 = useSelector(state => state.q9);
  const q10 = useSelector(state => state.q10);
  const q11 = useSelector(state => state.q11);
  const q12 = useSelector(state => state.q12);
  const q13 = useSelector(state => state.q13);
  const q14 = useSelector(state => state.q14);
  const q15 = useSelector(state => state.q15);
  const q16 = useSelector(state => state.q16);
  const q17 = useSelector(state => state.q17);
  const q18 = useSelector(state => state.q18);
  const q19 = useSelector(state => state.q19);
  const q20 = useSelector(state => state.q20);
  const q21 = useSelector(state => state.q21);
  const q22 = useSelector(state => state.q22);
  const q23 = useSelector(state => state.q23);
  const q24 = useSelector(state => state.q24);
  const q25 = useSelector(state => state.q25);
  const q26 = useSelector(state => state.q26);
  const q27 = useSelector(state => state.q27);
  const q28 = useSelector(state => state.q28);
  const q29 = useSelector(state => state.q29);
  const q30 = useSelector(state => state.q30);
  const q31 = useSelector(state => state.q31);
  const q32 = useSelector(state => state.q32);
  const q33 = useSelector(state => state.q33);
  const q34 = useSelector(state => state.q34);
  const q35 = useSelector(state => state.q35);
  const q36 = useSelector(state => state.q36);
  const q37 = useSelector(state => state.q37);
  const q38 = useSelector(state => state.q38);
  const q39 = useSelector(state => state.q39);
  const q40 = useSelector(state => state.q40);
  const q41 = useSelector(state => state.q41);
  const q42 = useSelector(state => state.q42);
  const q43 = useSelector(state => state.q43);
  const q44 = useSelector(state => state.q44);
  const q45 = useSelector(state => state.q45);
  const q46 = useSelector(state => state.q46);
  const q47 = useSelector(state => state.q47);
  const q48 = useSelector(state => state.q48);
  const q49 = useSelector(state => state.q49);
  const q50 = useSelector(state => state.q50);

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
        <Header dark={true} title={'Please review your form'} />
      </View>

      <ScrollView>
        <View style={styles.container1}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('basicInfoscreenssettings', {
                to: 'healthprofilereview',
              })
            }>
            <View style={{flexDirection:'row'}}>
              <Text
                style={{
                  color: colors.black,
                  fontWeight: 'bold',
                  fontSize: fontSize.medium,
                }}>
                Please review your basic info as it will be shared with your
                conusltant.
                <Feather
                  name="edit"
                  color={colors.black}
                  style={Platform.OS !== 'ios' ? styles.icon : styles.iconIOS}
                />
              
              </Text>
              {/* <View>
                <Feather
                  name="edit"
                  color={colors.black}
                  style={Platform.OS !== 'ios' ? styles.icon : styles.iconIOS}
                />
              </View> */}
            </View>
          </TouchableOpacity>

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
              <Text style={styles.textttt}>
              Ans: {q12} ft,{q13} in
                {/* Ans: {q11} */}
                </Text>
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
                Ans: {q4}
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
                Ans:  {q5}
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

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('UserVisit', {
                slot: route?.params?.slot,
                trainer: route?.params?.trainer,
                appointByTrainer:
                  route?.params?.trainer && route?.params?.slot ? true : false,
                appointByTime:
                  !route?.params?.trainer && route?.params?.slot ? true : false,
                sessionStart:
                  !route?.params?.trainer && !route?.params?.slot
                    ? true
                    : false,
              })
            }>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Confirm</Text>
            </View>
          </TouchableOpacity>
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
    fontSize: fontSize.h6,
    // right: sizes.screenWidth * 0.35,
    // alignSelf:'center',
    // top: sizes.screenHeight * 0.025,
  },
  iconIOS: {
    fontSize: fontSize.h6,
    right: sizes.screenWidth * 0.24,
    top: sizes.screenHeight * 0.023,
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
