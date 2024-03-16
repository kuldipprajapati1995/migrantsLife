import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {StyleSheet} from 'react-native';
import colors from '../colors';

export const rnStyles = StyleSheet.create({
  welcome_text: {
    fontSize: RFValue(24, 580),
    textAlign: 'center',
    margin: 10,
    color: colors.red,
  },
  instructions_text: {
    textAlign: 'center',
    color: colors.textColorBlack,
    marginBottom: 15,
    fontSize: RFPercentage(2),
  },
});
