import { StyleSheet } from 'react-native';
import { ResizeValue } from '../../theme/styles';

export const mobileStyles = colors =>
  StyleSheet.create({
    mainContainer: {
      backgroundColor: colors.white,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
