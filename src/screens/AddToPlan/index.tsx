import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header';
import styles from './styles';

const rightCircle = require('../../assets/icons/right-circle.png');

const AddToPlan = ({ navigation }: ScreenProp) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} text="Add to Plan" />
      <View style={styles.conversionCard}>
        <View>
          <Text style={styles.conversionText}>Rise Wallet</Text>
          <Text style={[styles.conversionText, styles.grey]}>$20.34</Text>
        </View>
        <View style={styles.rightCircleContainer}>
          <Image source={rightCircle} style={styles.rightCircleIcon} />
        </View>
        <View style={styles.lineContainer}>
          <View style={styles.line} />
        </View>
        <View>
          <Text style={styles.conversionText}>Build Wealth</Text>
          <Text style={[styles.conversionText, styles.amountColor]}>
            $70,930.75
          </Text>
        </View>
      </View>
      <View style={styles.planAmountContainer}>
        <Text style={styles.currency}>$</Text>
        <Text style={styles.currency}>10.00</Text>
      </View>
      <TouchableOpacity
        /* onPress={() => navigation.navigate('ConfirmAmount')} */
        activeOpacity={0.7}
        style={styles.addMoneyContainer}>
        <Text style={styles.addMoneyText}>Add To Plan</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddToPlan;
