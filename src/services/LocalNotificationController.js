import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  onNotification: function (notification) {
    console.log('Local Notification', notification);
    if (notification.action == 'Copy ID') {
      console.log('hello id');
    }
  },
  popInitialNotification: true,
  requestPermissions: true,
});

PushNotification.createChannel(
  {
    channelId: 'channel-id',
    channelName: 'my_channel',
    channelDescription: 'A channel for notification',
    playSound: true,
    soundName: 'default',
    vibrate: true,
    vibration: 1000,
  },
  created => console.log(`channel created ${created}`),
);

export const LocalNotification = () => {
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
  // PushNotification.localNotificationSchedule({
  //     channelId: 'channel-id',
  //     channelName: 'my_channel',
  //     title: 'Your session is getting started',
  //       message: 'Get ready for a training session.',
  //     date: new Date(Date.now() + 10 * 1000), // in 60 secs
  //     soundName: 'default',
  //       importance: 10,
  //       vibrate: true,
  //       vibration: 1000,
  //   });
};
