import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    padding: 20,
    marginRight: 16,
    // alignItems: 'center'
  },
  button: {
    width: '100%',
    height: 36,
    flex: 1,
    alignItems: 'center'
  },
  buttonTitle: {
    color: THEME.COLORS.TEXT
  }
});