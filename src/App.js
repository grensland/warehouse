import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider } from 'material-ui';
import { Provider } from 'react-redux';
import React from 'react';
import './App.css';
import PuppetShowListContainer from './screens/puppetShow/containers/PuppetShowList';
import { fetchPuppetShowsRequest } from './screens/puppetShow/actions/PuppetShow';
import configureStore from './store/index';

console.log('START APP');
const store = configureStore();

injectTapEventPlugin();

store.dispatch(fetchPuppetShowsRequest());

const App = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <PuppetShowListContainer />
    </Provider>
  </MuiThemeProvider>
);

export default App;
