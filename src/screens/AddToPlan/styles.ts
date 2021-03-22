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
    left: 15,
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
  grey: {
    color: colors.OSLO_GRAY,
  },
  planAmountContainer: {
    paddingVertical: 20,
    borderBottomColor: 'rgba(181, 181, 181, 0.2)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 28,
  },
  currency: {
    fontFamily: fontFamily.GELION_SEMI_BOLD,
    fontSize: 22,
    lineHeight: 28,
    color: colors.DARK,
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
