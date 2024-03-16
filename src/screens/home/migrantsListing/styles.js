import { StyleSheet } from 'react-native';
import { ResizeValue } from '../../../theme/styles';
import fonts from '../../../assets/fonts';

export const mobileStyles = colors => StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  subContainerStyle: {
    marginTop: ResizeValue(5),
    flex: 1,
  },
  searchBarContainerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: ResizeValue(16),
    marginTop: ResizeValue(15)
  },
  searchBarStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  filterButtonContainerStyle: {
    height: ResizeValue(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.themeBlueColor,
    marginLeft: ResizeValue(10),
    borderRadius: ResizeValue(8),
  },
  filterTextStyle: {
    ...fonts.FONT_600,
    fontSize: ResizeValue(12),
    color: colors.white,
    marginHorizontal: ResizeValue(16),
  },

});
