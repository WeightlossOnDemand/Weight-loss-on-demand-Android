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
import images from '../../services/utilities/images';
import Modal from 'react-native-modal';
import {styles} from './style';
export default function LetsFindTherapist({navigation}) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView>
      <Header dark={true} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.addPaymentText}>
            Let's find a therapist that's a good fit for you
          </Text>
          <View style={styles.paddingTop}>
            <Text style={styles.text}>
              Finding a therapist can feel overwhelming at times. To help match
              you to therapists who fit your needs and preferences, we have a
              few questions to ask you.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
              <View style={styles.buttonView}>
                <Text style={styles.buttonText}> Help me choose</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.paddingTop2}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Choosetherapist')}>
              <View>
                <Text style={styles.redBtn}>No thanks, see all therapists</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {isModalVisible && (
          <Modal style={styles.modalView} isVisible={isModalVisible}>
            <View style={styles.texcon}>
              <Text style={styles.text111}>
                We encountered an needs and ene unexpected error.
              </Text>
            </View>
            <View style={styles.texcon1}>
              <Text style={styles.text1}>
                We apologize for the inconvenience and have sent a note to our
                technical team to investigate. In the meantime, please browse
                our full list of available therapists to find the best match.
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setIsModalVisible(false);
                  setTimeout(() => {
                    navigation.navigate('Choosetherapist');
                  }, 200);
                }}>
                <View style={styles.buttonView}>
                  <Text style={styles.buttonText}>
                    View all available therapists
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
