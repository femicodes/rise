import { StyleSheet } from 'react-native';
import { getHeight } from '../../utils/responsive';
import { fontFamily, colors } from '../../utils';

const styles = StyleSheet.create({
  backButton: {
    width: 33,
    height: 33,
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: getHeight(25),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  emptyBox: {
    width: 33,
    height: 33,
  },
  headerText: {
    color: colors.DARK,
    fontSize: 22,
    fontFamily: fontFamily.GELION_SEMI_BOLD,
    lineHeight: 28,
  },
});

export default styles;
