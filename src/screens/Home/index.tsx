import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import RiseButton from '../../components/RiseButton';
import TransactionCard from '../../components/TransactionCard';
import transactionData from './data';
import { currency } from '../../utils';

const walletImage = require('../../assets/icons/wallet.png');
const eyeIcon = require('../../assets/icons/eye-icon.png');

const Home = ({ navigation }: ScreenProp) => {
  const [showAmount, setShowAmount] = useState(true);
  const { walletBalance } = useSelector(
    (state: { wallet: { walletBalance: number } }) => state.wallet,
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Wallet</Text>
      </View>

      <View style={styles.balanceContainer}>
        <View style={styles.balanceHeaderContainer}>
          <View style={styles.balanceLeftSection}>
            <View style={styles.innerBalanceHeader}>
              <Text style={styles.balanceHeaderText}>Wallet Balance</Text>
              <TouchableOpacity
                onPress={() => setShowAmount(!showAmount)}
                activeOpacity={0.5}
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
                <Image style={styles.eyeIcon} source={eyeIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.balanceAmountContainer}>
              <Text style={styles.balanceAmount}>
                {showAmount ? `$${currency(walletBalance)}` : '*********'}
              </Text>
            </View>
          </View>

          <View>
            <Image source={walletImage} style={styles.walletImage} />
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.viewAccountContainer}>
          <Text style={styles.viewAccountText}>View Account Numbers</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.leftButtonContainer}>
          <RiseButton
            type="light"
            text="Send Money"
            onPress={() => navigation.navigate('YourPlans')}
          />
        </View>
        <View style={styles.rightButtonContainer}>
          <RiseButton
            text="Fund Wallet"
            onPress={() => navigation.navigate('DebitCard')}
          />
        </View>
      </View>

      <View style={styles.transactionsHeaderContainer}>
        <View style={styles.transactionHeader}>
          <Text style={styles.recentTransactionsText}>Recent Transactions</Text>
          <TouchableOpacity
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            activeOpacity={0.7}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.transactionsContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          keyExtractor={(_, i) => i.toString()}
          data={transactionData}
          renderItem={({ item }) => <TransactionCard {...item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
