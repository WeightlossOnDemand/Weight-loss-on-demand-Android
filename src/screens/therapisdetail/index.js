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
  StyleSheet,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {CustomTextFiel} from '../../component/textFiled';
import {colors, sizes, fontSize, fontFamily} from '../../services';
import ladyy from '../../assets/assets/ladyy.jpg';
import calender from '../../assets/assets/calender.png';
import favourite from '../../assets/assets/favourite.jpeg';
import book from '../../assets/assets/book.png';
import question from '../../assets/assets/question.png';
import share from '../../assets/assets/share.png';

export const TherapistDetail = ({navigation}) => {
  const [show, setshow] = useState(false);

  const Toogle = () => {
    setshow(!show);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header dark={true} />
      </View>
      <ScrollView>
        <View style={styles.container1}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.hedtext}>BarBara Gormley,PhD</Text>
          </View>
          <View style={styles.flex}>
            <View>
              <Text style={styles.providertex}>Psychlogist</Text>
            </View>
            <View>
              <View style={styles.img}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: sizes.screenWidth * 0.5,
                  }}
                  source={ladyy}
                />
              </View>
            </View>
          </View>
          <View style={styles.flex3}>
           <TouchableOpacity onPress={()=>navigation.navigate('appointmentreqest')}>
           <View style={styles.avialbox}>
              <Text style={styles.tex}>Thus</Text>
              <Text style={styles.tex}>09/29</Text>
              <Text style={styles.tex}>10:30</Text>
            </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate('appointmentreqest')}>
           <View style={styles.avialbox}>
              <Text style={styles.tex}>Thus</Text>
              <Text style={styles.tex}>09/29</Text>
              <Text style={styles.tex}>10:30</Text>
            </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate('appointmentreqest')}>
           <View style={styles.avialbox}>
              <Text style={styles.tex}>Thus</Text>
              <Text style={styles.tex}>09/29</Text>
              <Text style={styles.tex}>10:30</Text>
            </View>
           </TouchableOpacity>
          </View>

         
          <View style={styles.crd}>
            <Text style={styles.providertex}>Patient</Text>
            <Text style={[styles.subhead, styles.border]}>
              Dr. Reddy absolutely loves being a primary care physician and
              focuses on keeping each individual she takes care of, as healthy
              as possible, both through prevention of illness and treatment of
              illness when it occurs. She embraces patients and their families,
              as full partners in health care.
            </Text>
            {show ? (
              <View>
                <Text style={[styles.subhead, styles.border]}>
                  She completed her Medical Degree from Gandhi Medical College,
                  Hyderabad, Andhra Pradesh, India, M.B.B.S. She completed her
                  Family Practice residency from The Brooklyn Hospital Center,
                  Member of the New York-Presbyterian Healthcare System,
                  affiliate of Weill Medical College of Cornell University.
                  Brooklyn, New York. She completed her Obstetrics Fellowship
                  from Santa Clara Valley Medical Center, San Jose, California.
                </Text>
                <Text style={[styles.subhead, styles.border]}>
                  Brooklyn, New York. She completed her Obstetrics Fellowship
                  from Santa Clara Valley Medical Center, San Jose, California.
                  She is Family Practice Board Certified physician. Besides
                  English she speaks Hindi, Telugu, and medical Spanish. She is
                  a member of the American Academy of Family Medicine.
                </Text>
              </View>
            ) : null}

            <View style={styles.borderbottom}></View>
            <View>
              {show ? (
                <TouchableOpacity onPress={Toogle}>
                  <Text style={styles.addanother}>READ LESS</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={Toogle}>
                  <Text style={styles.addanother}>READ MORE</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={styles.crd}>
            <Text style={styles.subhead}>focus Areas</Text>
            <Text style={styles.providertex}>Women'sHealth</Text>
          </View>
          <View style={styles.crd}>
            <Text style={styles.subhead}>Language</Text>
            <Text style={styles.providertex}>English Hindi</Text>
          </View>
   
         
          <View style={styles.crd}>
            <Text style={styles.subhead}>QUALIFICATIONS</Text>
            <Text style={styles.providertex}>Board-Certfied,Family Medicine</Text>
          </View>
          
        </View>
      </ScrollView>
      <View style={styles.buttnView}>
          <TouchableOpacity >
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>View Full Availbility</Text>
            </View>
          </TouchableOpacity>
        </View>
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
    paddingBottom:sizes.screenHeight*0.2
  },
  hedtext: {
    marginBottom: sizes.screenHeight * -0.02,
    fontSize: fontSize.h3,
    color: colors.black,
    fontWeight: 'bold',
  },
  hedtext1: {
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextHeading,
  },
  img: {
    marginTop:sizes.screenHeight*0.02,
    width: sizes.screenWidth * 0.5,
    height: sizes.screenHeight * 0.27,
  },
  flex: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  providertex: {
    top:sizes.screenHeight*0.02,
    marginBottom: sizes.screenHeight * 0.01,
    fontSize: fontSize.large,
    color: colors.gray,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextCondensed,
  },
  subhead: {
    fontSize: fontSize.large,
    color: colors.appBgColor2,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextLight,
  },
  flex2: {
    flexDirection: 'row',
    marginBottom: sizes.screenHeight * 0.02,
    alignItems: 'center',
  },
  litext: {
    fontSize: fontSize.large,
    color: colors.gray,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextLight,
    marginLeft: sizes.screenWidth * 0.03,
  },
  litext1: {
    fontSize: fontSize.large,
    color: colors.gray,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextLight,
  },
  litext3: {
    fontSize: fontSize.large,
    color: colors.secondary,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextLight,
  },

  imgicon: {
    width: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.04,
  },
  crd: {
    paddingBottom: sizes.screenHeight * 0.03,
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.0,
    borderRadius: sizes.screenWidth * 0.02,
    // height:sizes.screenHeight * 0.24,
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
  padding: {
    paddingRight: sizes.screenWidth * 0.1,
  },
  border: {
    fontSize: fontSize.h5,
    color: colors.gray,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextLight,
    // marginLeft:sizes.screenWidth*0.03,
  },
  borderbottom: {
    paddingTop: sizes.screenHeight * 0.03,

    borderBottomWidth: sizes.screenWidth * 0.002,
  },
  addanother: {
    paddingTop: sizes.screenHeight * 0.04,
    fontSize: fontSize.large,
    color: colors.secondary,
    fontWeight: 'bold',
  },
  flex3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: sizes.screenHeight * 0.03,
  },
  mt: {
    marginTop: sizes.screenHeight * 0.02,
  },
  avialbox: {
    width: sizes.screenWidth * 0.25,
    height: sizes.screenHeight * 0.12,
    borderWidth: sizes.screenWidth * 0.002,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.secondary,
  },
  tex: {
    fontSize: fontSize.large,
    color: colors.secondary,
    fontWeight: 'bold',
  },
  buttnView: {
    marginLeft: sizes.screenWidth * 0.06,
    // marginTop: sizes.screenHeight * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    top:sizes.screenHeight*0.9

  },
  buttonView: {
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.07,
    width: sizes.screenWidth * 0.90,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius:sizes.screenWidth*0.2
   
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextHeading,
    fontWeight: '600',
  },
});
