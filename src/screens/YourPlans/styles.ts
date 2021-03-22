import { StyleSheet } from 'react-native';
import { getHeight } from '../../utils/responsive';
import { colors } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  sectionContainer: {
    marginBottom: 40,
    marginHorizontal: 16,
    marginTop: getHeight(21),
  },
});

export default styles;
