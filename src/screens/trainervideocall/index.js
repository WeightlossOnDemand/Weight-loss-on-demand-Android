import React, {useEffect, useRef, useState} from 'react';
import {
  BackHandler,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';
import {PermissionsAndroid, Platform} from 'react-native';
import {
  ClientRoleType,
  createAgoraRtcEngine,
  IRtcEngine,
  RtcSurfaceView,
  ChannelProfileType,
} from 'react-native-agora';
import Header from '../../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {
  getAgoraToken,
  getTokenFromAPI,
  getTrainer,
  getUser,
} from '../../services/utilities/api/auth';
import {removeData} from '../../store/actions';
import Loader from '../../components/Loader';

const appId = '270b512970864b0a93b14650e52e8f9c';
// const channelName = 'test';
// const token =
// '006270b512970864b0a93b14650e52e8f9cIAA+WbGpxgdooMm2IXWSmNLFVRH3j4seKVTJqA1SbiejGKW1esgh39v0EADmIv7oQR2CYwEAAQDR2YBj'
// '007eJxTYOioeh3qfnH1vazDP8qSw1x4Vzu1XD/4v7SZp+vyWctle7gVGIzMDZJMDY0szQ0szEySDBItjZMMTcxMDVJNjVIt0iyTFTbVJzcEMjLs/D+FgREKQXx2hpDU4pLMvHQGBgAtvCIz';
// '006270b512970864b0a93b14650e52e8f9cIAApbyfztP/HdOw4amq+vEc6cmW4bVJvvpNlVjZQSYO4lJpjTich39v0EADmIv7orhGCYwEAAQA+zoBj';
// '006270b512970864b0a93b14650e52e8f9cIADMb33N1QkWA55SJ6cyF1BURhsdyT+DZ9WlSVE86rNFrwx+f9gh39v0EADmIv7oARaCYwEAAQCR0oBj';
// '006270b512970864b0a93b14650e52e8f9cIABCN+Bwjo2V7kh98fc/Q4comFMd7j+p7MRHmTfoVETvNKW1esgh39v0EADmIv7ocBaCYwEAAQAA04Bj';
const uid = 0;
export default function TrainerVideocalling({navigation, route}) {
  const agoraEngineRef = useRef(); // Agora engine instance
  const [isJoined, setIsJoined] = useState(false); // Indicates if the local user has joined the channel
  const [remoteUid, setRemoteUid] = useState(0); // Uid of the remote user
  const [message, setMessage] = useState(''); //
  const [channelName, setChannelName] = useState('');
  // const [appId, setAppId] = useState('');
  const [token, setToken] = useState('');
  // const [token, setToken] = useState('');
  const [loader, setLoader] = useState(false);

  var isMuted = false;
  const usertoken = useSelector(state => state.token);
  const showMessage = msg => {
    setMessage(msg);
  };
  const getPermission = async () => {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.CAMERA,
      ]);
    }
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('backPress', () => true);
    return () => backHandler.remove();
  }, []);
  const getToken = async () => {
    try {
      // let response = await getAgoraToken();
      // setAgoraToken(response.data.token);
      // setAppId(response.data.appId);
      // setToken(response.data.token);
      // setChannelName(response.data.channelName);
      let response = await getTokenFromAPI();
      // console.log(response.data.rtcToken);
      // setToken(response.data.rtcToken);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);
  useEffect(() => {
    // join();
    setupVideoSDKEngine();
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      let response = await getTrainer(usertoken);
      // console.log('--->>>>>>>>'response.data.data.channel);
      setChannelName(response.data.data.channel);
      // console.log(response.data.data.channel);
      // setUserName(response.data.data.first_name);
      // dispatch(storeUserData(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  const setupVideoSDKEngine = async () => {
    try {
      // use the helper function to get permissions
      await getPermission();
      agoraEngineRef.current = createAgoraRtcEngine();
      const agoraEngine = agoraEngineRef.current;
      agoraEngine.registerEventHandler({
        onJoinChannelSuccess: () => {
          showMessage('Successfully joined the channel ' + channelName);
          setIsJoined(true);
        },
        onUserJoined: (_connection, Uid) => {
          showMessage('Remote user joined with uid ' + Uid);
          setRemoteUid(Uid);
        },
        onUserOffline: (_connection, Uid) => {
          showMessage('Remote user left the channel. uid: ' + Uid);
          setRemoteUid(0);
        },
      });
      agoraEngine.initialize({
        appId: appId,
      });
      agoraEngine.enableVideo();
    } catch (e) {
      console.log(e);
    }
  };

  const join = async () => {
    // console.log('------->>>',token);
    setLoader(true);

    let response = await getTokenFromAPI(channelName);
    let token = response.data.rtcToken;

    if (isJoined) {
      return;
    }
    try {
      agoraEngineRef.current?.setChannelProfile(
        ChannelProfileType.ChannelProfileCommunication,
      );

      agoraEngineRef.current?.startPreview();
      agoraEngineRef.current?.joinChannel(token, channelName, 0, {
        clientRoleType: ClientRoleType.ClientRoleBroadcaster,
      });
      setLoader(false);

      console.log('work---->>', token, channelName, 0);
    } catch (e) {
      console.log(e);
    }
  };
  const switchCamera = () => {
    agoraEngineRef.switchCamera();
  };
  const leave = () => {
    try {
      agoraEngineRef.current?.leaveChannel();
      setRemoteUid(0);
      setIsJoined(false);
      showMessage('You left the channel');

      navigation.navigate('AddDescription');
    } catch (e) {
      console.log(e);
    }
  };
  const mute = () => {
    isMuted = !isMuted;
    agoraEngineRef.current?.muteRemoteAudioStream(remoteUid, isMuted);
  };

  return (
    <SafeAreaView style={styles.main}>
      {isJoined ? null : (
        <TouchableOpacity onPress={join} style={styles.button1}>
          <View>
            <Text style={[styles.top]}>Join</Text>
          </View>
        </TouchableOpacity>
      )}

      {isJoined ? (
        <React.Fragment key={0}>
          <RtcSurfaceView canvas={{uid: 0}} style={styles.videoView1} />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingRight: sizes.screenWidth * 0.19,
              marginTop: sizes.screenHeight * 0.9,
              height: sizes.screenHeight * 0.02,
              position: 'absolute',
              zIndex: 999,
            }}>
            <TouchableOpacity onPress={leave} style={styles.button}>
              <Ionicons
                name="ios-call-outline"
                color={colors.white}
                style={styles.callIcon}
                size={20}
                onPress={leave}
                // onPress={toogle}
              />
            </TouchableOpacity>
          </View>
        </React.Fragment>
      ) : (
        <Text></Text>
      )}
      {isJoined && remoteUid !== 0 ? (
        <React.Fragment key={remoteUid}>
          <View>
            <RtcSurfaceView
              canvas={{uid: remoteUid}}
              style={styles.videoView}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingRight: sizes.screenWidth * 0.19,
              marginTop: sizes.screenHeight * 0.9,
              height: sizes.screenHeight * 0.02,
              position: 'absolute',
              zIndex: 999,
            }}>
            <TouchableOpacity onPress={leave} style={styles.button}>
              <Ionicons
                name="ios-call-outline"
                color={colors.white}
                style={styles.callIcon}
                size={20}
                onPress={leave}
                // onPress={toogle}
              />
            </TouchableOpacity>
          </View>
        </React.Fragment>
      ) : (
        <Text>{/* Waiting for a remote user to join */}</Text>
      )}
      {isJoined ? (
        <React.Fragment key={0}>
          <RtcSurfaceView canvas={{uid: 0}} style={Platform.OS !=="ios" ? styles.videoView1 :styles.videoView1IOS }  />
          {/* <Text>Local user uid: {uid}</Text> */}
        </React.Fragment>
      ) : (
        <Text></Text>
      )}
      {loader && <Loader />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    width: sizes.screenWidth * 0.15,
    height: sizes.screenHeight * 0.073,
    backgroundColor: colors.secondary,
    borderRadius: sizes.screenWidth * 0.5,
    // paddingTop: sizes.screenWidth * 0.01,
    // margin: 5,
    // position: 'relative',
    // top:10,
    // bottom: sizes.screenHeight * 0.15,
    // left: sizes.screenWidth * 0.1,
    // justifyContent: 'center',
    // alignItems: 'center',
    color: '#ffffff',
    textAlign: 'center',
    alignItems: 'center',
    // alignSelf:'center',
    marginLeft: sizes.screenWidth * 0.4,
  },
  button1: {
    width: sizes.screenWidth * 0.3,
    height: sizes.screenHeight * 0.15,
    borderRadius: sizes.screenWidth * 0.5,
    // paddingHorizontal: sizes.screenWidth*0.05,
    // paddingVertical: 4,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: colors.secondary,
    // margin: 5,
    position: 'relative',
    top: sizes.screenHeight * 0.35,
    // bottom: sizes.screenHeight * 0.01,
    left: sizes.screenWidth * 0.35,
    textAlign: 'center',
    justifyContent: 'center',
  },

  main: {flex: 1},
  scroll: {
    // flex: 1,
    // backgroundColor: '#ddeeff',
    width: '100%',
    // position: 'relative',
  },
  top: {
    fontSize: fontSize.large,
    fontWeight: 'bold',
    color: '#ffffff',
    alignSelf: 'center',
  },
  scrollContainer: {alignItems: 'center'},
  videoView: {
    width: '100%',
    zIndex: -1,
    height: sizes.screenHeight,
  },
  videoView1IOS:
  {
    width: '50%',
    height: sizes.screenHeight * 0.25,
    position: 'absolute',
    // marginTop: 8,
    top: sizes.screenHeight * 0.57,
    right: sizes.screenHeight * 0.03
    // zIndex: -111,
  },
  videoView1: {
    width: '50%',
    height: sizes.screenHeight * 0.25,
    position: 'absolute',
    // marginTop: 8,
    top: sizes.screenHeight * 0.62,
    right: sizes.screenHeight * 0.02,
    zIndex: -111,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  head: {fontSize: 20},
  info: {backgroundColor: '#ffffe0', color: '#0000ff'},
  noAvailableView: {
    // left:sizes.screenWidth * 0.3
    alignSelf: 'center',
    top: sizes.screenHeight * 0.4,
  },
  text: {
    color: colors.black,
    fontSize: fontSize.medium,
  },
  callIcon: {
    top: sizes.screenHeight * 0.025,
  },
});
