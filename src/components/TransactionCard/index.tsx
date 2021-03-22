import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import styles from './styles';

interface TransactionData {
  title: string;
  time: string;
  amount: string;
  image: ImageSourcePropType;
  status: string;
}

const TransactionCard = ({
  title,
  time,
  amount,
  image,
  status,
}: TransactionData) => {
  return (
    <View style={styles.transactionCard}>
      <View style={styles.leftTransactionSide}>
        <Image source={image} style={styles.transactionIcon} />
        <View>
          <Text style={styles.transactionTitle}>{title}</Text>
          <Text style={styles.transactionTime}>
            {time}{' '}
            {status === 'failed' && (
              <Text style={styles.redText}>• Failed</Text>
            )}
            {status === 'pending' && (
              <Text style={styles.yellowText}>• Pending</Text>
            )}
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.transactionAmount}>{amount}</Text>
      </View>
    </View>
  );
};

export default TransactionCard;
