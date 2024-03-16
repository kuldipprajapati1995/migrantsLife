import {applyMiddleware, compose} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: 'TheIndianMate',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  timeout: 0,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistor = persistStore(store)

export {store, persistor};

// const middleware = [thunk];
// const middlewareEnhancer = applyMiddleware(...middleware);
// const storeEnhancers = [middlewareEnhancer];
// const devToolsEnhnacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const composedEnhancers = devToolsEnhnacer(...storeEnhancers);

// const store = configureStore({
//   reducer: rootReducer,
//   composedEnhancers,
// });

// export default store;
