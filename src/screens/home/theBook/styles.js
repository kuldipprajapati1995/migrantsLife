import { StyleSheet } from 'react-native';
import fonts from '../../../assets/fonts';
import { ResizeValue } from '../../../theme/styles';

export const mobileStyles = colors => StyleSheet.create({
    mainContainer: {
      backgroundColor: colors.white,
      flex: 1,
    },
    subContainerStyle: {
      flex: 1,
    },
    appIconStyle: {
      height: ResizeValue(100), 
      width: ResizeValue(200), 
      alignSelf: 'center',
      marginTop: ResizeValue(30)
    },
    titleTextStyle: {
      color: colors.black,
      marginTop: ResizeValue(10),
      textAlign: 'center',
      fontSize: ResizeValue(16),
      alignSelf: 'stretch',
      marginHorizontal: ResizeValue(20),
      ...fonts.FONT_600
    },
    feedbackTextFieldContainerStyle: {
      alignSelf: 'stretch', 
      flexDirection: 'row',
      height : ResizeValue(120), 
      marginTop: ResizeValue(10),
      borderRadius: ResizeValue(5),
      backgroundColor: colors.multipleLineTextInputBackground
    },
    feedbackTextFieldStyle: {
      textAlignVertical: 'top',
      fontSize: ResizeValue(14), 
      alignSelf: 'stretch', 
      marginHorizontal: ResizeValue(15), 
      flex: 1, 
      marginVertical: ResizeValue(10), 
      height: ResizeValue(100), 
      ...fonts.FONT_500
    },
   submitBtnContainerStyle: {
      backgroundColor: colors.themeBlueColor, 
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: ResizeValue(20), 
      borderRadius: ResizeValue(5),
      height: ResizeValue(45),
      marginHorizontal: ResizeValue(20),
      marginBottom: ResizeValue(10),
    },
    submitTextStyle: {
      fontSize: ResizeValue(14),
      color: colors.white,
      ...fonts.FONT_600,
      marginLeft: ResizeValue(10),
      marginRight: ResizeValue(5)
    },

    dropdownStyle: {
      height: ResizeValue(40),
      backgroundColor: colors.multipleLineTextInputBackground,
      borderRadius: ResizeValue(5),
      paddingHorizontal: 8,
    },
    placeholderStyle: {
      fontSize: ResizeValue(14),
      ...fonts.FONT_500,
      marginHorizontal: ResizeValue(5),
      color: colors.textPlaceHolderColor
    },
    selectedTextStyle: {
      fontSize: ResizeValue(14),
      ...fonts.FONT_400,
      marginHorizontal: ResizeValue(5),
      color: colors.black,
    },
    inputSearchStyle: {
      color: colors.black,
      height: ResizeValue(40),
      fontSize: ResizeValue(14),
      ...fonts.FONT_400
    },
    iconStyle: {
      width: ResizeValue(20),
      height: ResizeValue(20),
    },
  });
