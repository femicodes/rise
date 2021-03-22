import { StyleSheet } from 'react-native';
import { getHeight, getWidth } from '../../utils/responsive';
import { fontFamily, colors } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headingContainer: {
    marginTop: getHeight(93),
    marginHorizontal: getWidth(16),
  },
  headingText: {
    fontFamily: fontFamily.GELION_BOLD,
    fontSize: 28,
    color: colors.DARK,
    lineHeight: 34,
  },
  subHeaderContainer: {
    marginTop: getHeight(12),
  },
  subHeaderText: {
    fontSize: 17,
    marginHorizontal: getWidth(16),
    lineHeight: 22,
    fontFamily: fontFamily.GELION_REGULAR,
    color: colors.DARK,
  },
  inputContainer: {
    marginTop: getHeight(25),
    marginHorizontal: getWidth(16),
  },
  textInputContainer: {
    height: getHeight(55),
    backgroundColor: colors.LIGHT_OFF_TEAL,
    borderColor: colors.JAGGED_ICE,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    paddingLeft: getWidth(20),
    paddingRight: getWidth(16),
  },
  textInput: {
    color: colors.DARK,
    fontFamily: fontFamily.GELION_SEMI_BOLD,
    fontSize: getHeight(17),
    lineHeight: 22,
    flex: 1,
  },
  passwordContainer: {
    marginTop: getHeight(19),
  },
  signInButton: {
    marginTop: getHeight(27),
    marginHorizontal: getWidth(16),
  },
});

export default styles;
