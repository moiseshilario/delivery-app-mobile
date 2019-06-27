import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './ducks';
import rootSaga from './sagas';

const middlewares = [];

// eslint-disable-next-line no-console
const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const saglaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(saglaMiddleware);

const composer = __DEV__
  ? compose(
    applyMiddleware(...middlewares),
    // eslint-disable-next-line no-console
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...middlewares);

const store = createStore(rootReducer, composer);

saglaMiddleware.run(rootSaga);

export default store;
