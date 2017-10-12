import { combineReducers } from 'redux';

import PuppetShowReducer from '../screens/puppetShow/reducers/PuppetShow';

const reducers = {
  puppetShow: PuppetShowReducer,
};

export default combineReducers(reducers);
