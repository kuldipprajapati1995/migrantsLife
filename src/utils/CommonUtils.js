import {Alert, Linking, Platform} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {log} from './LogUtils';
import {showMessage} from 'react-native-flash-message';
import { ResizeValue } from '../theme/styles';
import fonts from '../assets/fonts';
import { asyncStorageKeys, clearDefaultsKeys, storeAsyncData } from './AsyncstorageFunction';
import NavigationService from './NavigationService';
import { APP_NAME } from './Constants';

const showAlert = (title = APP_NAME, message, okItemPressed) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: 'Ok',
        onPress: () => {
          log('OK Pressed');
        },
      },
    ],
    {cancelable: false},
  );
};

const showNotificationAlert = (title, message) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: 'Close',
        onPress: () => {
          log('OK Pressed');
        },
      },
    ],
    {cancelable: false},
  );
};

export const showSnackbar = (text) => {
  showMessage({
    message: text,
    type: "default",
    backgroundColor: '#143D59',
    color: 'white',
    titleStyle: {
      fontSize: ResizeValue(14),
      ...fonts.FONT_500
    }
  });
}

const isInternetConnected = async () => {
  let state = await NetInfo.fetch();
  return state.isConnected;
};

const isWebPlatform = () => Platform.OS === 'web';

const amountFormatter = (amount, currency) => {
  return (
    currency +
    parseInt(amount)
      .toFixed(0)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  );
};

export function emailValidate(text) {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(text) === false) {
    return false;
  } else {
    return true;
  }
}

export function phoneNoValidate(input) {
  let numberRegex = /^\d{9,10}$/;
  return numberRegex.test(input);
}

export function passwordValidate(input) {
  let passwordRegex = /^(?=.*[A-Z])(?=.*[\d])(?=.*[\W_]).{8,49}$/;
  return passwordRegex.test(input);
}

export function creditCardCVVValidate(text) {
  let reg = /^[0-9]{3,4}$/;
  if (reg.test(text) === false) {
    return false;
  } else {
    return true;
  }
}

const isExpirationDateValid = expirationDate => {
  // Check that the input matches the format "MM/YY"
  const isValidFormat = /^(\d{2})\/(\d{2})$/.test(expirationDate);
  if (!isValidFormat) {
    return false;
  }

  // Extract the month and year from the input
  const [month, year] = expirationDate.split('/');

  // Check that the month is a number between 1 and 12
  const isValidMonth =
    /^\d{1,2}$/.test(month) &&
    parseInt(month, 10) >= 1 &&
    parseInt(month, 10) <= 12;
  if (!isValidMonth) {
    return false;
  }

  // Check that the year is a two-digit number greater than or equal to the current year
  const currentYear = new Date().getFullYear() % 100;
  const isValidYear = /^\d{2}$/.test(year) && parseInt(year, 10) >= currentYear;
  if (!isValidYear) {
    return false;
  }

  // The input is valid
  return true;
};

export function creditCardNoValidate(text) {
  let reg = /^4[0-9]{12}(?:[0-9]{3})?$/;
  if (reg.test(text) === false) {
    return false;
  } else {
    return true;
  }
}

const debounce = (func, timeout = 500) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

//afterthewhy.com this is website and not working afterthewhy.com , www.afterthewhy.com, https.afterthewhy.com  or http.afterthewhy.com this website needs to work, please correct my logic
export const openExternalBrowser = (externalUrl) => {
  // Remove 'www.' if it exists
  // const cleanedUrl = externalUrl.startsWith("www.") ? "https://" + externalUrl : externalUrl;
  // Add "https://" if not present
  if (!externalUrl.match(/^(https?:\/\/)/i)) {
    externalUrl = 'https://' + externalUrl;
  }

  // Add "www." if not present
  if (!externalUrl.match(/^(https?:\/\/)?(www\.)/i)) {
    externalUrl = externalUrl.replace(/^(https?:\/\/)?/, '$1www.');
  }

  if(Platform.OS === 'android') {
    Linking.openURL(externalUrl).catch((err) => console.error('An error occurred', err));
  } else {
    //www.afterthewhy.com link getting error - WARN  Possible Unhandled Promise Rejection (id: 3): , please correct my code
    Linking.canOpenURL(externalUrl).then(supported => {
      if (supported) {
        Linking.openURL(externalUrl);
      } else {
        console.log("Don't know how to open URI: " + externalUrl);
      }
    });
  }
}

export const ForceLogout = async(navigation) => {
  clearDefaultsKeys()
  await storeAsyncData(asyncStorageKeys.isUserLogin, "false");
  NavigationService.reset(navigation, "LoginScreen");
}

export function formatNumber(num) {
  if (num >= 1e9) {
      return (num / 1e9).toFixed(1) + 'B';
  }
  if (num >= 1e6) {
      return (num / 1e6).toFixed(1) + 'M';
  }
  if (num >= 1e3) {
      return (num / 1e3).toFixed(1) + 'K';
  }
  return num.toString();
}

export function setTopLevelNavigator(navigationRef){
  _navigator = navigationRef;
};

export function navigateToScreen(name,params){
  if (_navigator.isReady()) {
    _navigator.navigate(name, params);
  }
}

export function navigateToEventTab() {
  if (_navigator.isReady()) {
    _navigator.navigate("Events", {
      screen: "EventsScreen"
    });
  }
}

export function navigateToHomeTab() {
  if (_navigator.isReady()) {
    _navigator.navigate("Home", {
      screen: "HomeScreen"
    });
  }
}

//how to access route name and props in the react native
export const getCurrentRouteName = () => {
  if (_navigator.isReady()) {
    const route = _navigator.getCurrentRoute();
    if (route) {
      return {
        name: route.name || '',
        params: route.params || {}
      }
    }
  }
  return {
    name: '',
    params: {}
  };
};

export {
  showAlert,
  showNotificationAlert,
  isInternetConnected,
  isWebPlatform,
  amountFormatter,
  isExpirationDateValid,
  debounce,
};
