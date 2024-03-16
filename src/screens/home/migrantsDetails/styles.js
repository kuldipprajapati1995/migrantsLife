import { StyleSheet, Dimensions } from 'react-native';
import { ResizeValue } from '../../../theme/styles';
import fonts from '../../../assets/fonts';

export const mobileStyles = colors => StyleSheet.create({
    mainContainer: {
      backgroundColor: colors.white,
      flex: 1,
    },
    subContainerStyle: {
      flex: 1,
      marginTop: ResizeValue(16),
    },
    scrollViewContainerStyle: {
      marginHorizontal: ResizeValue(16)
    },
    imgContainerStyle: {
      position: 'absolute',
      backgroundColor: 'transparent',
      width: Dimensions.get('window').width - ResizeValue(32),
      marginHorizontal: ResizeValue(16),
      bottom: 0,
      borderBottomLeftRadius: ResizeValue(5),
      borderBottomRightRadius: ResizeValue(5),
    },
    imgStyle: {
      height: ResizeValue(350), 
      marginHorizontal: ResizeValue(16), 
      borderRadius: ResizeValue(5)
    },
    titleTextStyle: {
      flex: 1,
      fontSize: ResizeValue(20),
      marginTop: ResizeValue(50),
      marginHorizontal: ResizeValue(16),
      marginBottom: ResizeValue(16),
      color: colors.white,
      ...fonts.FONT_600,
      includeFontPadding: false,
    },
    descriptionTextStyle: {
      flex: 1,
      fontSize: ResizeValue(14),
      marginTop: ResizeValue(15),
      color: colors.black,
      ...fonts.FONT_500,
      includeFontPadding: false,
      lineHeight: ResizeValue(20)
    },

    buttonContainerStyle: {
      alignSelf: 'flex-start',
      backgroundColor: colors.themeBlueColor,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: "hidden",
      borderRadius: ResizeValue(5),
      marginTop: ResizeValue(15),
      width: '100%',
      marginBottom: ResizeValue(20)
    },
    buttonTextStyle: {
      fontSize: ResizeValue(14),
      marginHorizontal: ResizeValue(15),
      marginVertical: ResizeValue(15),
      color: colors.white,
      ...fonts.FONT_800,
      includeFontPadding: false,
    }
  });
