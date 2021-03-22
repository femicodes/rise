import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { showMessage } from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import RiseButton from '../../components/RiseButton';
import { currency } from '../../utils';
import { addMoney } from '../../redux/actions';
import styles from './styles';

const ConfirmAmount = ({ navigation, route }: ScreenProp) => {
  const [dollarAmount, setDollarAmount] = useState('');
  const [nairaAmount, setNairaAmount] = useState('');
  const dispatch = useDispatch();
  const navigationHook = useNavigation();

  useEffect(() => {
    setDollarAmount(route?.params.dollarAmount);
    setNairaAmount(route?.params.nairaAmount);
  }, [route?.params.nairaAmount, route?.params.dollarAmount]);

  const addAmount = () => {
    dispatch(addMoney(dollarAmount));
    showMessage({
      message: 'Success',
      description: 'Amount added',
      type: 'success',
    });
    navigationHook.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} text="Confirm Amount" />
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>₦{currency(nairaAmount)}</Text>
      </View>
      <View style={styles.listingSection}>
        <View style={styles.listCard}>
          <Text style={styles.listInfo}>Amount added to wallet</Text>
          <Text style={styles.listAmount}>₦{currency(nairaAmount)}</Text>
        </View>
        <View style={styles.listCard}>
          <Text style={styles.listInfo}>Processing fee (1.5%)</Text>
          <Text style={styles.listAmount}>
            ₦{currency(0.015 * Number(nairaAmount))}
          </Text>
        </View>
        <View style={styles.listCard}>
          <Text style={styles.listInfo}>Amount in USD</Text>
          <Text style={styles.listAmount}>${currency(dollarAmount)}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <RiseButton
          onPress={addAmount}
          text={`Add ₦${currency(nairaAmount)}`}
        />
      </View>
    </SafeAreaView>
  );
};

export default ConfirmAmount;
