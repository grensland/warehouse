import { takeEvery } from 'redux-saga/effects';
import { PUPPET_SHOW_ACTIONS } from '../common/PuppetShowConstants';
import firebase from '../../../fire';

// PUPPET SHOWS
export function* fetchPuppetShows() {
  yield firebase.database().ref('puppetShows').once('value').then((snapshot) => {
    console.log('SNAPSHOT', snapshot, snapshot.val());
  });
}

// SAGA WATCHERS
export function* puppetShowSagaWatcher() {
  yield takeEvery(PUPPET_SHOW_ACTIONS.FETCH_PUPPET_SHOWS_REQUEST, fetchPuppetShows);
}
