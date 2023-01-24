import React, {useEffect, useRef, useState} from 'react';
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
import {styles} from './style';
import {colors} from '../../services';
import {TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {storePayment} from '../../store/actions';

export default function AddPaymentMethod({route, navigation}) {
  const [cardNum, setCardNum] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [cvv, setCvv] = useState('');

  const dispatch = useDispatch();
  const payment = useSelector(state => state.payment);
  const saveCreditCard = () => {
    if (cardNum && expirationMonth && expirationYear && cvv) {
      let paymentData = {cardNum, expirationMonth, expirationYear, cvv};
      dispatch(storePayment(paymentData));
      navigation.navigate(route?.params?.to, {
        // appointByTrainer: route?.params?.appointByTrainer,
        sessionStart: route?.params?.sessionStart ? true : false,
        appointByTrainer: route?.params?.appointByTrainer ? true : false,
        appointByTime: route?.params?.appointByTime ? true : false,
        trainer: route?.params?.trainer,
        slot: route?.params?.slot,
      });
    }
  };

  useEffect(() => {
    console.log('---->>>', payment);
    if (payment) {
      setCardNum(payment.cardNum);
      setExpirationMonth(payment.expirationMonth);
      setExpirationYear(payment.expirationYear);
      setCvv(payment.cvv);
    }
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header title={'Payment Method'} />
        </View>
        <View style={styles.padding}>
          <Text style={styles.addPaymentText}>Add Payment Method</Text>
        </View>
        <View style={styles.width}>
          <TextInput
            mode="contain"
            label={'Credit Card Number'}
            activeUnderlineColor={colors.secondary}
            style={styles.field}
            onChangeText={text => setCardNum(text)}
            value={cardNum}
            keyboardType="numeric"
            maxLength={16}
          />
        </View>
        <View style={styles.row}>
          <View style={styles.zipView}>
            <TextInput
              mode="contain"
              label={'Expiration (MM)'}
              activeUnderlineColor={colors.secondary}
              style={styles.field}
              onChangeText={text => setExpirationMonth(text)}
              value={expirationMonth}
              keyboardType={'numeric'}
              maxLength={2}
            />
          </View>
          <View style={styles.stateView}>
            <TextInput
              mode="contain"
              label={'CVV'}
              activeUnderlineColor={colors.secondary}
              style={styles.field}
              onChangeText={text => setCvv(text)}
              value={cvv}
              keyboardType={'numeric'}
              maxLength={4}
            />
          </View>
        </View>

        <View style={[styles.zipView, styles.marginLeft, styles.marginTop]}>
          <View style={styles.zipView}>
            <TextInput
              mode="contain"
              label={'Expiration (YY)'}
              activeUnderlineColor={colors.secondary}
              style={styles.field}
              onChangeText={text => setExpirationYear(text)}
              value={expirationYear}
              keyboardType={'numeric'}
              maxLength={2}
            />
          </View>
        </View>
        <View style={[styles.padding]}></View>
        <View style={styles.top}>
          <TouchableOpacity onPress={saveCreditCard}>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Save Card</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.padding}>
          <Text style={styles.text}>
            <Text style={styles.bold}>Note: </Text> This will replace any
            payment method on file.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
