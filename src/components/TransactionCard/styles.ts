import { StyleSheet } from 'react-native';
import { fontFamily, colors } from '../../utils';

const styles = StyleSheet.create({
  transactionCard: {
    paddingTop: 11,
    paddingBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.GALLERY,
    borderBottomWidth: 1,
  },
  transactionIcon: {
    width: 42,
    height: 42,
    marginRight: 18,
  },
  leftTransactionSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionTitle: {
    fontFamily: fontFamily.GELION_REGULAR,
    fontSize: 13,
    lineHeight: 18,
    color: colors.DARK,
  },
  transactionTime: {
    fontSize: 11,
    fontFamily: fontFamily.GELION_REGULAR,
    lineHeight: 13,
    color: colors.OSLO_GRAY,
  },
  transactionAmount: {
    fontFamily: fontFamily.GELION_SEMI_BOLD,
    fontSize: 13,
    lineHeight: 18,
    color: colors.DARK,
    top: 3,
  },
  yellowText: {
    color: colors.WARNING,
  },
  redText: {
    color: colors.RED,
  },
});

export default styles;
