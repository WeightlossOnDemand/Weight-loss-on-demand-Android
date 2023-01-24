import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Linking,
  SafeAreaView,
  ScrollView,
  Share,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {styles} from './style';
// import {openComposer, openInbox} from 'react-native-email-link';

export default function SharePromo() {
  // const handleGmail = () => {
  //   openComposer({
  //     subject: "Here's $10 off a Weight Loss On Demand visit",
  //     body: `I just used Weight Loss On Demand to see a board-certified physician over video,
  //      right from my phone. They can treat 18 of the top 20 ER cases, including the most common
  //       issues this cold and flu season. I wanted to share a gift of $10 off your first visit by
  //        using my code ${coupon}.To claim your free gift, download the app and sign up using this link:`,
  //   });
  // };
  const promoCode = useSelector(state => state.user.promo_code);
  const handleMessages = async () => {
    const options = {
      title: "Here's $10 off a Weight Loss On Demand session!",
      message: `I just used Weight Loss On Demand to see a certified consultant over video, right from my phone. I wanted to share a gift of $10 off your first session by using my code ${promoCode}. To claim your free gift, download the app and sign up using this link:`,
    };
    const response = await Share.share(options);
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header title={'Share'} />
        </View>
        <View style={styles.userView}>
          <View style={styles.alignCenter}>
            <Text style={styles.btnText}>SHARE YOUR PROMO CODE</Text>
            <Text style={styles.code}>{promoCode}</Text>
          </View>
        </View>
        <View style={styles.padding}>
          <Text style={styles.shareText}>
            Share your promocode with your friends and family. They'll get $10
            off their first session.
          </Text>
        </View>
        <TouchableOpacity onPress={handleMessages}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}> Share Promo Code</Text>
          </View>
        </TouchableOpacity>
        {/* <View style={[styles.row, styles.padding, styles.around]}> */}
        {/* <View>
            <TouchableOpacity>
              <Image source={images.fbDownloader} style={styles.icon} />
              <Text style={styles.iconText}>FB Video</Text>
              <Text style={styles.iconText}>Downloader</Text>
            </TouchableOpacity>
          </View> */}
        {/* <View>
            <TouchableOpacity>
              <Image source={images.fb} style={styles.icon} />
              <Text style={styles.iconText}>Facebook</Text>
              <Text style={styles.iconText}></Text>
            </TouchableOpacity>
          </View> */}
        {/* <View>
            <TouchableOpacity>
              <Image source={images.messenger} style={styles.icon} />
              <Text style={styles.iconText}>Messenger</Text>
              <Text style={styles.iconText}></Text>
            </TouchableOpacity>
          </View> */}
        {/* <View>
            <TouchableOpacity onPress={handleMessages}>
              <Image source={images.message} style={styles.icon} />
              <Text style={styles.iconText}>Messages</Text>
              <Text style={styles.iconText}></Text>
            </TouchableOpacity>
          </View> */}
        {/* </View> */}
        {/* <View style={[styles.row, styles.padding, styles.gmailView]}> */}
        {/* <View>
            <TouchableOpacity onPress={handleGmail}>
              <Image source={images.gmail} style={styles.icon} />
              <Text style={styles.iconText}>Gmail</Text>
              <Text style={styles.iconText}></Text>
            </TouchableOpacity>
          </View> */}
        {/* <View>
            <TouchableOpacity>
              <Image
                source={images.playServices}
                style={[styles.icon, styles.playIcon]}
              />
              <Text style={styles.iconText}>Google Play </Text>
              <Text style={styles.iconText}>services</Text>
            </TouchableOpacity>
          </View> */}
        {/* <View style={styles.mailRight}>
            <TouchableOpacity>
              <Image source={images.mail} style={styles.icon} />
              <Text style={styles.iconText}>Mail</Text>
              <Text style={styles.iconText}></Text>
            </TouchableOpacity>
          </View> */}
        {/* <View style={styles.width}></View> */}
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
