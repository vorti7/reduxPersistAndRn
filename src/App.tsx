// In App.js in a new project

import * as React from 'react';
import {} from 'react-native';

import { Provider, useDispatch, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store, persistor } from './store'

import RootNavigator from './components/navigator/root'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator/>
      </PersistGate>
    </Provider>
  );
}

export default App;