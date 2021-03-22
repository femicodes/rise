import { StyleSheet } from 'react-native';
import { fontFamily, colors } from '../../utils';

const styles = StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: colors.TEAL,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 17,
    fontFamily: fontFamily.GELION_SEMI_BOLD,
    color: colors.WHITE,
  },
  lightBackground: {
    backgroundColor: colors.OFF_TEAL,
  },
  lightText: {
    color: colors.TEAL,
  },
});

export default styles;
