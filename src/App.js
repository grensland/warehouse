import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';
import './App.css';
import AppReducers from './reducers';

const store = createStore(AppReducers);

const App = () => (
  <Provider store={store}>
    <div>Hello world</div>
  </Provider>
);

export default App;
