import React from 'react';
import { hydrate } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from './app/reducers/rootReducer';
import App from './app/App';
import './sass/styles.scss';

const preloadedState = window.__PRELOADED_STATE__;
const serverSideProps = window.serverSideProps;

delete window.__PRELOADED_STATE__;
delete window.serverSideProps;

const store = createStore(
  rootReducer, 
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

hydrate(
  <Router>
    <Provider store={store}>
      <App pid={serverSideProps.pid}/>
    </Provider>
  </Router>,
  document.getElementById('root')
);