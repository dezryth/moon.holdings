import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import coins from 'reducers/coins';

/* eslint-disable no-underscore-dangle */
const reduxDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
/* eslint-enable */

const store = createStore(
  combineReducers({ coins }),
  reduxDevToolsExtension && reduxDevToolsExtension(),
  applyMiddleware(thunk)
);

export default store;
