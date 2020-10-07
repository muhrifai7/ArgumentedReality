import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './redux/ducks/store';
import {MainApp} from './router';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainApp />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
