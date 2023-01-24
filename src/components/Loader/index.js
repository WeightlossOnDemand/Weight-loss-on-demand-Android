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
import { colors } from '../../services';
export default function Loader() {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView>
      <View style={styles.color}>
        {isModalVisible && (
          <Modal style={styles.modalView} isVisible={isModalVisible}>
            <View style={styles.loader}>
              <Spinner
                style={styles.spinner}
                isVisible={true}
                size={50}
                type={"Circle"}
                color={colors.white}
              />
              
            </View>
          </Modal>
        )}
      </View>
    </SafeAreaView>
  );
}
