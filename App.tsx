import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './src/navigation';
import { store } from './src/redux/store';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navigation />
        <FlashMessage position="top" />
      </Provider>
    </>
  );
};

export default App;
