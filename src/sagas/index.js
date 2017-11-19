import { fork } from 'redux-saga/effects';
import { puppetShowSagaWatcher } from '../screens/puppetShow/sagas/PuppetShow';

function* rootSaga() {
  yield [
    fork(puppetShowSagaWatcher),
  ];
}

export default rootSaga;
