import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';

const backButton = require('../../assets/icons/back-button.png');

interface HeaderProps {
  text: string;
}

const Header = ({ navigation, text }: ScreenProp & HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        activeOpacity={0.5}
        onPress={() => navigation.goBack()}>
        <Image source={backButton} style={styles.backButton} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{text}</Text>
      <View style={styles.emptyBox} />
    </View>
  );
};

export default Header;
