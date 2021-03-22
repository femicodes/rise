import { StyleSheet } from 'react-native';
import { getHeight } from '../../utils/responsive';
import { fontFamily, colors } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  headerContainer: {
    marginTop: getHeight(25),
  },
  headerText: {
    textAlign: 'center',
    fontFamily: fontFamily.GELION_SEMI_BOLD,
    fontSize: 22,
    lineHeight: 28,
    color: colors.DARK,
  },
  balanceContainer: {
    height: 108,
    backgroundColor: colors.ATHENS_GRAY,
    marginTop: getHeight(20),
    marginHorizontal: 16,
    borderRadius: 8,
    paddingTop: 16,
  },
  viewAccountContainer: {
    bottom: 0,
    position: 'absolute',
    backgroundColor: colors.OFF_TEAL,
    width: '100%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    height: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewAccountText: {
    color: colors.TEAL,
    fontSize: 11,
    fontFamily: fontFamily.GELION_SEMI_BOLD,
    lineHeight: 13,
  },
  balanceHeaderContainer: {
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  walletImage: {
    width: 31,
    height: 25,
  },
  eyeIcon: {
    width: 13,
    height: 9,
    marginLeft: 10,
    top: 0.5,
  },
  innerBalanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceHeaderText: {
    fontFamily: fontFamily.GELION_REGULAR,
    fontSize: 12,
    color: colors.OSLO_GRAY,
    lineHeight: 13,
    marginLeft: 3,
  },
  balanceLeftSection: {
    flexDirection: 'column',
  },
  balanceAmount: {
    fontSize: 22,
    lineHeight: 28,
    color: colors.DARK,
    fontFamily: fontFamily.GELION_SEMI_BOLD,
  },
  balanceAmountContainer: {
    marginTop: getHeight(6),
  },
  buttonContainer: {
    marginTop: getHeight(16),
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  leftButtonContainer: {
    flex: 1,
    marginRight: 8.5,
  },
  rightButtonContainer: {
    flex: 1,
    marginLeft: 8.5,
  },
  transactionsHeaderContainer: {
    marginTop: getHeight(43),
    marginHorizontal: 16,
  },
  transactionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  recentTransactionsText: {
    fontFamily: fontFamily.GELION_REGULAR,
    fontSize: 15,
    lineHeight: 20,
    color: colors.DARK,
  },
  viewAllText: {
    color: colors.TEAL,
    fontSize: 12,
    lineHeight: 13,
    fontFamily: fontFamily.GELION_REGULAR,
  },
  transactionsContainer: {
    marginTop: getHeight(12),
    paddingHorizontal: 16,
  },
  listContainer: {
    paddingBottom: 340,
  },
});

export default styles;
