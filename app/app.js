import React from 'react';
import { Provider } from 'react-redux';

// Routes Component
import Routes from './routes';

// Store
import store from './store';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
