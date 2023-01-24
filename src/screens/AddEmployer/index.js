import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {TextInput} from 'react-native-paper';
import {styles} from './style';
import {colors} from '../../services';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

export default function AddEmployer({navigation}) {
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [searchItems, setSearchItems] = useState([
    'Search Item',
    'Search Item',
    'Search Item',
    'Search Item',
    'Search Item',
    'Search Item',
    'Search Item',
    'Search Item',
    'Search Item',
    'Search Item',
    'Search Item',
    'Search Item',
  ]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    <SafeAreaView>
      <View>
        <Header dark={true} />
      </View>
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.addPaymentText}>Add Employer</Text>
          <View style={styles.paddingTop}>
            <Text style={styles.text}>
              Search for the company that covers your visits
            </Text>
          </View>
          <View style={styles.row}>
            <FontAwesome
              name="search"
              color={colors.secondary}
              size={20}
              style={styles.searchIcon}
            />
            <TextInput
              clearButtonMode
              mode="contain"
              value={search}
              placeholder={'e.g. Comcast, American Airlines'}
              onChangeText={text => setSearch(text)}
              activeUnderlineColor={colors.secondary}
              style={styles.input}
              onChange={() => setShowModal(true)}
              right={
                <TextInput.Icon
                  name={() =>
                    search && (
                      <Entypo
                        name={'cross'}
                        size={20}
                        color={colors.primary}
                        onPress={() => setSearch('')}
                      />
                    )
                  }
                />
              }
            />
          </View>
        </View>
        {search !== 'bcd' && search !== '' && showModal && (
          <View>
            <ScrollView
              style={isKeyboardVisible ? styles.keyboardHeight : styles.height}>
              <View style={[styles.top]}>
                {searchItems?.map((item, index) => {
                  return (
                    <View key={index} style={[styles.row2, styles.card]}>
                      <Text style={styles.cardText}>{item}</Text>
                      <View>
                        <Text style={styles.symbol}> ›</Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
            <View style={styles.btnTop}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.learnMoreBtn}>
                  <Text style={styles.learnMoreText}>Skip Employer</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {search === 'bcd' && (
          <View>
            <View
              style={isKeyboardVisible ? styles.keyboardHeight : styles.height}>
              <View style={[styles.paddingLeft]}>
                <Text style={[styles.text2, styles.bold]}>
                  Sorry, we don't recognize that company.
                </Text>
                <View style={[styles.row2, styles.top, styles.left]}>
                  <Entypo name="dot-single" color={colors.primary} size={30} />
                  <Text style={[styles.text2, styles.right]}>
                    Check for spelling
                  </Text>
                </View>
                <View style={[styles.row2, styles.bottom, styles.left]}>
                  <Entypo name="dot-single" color={colors.primary} size={30} />
                  <Text style={[styles.text2, styles.right]}>
                    Check for abbreviations
                  </Text>
                </View>
              </View>
              <View style={styles.paddingLeft}>
                <Text style={styles.text2}>
                  Adding an employer isn't required to see a doctor.
                </Text>
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.learnMoreBtn}>
                  <Text style={styles.learnMoreText}>Continue</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
