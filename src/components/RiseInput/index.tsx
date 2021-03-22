import React from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { colors } from '../../utils';

const eyeIcon = require('../../assets/icons/eye-icon.png');

const RiseInput = props => {
  return (
    <View style={styles.textInputContainer}>
      <TextInput
        {...props}
        style={[
          styles.textInput,
          props.type === 'password' ? styles.inputWidth : styles.inputFlex,
        ]}
        placeholder={props.placeholder}
        placeholderTextColor={colors.DARK}
      />
      {props.type === 'password' && (
        <TouchableOpacity
          onPress={props.onTogglePassword}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          style={styles.eyeIconContainer}>
          <Image source={eyeIcon} style={styles.eyeIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RiseInput;
