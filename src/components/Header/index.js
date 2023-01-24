import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../services';
import {useNavigation} from '@react-navigation/native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Header({
  title,
  skip,
  dark,
  done,
  onPress,
  filter,
  textCenter,
  next,
  status,
  signout,
  thirteen
}) {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <View style={[styles.headerView, !dark && styles.headerBg, styles.row]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-outline"
            color={dark ? colors.primary : colors.white}
            size={25}
          />
        </TouchableOpacity>
        {textCenter ? (
          <Text style={[styles.centerTitle, styles.bold]}>{title}</Text>
        ) : (
          <Text style={[dark ? styles.darkTitle : styles.title, styles.bold]}>
            {title}
          </Text>
        )}

        {done && onPress && (
          <TouchableOpacity onPress={onPress}>
            <View style={[styles.row, styles.left]}>
              <Text style={styles.title}> </Text>
            </View>
          </TouchableOpacity>
        )}
        
        {signout && onPress && (
          <TouchableOpacity
            style={[styles.rows, Platform.OS !=='ios'?  styles.leftsi : styles.leftsiIOS]}
            onPress={onPress}>
            <View>
              <Text style={styles.title}>Sign Out</Text>
            </View>
          </TouchableOpacity>
        )}
        {done && title !=="Recent Sessions" &&(
          <View style={styles.skipView}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={[styles.row, styles.leftDone]}>
                <Text
                  style={
                    Platform.OS !== 'ios' ? styles.title2 : styles.title2IOS
                  }
                  onPress={() => navigation.goBack()}>
                  Done
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
         {done && title =="Recent Sessions" &&(
          <View style={styles.skipView}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={[styles.row, styles.leftDone2]}>
                <Text
                  style={
                    Platform.OS !== 'ios' ? styles.title2 : styles.title2IOS
                  }
                  onPress={onPress}>
                  Done
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        {filter && (
          <View style={styles.filterView}>
            <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
              <View style={[styles.row, styles.filterLeft]}>
                <Text style={styles.filter}>Filter </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
         {thirteen && (
           <View style={[styles.row, styles.thretee]}>
           <Text
             style={
               Platform.OS !== 'ios' ? styles.title2 : styles.title2IOS
             }
            
             >
             Total Questions: 13
           </Text>
         </View>
        )}
        
        {skip && dark && !status && (
          <View style={[styles.skipView, styles.leftDone]}>
            <TouchableOpacity
              onPress={() =>
                next ? navigation.navigate(next) : navigation.goBack()
              }>
              <View style={[styles.row]}>
                <Text style={styles.title}>{'>'} </Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  color={colors.white}
                  size={20}
                  style={styles.skipIcon}
                />
              </View>
            </TouchableOpacity>
          </View>
        )}
        {skip && !status && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={[styles.skipView, styles.leftDone]}>
              <View style={[styles.row]}>
                {title == 'Our Website' ? (
                  <Text
                    style={
                      Platform.OS !== 'ios'
                        ? styles.titleExit
                        : styles.titleIOS2
                    }
                    onPress={() => navigation.goBack()}>
                    Exit{' '}
                  </Text>
                ) : (
                  <Text
                    style={
                      Platform.OS !== 'ios' ? styles.title : styles.titleIOS
                    }
                    onPress={() => navigation.goBack()}>
                    Skip{' '}
                  </Text>
                )}
                <MaterialIcons
                  name="keyboard-arrow-right"
                  color={colors.white}
                  size={20}
                  style={[styles.skipIcon, styles.leftIOS]}
                  onPress={() => navigation.goBack()}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
        {skip && status && (
          <View style={[styles.skipView, styles.leftDone]}>
            <TouchableOpacity
              onPress={() =>
                next ? navigation.navigate(next) : navigation.goBack()
              }>
              <View style={[styles.row]}>
                {/* <Text style={styles.title}>Skip </Text> */}
                <MaterialIcons
                  name="keyboard-arrow-right"
                  color={colors.white}
                  size={20}
                  style={styles.skipIcon}
                />
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
