import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface Props {
  text: string;
  onPress?: () => void;
  type?: string;
}

const RiseButton = ({ text, onPress, type }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={[styles.container, type === 'light' && styles.lightBackground]}>
      <Text style={[styles.buttonText, type === 'light' && styles.lightText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default RiseButton;
