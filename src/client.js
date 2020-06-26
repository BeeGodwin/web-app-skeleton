import React from 'react';
import { hydrate } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './app/reducers/rootReducer';
import App from './app/containers/App';
import './sass/styles.scss';

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const store = createStore(
  rootReducer, 
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);