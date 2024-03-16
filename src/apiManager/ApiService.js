import http from 'axios';
import { showSnackbar } from '../utils/CommonUtils';
import { logError } from '../utils/LogUtils';
import { loaderBegin, loaderEnd } from '../redux/slices/loader/LoaderSlice';
import { API_URL, API_URL_PROD } from '../utils/Constants';
import { asyncStorageKeys, getDefaultsKey } from '../utils/AsyncstorageFunction';
import { getLatestInternetStatus } from '../utils/InternetStatusObserver';
// import { logAPIerrors } from '../utils/CrashUtil';

let store;
const initializeStore = reduxStore => {
  if (!store) {
    store = reduxStore;
  }
};

const apiBaseHeaders = {
  "x-app-version": "1.1.0",
  // 'Content-Type': 'application/json',
  // version: 'v2',
};

const get = (route, headers, params, isLoaderShow, timeout = 15000) => {
  return api('get', route, headers, params, {}, isLoaderShow, timeout);
};

const put = (route, headers, params, data, isLoaderShow, timeout) => {
  return api('put', route, headers, params, data, isLoaderShow, timeout);
};

const post = (route, headers, params, data, isLoaderShow, timeout) => {
  return api('post', route, headers, params, data, isLoaderShow, timeout);
};

const patch = (route, headers, params, data, isLoaderShow, timeout) => {
  return api('patch', route, headers, params, data, isLoaderShow, timeout);
};

const deleteRequest = (route, headers, params, data, isLoaderShow, timeout) => {
  return api('delete', route, headers, params, data, isLoaderShow, timeout);
};

const api = async (
  requestType,
  route,
  headers,
  params,
  data,
  isLoaderShow = true,
  timeout = 15000,
) => {
  const isConnected = getLatestInternetStatus();

  if (isLoaderShow) {
    store.dispatch(loaderBegin());
  }

  if(route.includes("region/get?type=country") || route.includes("region/get?type=city&page=") || route.includes("region/search?page=")) {
    store.dispatch(loaderEnd())
  }

  if (isConnected) {
    const host = API_URL_PROD;
    const url = `${host}${route}`;
    const baseHeaders = apiBaseHeaders;

    let getAccessTokenHeader = {}
    let accessToken = await getDefaultsKey(asyncStorageKeys.accessToken)

    if (accessToken != null || accessToken != undefined) {
        getAccessTokenHeader["x-app-version"] = "1.1.0",
        getAccessTokenHeader["Authorization"] = "Bearer " + accessToken;
    }

    const requestConfig = {
      headers: (accessToken != null || accessToken != undefined) ? { ...getAccessTokenHeader } : baseHeaders,
    };

    if (params) {
      requestConfig.params = params;
    }
    http.create();
    http.defaults.timeout = timeout;

    if (requestType === 'get' || requestType === 'delete') {
      return http[requestType](url, requestConfig).then(response => {
        return checkValidJSON(response);
      }).catch(error => {
        let errResponseCode = error.response.status
        if (errResponseCode === 400 || errResponseCode === 409 || errResponseCode === 500) {
          showSnackbar(error.response.data.message)
          return;
        }
        if (errResponseCode === 404) {
          return checkValidJSON(error.response);
        }
        if (errResponseCode === 401) {
          logApiError(error);
          return checkValidJSON(error.response);
        }
        if (errResponseCode === 406 || errResponseCode === 423 || errResponseCode === 403) {
          logApiError(error);
          return checkValidJSON(error.response);
        }
        return Promise.reject(error);
      }).finally(() => {
        store.dispatch(loaderEnd());
      });
    }

    return http[requestType](url, data, requestConfig).then(response => {
      return checkValidJSON(response);
    }).catch(error => {
      logApiError(error);
      let errResponseCode = error.response.status
      if (errResponseCode === 400 || errResponseCode === 409 || errResponseCode === 500) {
        showSnackbar(error.response.data.message)
        return;
      }
      if (errResponseCode === 404) {
        return checkValidJSON(error.response);
      }
      if (errResponseCode === 401) {
        logApiError(error);
        return checkValidJSON(error.response);
      }
      if (errResponseCode === 406 || errResponseCode === 423 || errResponseCode === 403) {
        // if(route.includes("auth/login")) {
        //   showSnackbar(error.response.data.message)
        // }
        logApiError(error);
        return checkValidJSON(error.response);
      }
      // logApiError(error);
      return Promise.reject(error);
    }).finally(() => {
      store.dispatch(loaderEnd()); //loading end
    });
  } else {
    showSnackbar("No active internet connection")
    let error = { status: undefined, message: 'No active internet connection' };
    try {
      Promise.reject(error);
    } catch (err) {
      logApiError(err);
      logError('error for post', err);
    } finally {
      store.dispatch(loaderEnd());
    }
  }
};


const checkValidJSON = response => {
  if (typeof response !== 'string') {
    return response;
  }
  return Promise.reject(response);
};

const logApiError = async error => {
  const { url, method, data, headers } = error.config || {};
  const {
    status,
    data: responseData,
    headers: responseHeaders = {},
  } = error.response || {};

  // logAPIerrors(
  //   error,
  //   JSON.stringify(error.config),
  //   error.status,
  //   isHTML(responseHeaders) ? error.message : JSON.stringify(responseData),
  // );

  logError(`API Error - Details are below:
        url->${url}\n
        method->${method}\n
        data->${data}\n
        headers->${JSON.stringify(headers)}\n
        status->${status}\n
        response->${JSON.stringify(responseData)}\n
        responseHeaders->${JSON.stringify(responseHeaders)}\n`);
};

const isHTML = headers => {
  if (headers['content-type']) {
    return headers['content-type'].toLowerCase().includes('html');
  } else {
    return true;
  }
};

export default { get, put, post, deleteRequest, patch, initializeStore };
