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
import Modal from 'react-native-modal';
import {styles} from './style';
import Spinner from 'react-native-spinkit';
import {colors} from '../../services';
import {useNavigation} from '@react-navigation/native';

export default function Error({title, message, screen}) {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.color}>
        {isModalVisible && (
          <Modal style={styles.modalView} isVisible={isModalVisible}>
            <View style={styles.texcon}>
              <Text style={styles.text111}>{title}</Text>
            </View>
            <View style={styles.texcon1}>
              <Text style={styles.text1}>{message}</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  screen
                    ? navigation.navigate(screen)
                    : setIsModalVisible(false);
                }}>
                <View style={styles.buttonView}>
                  <Text style={styles.buttonText}>OK</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
        )}
      </View>
    </SafeAreaView>
  );
}
