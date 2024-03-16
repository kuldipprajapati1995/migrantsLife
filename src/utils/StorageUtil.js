// Keychain and asyncStorage + sharedPrefrences
import EncryptedStorage from 'react-native-encrypted-storage';

const saveItem = (key, value) => {
  EncryptedStorage.setItem(key, value);
};

const readItem = async key => {
  try {
    var result = await EncryptedStorage.getItem(key);
    return result;
  } catch (e) {
    return JSON.stringify(e);
  }
};

const multiRead = (key, onResponse, onFailure) => {
  try {
    EncryptedStorage.multiGet(key).then(values => {
      let responseMap = new Map();
      values.map((result, i, data) => {
        // eslint-disable-next-line no-shadow
        let key = data[i][0];
        let value = data[i][1];
        responseMap.set(key, value);
      });
      onResponse(responseMap);
    });
  } catch (error) {
    onFailure(error);
  }
};

const deleteItem = async key => {
  try {
    await EncryptedStorage.removeItem(key);
    return true;
  } catch (exception) {
    return false;
  }
};

export default {saveItem, readItem, multiRead, deleteItem};
