import {Platform, StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import { ResizeValue } from '../../theme/styles';

export const checkboxStyles = StyleSheet.create({
  parentView: {justifyContent: 'space-between'},
  drinkCard: {
    paddingLeft: 6,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: 'white',
    height: 55,
    elevation: 1,
    marginRight: 5,
    borderRadius: 4,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  containerstyle: {
    flexDirection: 'row',
  },
});

export const errorStyles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  btn: {width: '100%'},
  error: {
    fontSize: 26,
    color: 'black',
    margin: 24,
    textAlign: 'center',
  },
});

export const errorViewStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  btn: {width: '100%'},
  error: {
    fontSize: 26,
    color: 'black',
    margin: 24,
    textAlign: 'center',
  },
  btn_divider: {height: 16},
});

export const networkStatusStyle = StyleSheet.create({
  alwaysOnTop: {
    elevation: 100,
    zIndex: 100,
  },
  redContainer: {
    position: 'absolute',
    backgroundColor: 'red',
    height: 30,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  greenContainer: {
    position: 'absolute',
    backgroundColor: 'green',
    height: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#fff',
    fontSize: 18,
  },
});

export const radioButtonStyles = StyleSheet.create({
  conatinerCard: {
    paddingLeft: 6,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    height: 55,
    elevation: 1,
    marginRight: 5,
    borderRadius: 4,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  radioButton: {alignItems: 'flex-start'},
});

export const utilStyles = StyleSheet.create({
  cross_style: {height: 24, width: 24, marginEnd: 8},
  search_style: {height: 24, width: 24, marginStart: 8},
});

export const searchBarStyles = colors =>
  StyleSheet.create({
    searchBarContainerStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#F8F8FA',
      borderRadius: ResizeValue(8),
      borderWidth: ResizeValue(1),
      borderColor: '#CDCDCD',
      height: ResizeValue(50),
    },
    searchBarSubContainerStyle: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchIcon: {
      width: ResizeValue(20),
      height: ResizeValue(20),
      marginStart: ResizeValue(10)
    },
    textInput: {
      flex: 1,
      marginHorizontal: ResizeValue(10),
      fontSize: ResizeValue(14),
      color: colors.darkTextColor,
      ...fonts.FONT_500,
      marginStart: ResizeValue(10),
      marginEnd: ResizeValue(10),
      height: ResizeValue(35),
      includeFontPadding:false,
    },
    clearIcon: {
      height: 20,
      width: 20,
      marginHorizontal: 10,
    },
  });

export const InputTextBoxStyle = colors =>
  StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: ResizeValue(5),
      marginTop: ResizeValue(10),
      height: ResizeValue(40),
      borderRadius: ResizeValue(5),
      backgroundColor: colors.multipleLineTextInputBackground,
      ...fonts.FONT_500
    },
    image: {
      height: ResizeValue(18),
      width: ResizeValue(18),
      marginRight: ResizeValue(16)
    },
    leftImage: {
      height: ResizeValue(20),
      width: ResizeValue(20),
      marginLeft: ResizeValue(13),
    },
    inputText: {
      flex: 1,
      fontSize: ResizeValue(14),
      marginHorizontal: ResizeValue(12),
      paddingVertical: ResizeValue(5),
      color: colors.black,
      ...fonts.FONT_400,
    },
    checkImageContainer: {
      height: ResizeValue(18),
      width: ResizeValue(18),
      // borderRadius: ResizeValue(10),
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: ResizeValue(10),
    },
    checkImage: {
      height: ResizeValue(10),
      width: ResizeValue(10),
    },
    headerTitleStyle: {
      color: colors.black,
      ...fonts.FONT_700,
      fontSize: ResizeValue(14),
      flex: 1
    },
    headerRightButtonTextStyle: {
      color: '#2459A1',
      ...fonts.FONT_700,
      fontSize: ResizeValue(10),
    }
  });

export const TouchableOpacityWithTextStyle = colors => StyleSheet.create({
  containerStyle: {
    backgroundColor: '#EEEEF2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    marginLeft: ResizeValue(10),
    borderRadius: ResizeValue(5)
  },
  leftIconStyle: {
    marginLeft: ResizeValue(8),
    height: ResizeValue(24),
    width: ResizeValue(24),
  },
  titleTextStyle: {
    fontSize: ResizeValue(13),
    color: colors.black,
    // marginLeft: ResizeValue(5),
    marginRight: ResizeValue(10),
    textAlign: 'center',
    includeFontPadding:false,
    ...fonts.FONT_600,
    marginVertical: ResizeValue(12)
  },
  rightDownArrowStyle: {
    height: ResizeValue(10), 
    width: ResizeValue(10), 
    marginVertical: ResizeValue(5), 
    marginRight: ResizeValue(10), 
  },
})

export const ResetFilterButtonStyle = colors => StyleSheet.create({
  resetFilterContainerStyle: {
    height: ResizeValue(50), 
    // marginHorizontal: ResizeValue(20), 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#1E5AA3',
    marginBottom: ResizeValue(15),
    borderRadius: ResizeValue(5),
    flex: 1
  },
  resetFilterIconStyle: {
    height: ResizeValue(22), 
    width: ResizeValue(22), 
    marginEnd: ResizeValue(5),
  },
  resetFilterTextStyle: {
    ...fonts.FONT_700,
    fontSize: ResizeValue(16),
    color: colors.white,
    marginTop: Platform.OS === 'android' && ResizeValue(-3)
  }
})

export const noRecordFoundStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  noResultText: {
    color: '#1E5AA3',
    fontSize: ResizeValue(16),
    ...fonts.FONT_700
  },
  noProductText: {
    marginTop: ResizeValue(6),
    color: '#5A5A5A',
    fontSize: ResizeValue(12),
    ...fonts.FONT_400
  },
});

