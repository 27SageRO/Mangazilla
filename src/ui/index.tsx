import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DarkTheme, Theme} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from 'services/store';

import Home from 'ui/home/container';
import R from 'resource/R';

const theme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    text: R.colors.white,
    background: R.colors.background,
  },
};

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
