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
  StyleSheet,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Header from '../../components/Header';
import {colors} from '../../services';
import {styles} from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function SelectFocusArea({navigation}) {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.color}>
      <View>
        <Header dark={true} />
      </View>
      <View style={styles.padding}>
        <Text style={styles.hedtext}>Select focus area</Text>
        <View style={styles.paddingTop}>
          <Text style={styles.text}>
            Select your top focus area. During your appointment, you can discuss
            multiple topics.
          </Text>
        </View>
        <View style={[styles.row, styles.paddingTop]}>
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
            onChangeText={text => setSearch(text)}
            activeUnderlineColor={colors.secondary}
            style={styles.input}
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
        <ScrollView>
          <View style={styles.padding}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Filter', {area: 'Acne'})}>
              <View style={styles.lisbutton}>
                <Text style={styles.text2}>Acne</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Filter', {area: 'Adolscent Care'})
              }>
              <View style={styles.lisbutton}>
                <Text style={styles.text2}>Adolscent Care</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Filter', {area: 'Aging / Geriatrics'})
              }>
              <View style={styles.lisbutton}>
                <Text style={styles.text2}>Aging / Geriatrics</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Filter', {area: 'Allergies'})
              }>
              <View style={styles.lisbutton}>
                <Text style={styles.text2}>Allergies</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Filter', {area: 'Anxiety / Depression'})
              }>
              <View style={styles.lisbutton}>
                <Text style={styles.text2}>Anxiety / Depression</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Filter', {area: 'Asthma / COPD'})
              }>
              <View style={styles.lisbutton}>
                <Text style={styles.text2}>Asthma / COPD</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Filter', {
                  area: 'Blood Pressue Management',
                })
              }>
              <View style={styles.lisbutton}>
                <Text style={styles.text2}>Blood Pressue Management</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Filter', {area: 'Cholesterol Management'})
              }>
              <View style={styles.lisbutton}>
                <Text style={styles.text2}>Cholesterol Management</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Filter', {
                  area: 'Chronic Disease Management',
                })
              }>
              <View style={styles.lisbutton}>
                <Text style={styles.text2}>Chronic Disease Management</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Filter', {area: 'Dermatology'})
              }>
              <View style={styles.lisbutton}>
                <Text style={styles.text2}>Dermatology</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Filter', {
                  area: 'Ear, Nose and Throat Diseases',
                })
              }>
              <View style={styles.lisbutton}>
                <Text style={styles.text2}>Ear, Nose and Throat Diseases</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Filter', {area: 'Eczema'})}>
              <View style={[styles.lisbutton, styles.paddingBottom]}>
                <Text style={styles.text2}>Eczema</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
