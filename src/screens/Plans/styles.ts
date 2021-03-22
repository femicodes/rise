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
    marginHorizontal: 16,
  },
  headerText: {
    fontSize: 22,
    fontFamily: fontFamily.GELION_SEMI_BOLD,
    lineHeight: 28,
    color: colors.DARK,
  },
  arrowIcon: {
    width: 6,
    height: 10,
    marginLeft: 3,
  },
  planSectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: getHeight(21),
  },
  planSectionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  planSectionText: {
    fontFamily: fontFamily.GELION_SEMI_BOLD,
    fontSize: 17,
    lineHeight: 22,
    color: colors.DARK,
  },
  seePlansText: {
    fontSize: 11,
    lineHeight: 13,
    color: colors.TEAL,
    fontFamily: fontFamily.GELION_SEMI_BOLD,
  },
  planSlideContainer: {
    marginTop: getHeight(22),
    marginLeft: 16,
  },
});

export default styles;
