import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}

const getFcmToken = async () => {
  console.log('wossssssss');
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  console.log(fcmToken, 'old token');
  if (!fcmToken) {
    try {
      const fcmToken = await messaging().getToken();
      console.log('fcmToken', fcmToken);
      if (fcmToken) {
        console.log(fcmToken, 'the new generated token');
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    } catch (error) {
      // console.log('------>>works');
      console.log('err----->>>', error);
    }
  }
};

export const notifcationListener = async () => {
  console.log('workssssssss--->>>');
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log('Wroking');
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    messaging().onMessage(async remoteMessage => {
      console.log('foreground---------->>>', remoteMessage);
        PushNotification.localNotification({
          channelId: 'channel-id',
          channelName: 'my_channel',
          autoCancel: true,
          channelDescription: 'Your session is getting started',
          playSound: true,
          title: 'Your session is about started',
          message: 'Get ready for your session.',
          soundName: 'default',
          importance: 10,
          vibrate: true,
          vibration: 1000,
          actions: '["Copy ID", "Copy Password"]',
        });
      console.log('recieved in foreground', remoteMessage);
    });
    console.log('wirks---->>');

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        console.log('wirks---->>');
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });
  });
};
