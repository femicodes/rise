import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import styles from './styles';
import { currency } from '../../utils';

const rightCircle = require('../../assets/icons/right-circle.png');

const DebitCard = ({ navigation }: ScreenProp) => {
  const { walletBalance } = useSelector(
    (state: { wallet: { walletBalance: number } }) => state.wallet,
  );

  const [details, setDetails] = useState({
    amount: '',
  });

  const onChangeAmount = (value: string) => {
    const formattedAmount = value
      .toString()
      .replace(/\D/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      .trim();

    changeHandler(formattedAmount, 'amount');
  };

  const changeHandler = (value: string, fieldName: string) => {
    setDetails(prevDetails => ({
      ...prevDetails,
      [fieldName]: value,
    }));
  };

  const formattedAmount = details.amount.replace(/[, ]+/g, '').trim();
  const dollarAmount = Number(Number(formattedAmount) / 420).toFixed(2);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}>
        <Header navigation={navigation} text="Debit Card" />
        <View style={styles.conversionCard}>
          <View>
            <Text style={styles.conversionText}>Your Debit Card</Text>
          </View>
          <View style={styles.rightCircleContainer}>
            <Image source={rightCircle} style={styles.rightCircleIcon} />
          </View>
          <View style={styles.lineContainer}>
            <View style={styles.line} />
          </View>
          <View>
            <Text style={styles.conversionText}>Rise Wallet</Text>
            <Text style={[styles.conversionText, styles.amountColor]}>
              ${currency(walletBalance)}
            </Text>
          </View>
        </View>
        <View style={styles.rateContainer}>
          <View style={styles.nairaSection}>
            <Text style={styles.currency}>₦</Text>
            <TextInput
              hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
              style={styles.currency}
              placeholder="0"
              value={details.amount}
              keyboardType="numeric"
              onChangeText={onChangeAmount}
              maxLength={7}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.exchangeRate}>$1 = ₦420 </Text>
            <View style={styles.whyContainer}>
              <Text style={styles.whyText}>Why this rate?</Text>
            </View>
          </View>
          <View style={[styles.nairaSection, styles.dollarSection]}>
            <Text style={styles.currency}>$</Text>
            <Text style={styles.currency}>{currency(dollarAmount)}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ConfirmAmount', {
              nairaAmount: formattedAmount,
              dollarAmount,
            })
          }
          activeOpacity={0.7}
          style={styles.addMoneyContainer}>
          <Text style={styles.addMoneyText}>Add Money</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default DebitCard;
