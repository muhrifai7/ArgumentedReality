import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { store } from 'redux'
import Routes from './router';


function App() {
  return (
    // <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    // </Provider>

  );
}

export default App;
