import {createStore, applyMiddleware, compose} from 'redux';
import {createMigrate, persistStore, persistReducer} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import {migrations, migrationVersion} from './migrations';
import reducers from './reducers';
import sagas from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: migrationVersion,
  migrate: createMigrate(migrations, {debug: false}),
  stateReconciler: autoMergeLevel2,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const sagaMiddleware = createSagaMiddleware();

function configureStore() {
  let enhancer;
  if (__DEV__) {
    const createFlipperDebugger = require('redux-flipper').default;
    enhancer = composeWithDevTools(
      applyMiddleware(sagaMiddleware, createFlipperDebugger()),
    );
  } else {
    enhancer = compose(applyMiddleware(sagaMiddleware));
  }
  return createStore(persistedReducer, enhancer);
}

export const store = configureStore();
export const persistor = persistStore(store);

Object.keys(sagas).forEach((key) => {
  sagaMiddleware.run(sagas[key]);
});
