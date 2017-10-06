import { combineReducers } from 'redux';

import PuppetShowReducer from '../screens/puppetShow/reducers/puppetShow';

const reducers = {
  puppetShow: PuppetShowReducer,
};

export default combineReducers(reducers);
