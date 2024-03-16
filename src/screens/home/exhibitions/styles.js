import { StyleSheet } from 'react-native';
import { ResizeValue } from '../../../theme/styles';

export const mobileStyles = colors => StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  subContainerStyle: {
    flex: 1,
    marginHorizontal: ResizeValue(16),
    marginVertical: ResizeValue(20),
  },
});