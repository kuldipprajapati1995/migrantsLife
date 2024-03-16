import crashlytics from '@react-native-firebase/crashlytics';

export const logCrash = async () => {
  crashlytics().crash();
};

export const logAPIerrors = async (error, request, status, message) => {
  crashlytics().log('API Error');
  await Promise.all([
    crashlytics().setAttributes({
      request: request,
      status: status,
      message: message,
    }),
  ]);
  logInternalErrors(error);
};

const logInternalErrors = async error => {
  crashlytics().recordError(error);
};

export {logInternalErrors};
