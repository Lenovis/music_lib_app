import React from 'react';
import {Provider} from 'react-redux';
import {Router} from './navigation';
import {persistor, store} from './state/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
