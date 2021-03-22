import React from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

interface PlanProps {
  image: ImageSourcePropType;
  name: string;
  amount: string;
  onPress: () => void;
}

const PlanCard = ({ image, name, amount, onPress }: PlanProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={styles.mainContainer}>
      <View>
        <Image source={image} style={styles.planImage} />
        <View style={styles.percentageContainer}>
          <Text style={styles.percentageText}>+ 3.2% today</Text>
        </View>
      </View>
      <View>
        <Text style={styles.planName}>{name}</Text>
        <Text style={styles.planAmount}>{amount}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlanCard;
