import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {View, StyleSheet, Text} from 'react-native';
import {colors, fontFamily, fontSize} from '../../services';

export const CustomTextFiel = ({
  value,
  label,
  setValue,
  secureTextEntry,
  editable,
  type
}) => {
  return (
    //   <View style={styles.container}>
    <>
      <TextInput
        mode="contain"
        //   style={styles.input}
        value={value}
        label={label}
        onChangeText={setValue}
        autoCapitalize={'none'}
        secureTextEntry={secureTextEntry}
        activeUnderlineColor={colors.secondary}
        editable={editable}
        keyboardType={type}
        style={{
          backgroundColor: "#fafafa",
          fontSize: fontSize.large,
          fontFamily: fontFamily.appTextRegular,
        }}
      />
    </>
  );
};
