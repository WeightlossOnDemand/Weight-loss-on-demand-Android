import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Home from './src/screens/Home';
import MainNavigator from './src/services/config/navigation';
import SplashScreen from 'react-native-splash-screen';
import NetInfo from '@react-native-community/netinfo';
import Modal from 'react-native-modal';
import {colors, fontFamily, fontSize, sizes} from './src/services';
import Entypo from 'react-native-vector-icons/Entypo';
import RateProvider from './src/screens/RateProvider';
import HowLikelyRecommend from './src/screens/HowLikelyRecommend';
import ThankyouVisit from './src/screens/ThankyouVisit';
import Loader from './src/components/Loader';
import Error from './src/components/Error';
import VisitHistory from './src/screens/VisitHistory';
import {enableLatestRenderer} from 'react-native-maps';
import ChooseFollowUp from './src/screens/ChooseFollowUp';

import store from './src/store';
import {persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider, useSelector} from 'react-redux';
import {
  notifcationListener,
  requestUserPermission,
} from './src/services/utilities/notificationService';
import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';
import PushNotification from 'react-native-push-notification';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    enableLatestRenderer();
    SplashScreen.hide();
    NetInfo.fetch().then(state => {
      setIsModalVisible(!state.isConnected);
    });
  }, []);

  useEffect(() => {
    requestUserPermission();
    // notifcationListener();
    console.log('works-------->>>>>>>>');
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log("sss");
      console.log(remoteMessage, 'works--------------->>>');
      PushNotification.createChannel({
        channelId: 'channel-id',
        channelName: 'my_channel',
        channelDescription: 'A channel for notification',
        playSound: true,
        soundName: 'default',
        vibrate: true,
        vibration: 1000,
      });
      PushNotification.localNotification({
        channelId: 'channel-id',
        channelName: 'my_channel',
        message: remoteMessage.notification.body,
        title: remoteMessage.notification.title,
        bigPictureUrl: remoteMessage.notification.android.imageUrl,
        smallIcon: remoteMessage.notification.android.imageUrl,
        playSound: true,
        soundName: 'default',
      });
    });
    return () => {
      unsubscribe();
    };
  }, []);

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log("workss------>>");
    console.log('Message handled in the background!', remoteMessage);
    PushNotification.localNotification({
      channelId: 'channel-id',
      channelName: 'my_channel',
      message: remoteMessage.notification.body,
      title: remoteMessage.notification.title,
      bigPictureUrl: remoteMessage.notification.android.imageUrl,
      smallIcon: remoteMessage.notification.android.imageUrl,
      playSound: true,
      soundName: 'default',
    });
  });

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          {isModalVisible ? (
            <Modal style={styles.modalView} isVisible={isModalVisible}>
              <TouchableOpacity onPress={toggleModal}>
                <View
                  style={{
                    position: 'relative',
                    bottom: sizes.screenHeight * 0.3,
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
                <Text style={styles.text111}>Oops!</Text>
              </View>
              <View style={styles.texcon1}>
                <Text style={styles.text1}>
                  There was a problem with your request. Please try again later.
                </Text>
              </View>
              <TouchableOpacity onPress={toggleModal}>
                <View style={styles.buttonView}>
                  <Text style={styles.buttonText}>OK</Text>
                </View>
              </TouchableOpacity>
            </Modal>
          ) : (
            <MainNavigator />
          )}
        </View>
      </PersistGate>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalView: {
    width: sizes.screenWidth,
    backgroundColor: '#0e0e0e',
    opacity: 0.9,
    marginLeft: sizes.screenWidth * 0.001,

    padding: 10,
    position: 'absolute',
    top: -20,
    height: sizes.screenHeight,
  },
  texcon: {
    paddingBottom: sizes.screenHeight * 0.1,
  },
  texcon1: {
    bottom: sizes.screenHeight * 0.08,
  },
  text111: {
    fontSize: fontSize.h4,
    color: colors.white,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextHeading,
    paddingLeft: sizes.screenWidth * 0.035,
  },
  text1: {
    fontSize: fontSize.large,
    color: colors.white,
    fontFamily: fontFamily.appTextLight,
    paddingLeft: sizes.screenWidth * 0.035,
    width: sizes.screenWidth * 0.88,
  },
  buttonView: {
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextHeading,
    fontWeight: '600',
  },
});
