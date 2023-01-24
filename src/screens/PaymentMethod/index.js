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
import {styles} from './style';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {colors, sizes} from '../../services';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo';
import WebView from 'react-native-webview';
import {useSelector} from 'react-redux';

export default function PaymentMethod({navigation}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [payPal, setPayPal] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header title={'Payment Method'} />
        </View>
        <View style={styles.padding}>
          <Text style={styles.addPaymentText}>Add Payment Method</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AddPaymentMethod', {to: 'Setting'})
          }>
          <View style={[styles.row, styles.card]}>
            <Fontisto name="credit-card" color={colors.secondary} size={25} />
            <Text style={styles.cardText}>{'   '}Debit or Credit Card</Text>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* <View style={styles.padding}>
          <Text style={styles.text}>
            <Text style={styles.bold}>
              You will not be charged for this session,
            </Text>{' '}
            however, a payment method is required in order to connect with a
            consultant.{' '}
            <Text style={styles.link} onPress={() => setIsModalVisible(true)}>
              Learn more
            </Text>
          </Text>
        </View> */}
        {isModalVisible && (
          <Modal style={styles.modalView} isVisible={isModalVisible}>
            <TouchableOpacity onPress={toggleModal}>
              <View
                style={{
                  position: 'relative',
                  bottom: sizes.screenHeight * 0.25,
                  left: sizes.screenWidth * 0.85,
                }}>
                <Entypo
                  name="cross"
                  color={colors.secondary}
                  size={30}
                  onPress={toggleModal}
                />
              </View>
            </TouchableOpacity>

            <View style={styles.texcon}>
              <Text style={styles.text111}>Learn More</Text>
            </View>
            <View style={styles.texcon1}>
              <Text style={styles.text1}>
                A valid credit card is required in order to confirm your visit
                with one of our providers
              </Text>
            </View>
            <View style={[styles.texcon1, styles.paddingTop]}>
              <Text style={styles.text1}>
                Your payment information is always encrypted and stored
                securely.
              </Text>
            </View>
            <TouchableOpacity onPress={toggleModal}>
              <View style={styles.buttonView}>
                <Text style={styles.buttonText}>OK</Text>
              </View>
            </TouchableOpacity>
          </Modal>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
