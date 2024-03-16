import AsyncStorage from '@react-native-async-storage/async-storage';

export const asyncStorageKeys = {
    isUserLogin: 'isUserLogin',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    deviceToken: 'deviceToken',
    messagesPushNotificationEnabled: 'messagesPushNotificationEnabled',
    isWalkThroughScreen: 'isWalkThroughScreen',
}

export const storeAsyncData = async (key, data) => {
    try {
        await AsyncStorage.setItem(key, data)
    } catch (e) {
        // saving error
        console.log("AsyncStorage(ERROR)=======>>>>>", e)
    }
}

export const getAsyncData = async (key, callback) => {
    try {
        const value = await AsyncStorage.getItem(key)
        // value previously stored
        callback(value)
    } catch (e) {
        // error reading value
        console.log("AsyncStorage(ERROR)=======>>>>>", e)
    }
}
export const clearAllAsyncData = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        // clear error
    }
}

export const clearDefaultsKeys = async () => {
    try {
        await AsyncStorage.removeItem(asyncStorageKeys.isUserLogin);
        await AsyncStorage.removeItem(asyncStorageKeys.accessToken);
        await AsyncStorage.removeItem(asyncStorageKeys.refreshToken);
    } catch (e) {
        // clear error
    }
}
 
export const removeItemValue = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    } catch (e) {
        return false;
    }
}

export const getDefaultsKey = async(key) => {
    try {
         const result = await AsyncStorage.getItem(key);
         return result;
      } catch(error) {
        console.log(error);
      }
  }