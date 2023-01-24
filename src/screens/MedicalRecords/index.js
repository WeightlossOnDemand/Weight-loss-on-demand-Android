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
  Linking
} from 'react-native';
import Header from '../../components/Header';
import {colors} from '../../services';
import images from '../../services/utilities/images';
import {styles} from './style';
export default function MedicalRecords({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header title={'Medical Records'} />
        </View>
        <View style={styles.padding}>
          <Text style={styles.text}>
            Automatically connect with your treating providers at participating
            health systems to send and receive records. This keeps all of your
            treating providers aware of any medical or therapist / mental health
            visits or updates to your health profile.
          </Text>
        </View>
        <View style={styles.padding}>
          <View style={[styles.row, styles.justifyCenter]}>
            <Text style={styles.medicalText}>Share Medical Records</Text>
            <View>
              <Switch
                trackColor={{false: '#767577', true: colors.secondary}}
                thumbColor={isEnabled ? colors.primary : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
        </View>
        <View style={styles.padding}>
          <View style={[styles.row, styles.justifyCenter]}>
            <Text style={styles.medicalText2}>
              Share Therapist / Mental Health Records
            </Text>
            <View>
              <Switch
                trackColor={{false: '#767577', true: colors.secondary}}
                thumbColor={isEnabled2 ? colors.primary : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch2}
                value={isEnabled2}
              />
            </View>
          </View>
          <View style={[styles.left, styles.top]}>
            <Text style={styles.head}>Need more information?</Text>
          </View>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("HowInfoShare")}>
          <View style={[styles.row, styles.card]}>
            <Text style={styles.cardText}>Learn how your information is shared</Text>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("TermsAndConditions")}>
          <View style={[styles.row, styles.card]}>
            <Text style={styles.cardText}>View Members Services Agreement</Text>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
