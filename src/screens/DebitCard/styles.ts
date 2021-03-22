import { StyleSheet } from 'react-native';
import { getHeight, getWidth } from '../../utils/responsive';
import { fontFamily, colors } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  conversionCard: {
    marginTop: getHeight(21),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 61,
    paddingHorizontal: 28,
    borderTopColor: 'rgba(181, 181, 181, 0.2)',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(181, 181, 181, 0.2)',
  },
  conversionText: {
    color: colors.DARK,
    fontFamily: fontFamily.GELION_REGULAR,
    fontSize: 13,
    lineHeight: 18,
  },
  rightCircleContainer: {
    zIndex: 100,
  },
  rightCircleIcon: {
    width: 24,
    height: 24,
  },
  amountColor: {
    color: colors.OSLO_GRAY,
    textAlign: 'right',
  },
  lineContainer: {
    position: 'absolute',
    left: getWidth(197),
  },
  line: {
    borderColor: 'rgba(181, 181, 181, 0.2)',
    height: 61,
    borderWidth: 0.8,
  },
  rateContainer: {
    marginTop: getHeight(20),
    paddingHorizontal: 28,
  },
  nairaSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  currency: {
    fontFamily: fontFamily.GELION_SEMI_BOLD,
    fontSize: 22,
    lineHeight: 28,
    color: colors.DARK,
  },
  infoContainer: {
    marginTop: getHeight(15),
    height: 27,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 18,
    paddingRight: 5,
    borderColor: colors.OFF_TEAL,
    borderWidth: 1,
    borderRadius: 8,
    width: 169,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  exchangeRate: {
    fontSize: 11,
    fontFamily: fontFamily.GELION_REGULAR,
    color: colors.DARK,
    lineHeight: 13,
  },
  whyContainer: {
    backgroundColor: colors.OFF_TEAL,
    height: 19,
    paddingLeft: 13,
    paddingRight: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  whyText: {
    fontSize: 9,
    fontFamily: fontFamily.GELION_REGULAR,
    color: colors.TEAL,
    lineHeight: 11,
  },
  dollarSection: {
    marginTop: getHeight(7),
  },
  addMoneyContainer: {
    marginTop: getHeight(45),
    backgroundColor: colors.TEAL,
    marginHorizontal: 47,
    borderRadius: 8,
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addMoneyText: {
    color: colors.WHITE,
    fontFamily: fontFamily.GELION_SEMI_BOLD,
    fontSize: 17,
    lineHeight: 22,
  },
});

export default styles;
