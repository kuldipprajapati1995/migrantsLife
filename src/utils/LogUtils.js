const log = (...arr) => {
  if (__DEV__) {
    console.log(...arr);
  }
};

const logDebug = (...arr) => {
  if (__DEV__) {
    console.debug(...arr);
  }
};

const logWarning = (...arr) => {
  if (__DEV__) {
    console.warn(...arr);
  }
};

const logInfo = (...arr) => {
  if (__DEV__) {
    console.info(...arr);
  }
};

const logError = (...arr) => {
  if (__DEV__) {
    console.error(...arr);
  }
};

export {log, logDebug, logWarning, logInfo, logError};
