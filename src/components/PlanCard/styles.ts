import { StyleSheet } from 'react-native';
import { fontFamily, colors } from '../../utils';
import { getHeight } from '../../utils/responsive';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    flex: 1,
    marginRight: 5,
    paddingHorizontal: 5,
    marginBottom: getHeight(16),
  },
  planImage: {
    width: '100%',
    height: 101,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  percentageContainer: {
    position: 'absolute',
    paddingTop: 1.4,
    paddingBottom: 2.6,
    paddingLeft: 3,
    paddingRight: 5,
    backgroundColor: '#4CD964',
    bottom: 8,
    right: 10,
    borderRadius: 8,
  },
  percentageText: {
    fontFamily: fontFamily.GELION_SEMI_BOLD,
    color: colors.WHITE,
    fontSize: 9,
    lineHeight: 11,
  },
  planName: {
    fontFamily: fontFamily.GELION_REGULAR,
    fontSize: 11,
    lineHeight: 13,
    color: colors.OSLO_GRAY,
    marginTop: getHeight(9),
  },
  planAmount: {
    fontFamily: fontFamily.GELION_SEMI_BOLD,
    fontSize: 13,
    lineHeight: 18,
    color: colors.DARK,
  },
});

export default styles;
