import React from 'react';
import {Provider} from 'react-redux';
import {Router} from './navigation';
import {store} from './state/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
