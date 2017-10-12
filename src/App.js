import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';
import './App.css';
import AppReducers from './reducers';
import PuppetShowListContainer from './screens/puppetShow/containers/PuppetShowList';
import { getPuppetShows } from './screens/puppetShow/actions/PuppetShow';

console.log('START APP');

const store = createStore(AppReducers);

store.dispatch(getPuppetShows());
store.dispatch(getPuppetShows());
store.dispatch(getPuppetShows());

const App = () => (
  <Provider store={store}>
    <PuppetShowListContainer />
  </Provider>
);

export default App;
