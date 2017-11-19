import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import AppReducer from '../reducers';
import rootSaga from '../sagas';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(AppReducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);

  return store;
}
