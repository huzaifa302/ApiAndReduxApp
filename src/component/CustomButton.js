import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Color from '../config/Color';
import Fonts from '../config/Fonts';

const CustomButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.ButtonView} onPress={onPress}>
      <Text style={styles.ButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ButtonView: {
    backgroundColor: Color.blue,
    height: 55,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  ButtonText: {
    color: Color.white,
    fontFamily: Fonts.bold,
  },
});

export default CustomButton;
