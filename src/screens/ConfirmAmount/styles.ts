import { StyleSheet } from 'react-native';
import { getHeight } from '../../utils/responsive';
import { fontFamily, colors } from '../../utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    flex: 1,
  },
  amountContainer: {
    marginTop: getHeight(32),
  },
  amountText: {
    textAlign: 'center',
    color: colors.DARK,
    fontSize: 40,
    lineHeight: 48,
    fontFamily: fontFamily.GELION_BOLD,
  },
  listingSection: {
    marginTop: getHeight(26),
  },
  listCard: {
    height: 44,
    paddingVertical: 12,
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.GALLERY,
  },
  listInfo: {
    fontFamily: fontFamily.GELION_REGULAR,
    fontSize: 15,
    lineHeight: 20,
    color: colors.OSLO_GRAY,
  },
  listAmount: {
    color: colors.DARK,
    fontSize: 15,
    fontFamily: fontFamily.GELION_REGULAR,
    lineHeight: 20,
    fontWeight: '400',
  },
  buttonContainer: {
    paddingHorizontal: 16,
    position: 'absolute',
    width: '100%',
    bottom: 10,
    paddingBottom: 39,
  },
});

export default styles;
