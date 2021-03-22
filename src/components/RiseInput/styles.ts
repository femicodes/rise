import { StyleSheet } from 'react-native';
import { fontFamily, colors } from '../../utils';

const styles = StyleSheet.create({
  textInputContainer: {
    height: 55,
    backgroundColor: colors.LIGHT_OFF_TEAL,
    borderColor: colors.JAGGED_ICE,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 16,
  },
  textInput: {
    color: colors.DARK,
    fontFamily: fontFamily.GELION_SEMI_BOLD,
    fontSize: 17,
    lineHeight: 22,
  },
  eyeIcon: {
    width: 23,
    height: 16,
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 0,
    bottom: 15,
    marginRight: 16,
  },
  inputWidth: {
    width: '90%',
  },
  inputFlex: {
    flex: 1,
  },
});

export default styles;
