/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';
import theme from './src/global/styles/theme';
import {Route} from './src/routes/Route';
import {store} from './src/store/store';

export const App: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Route />
        </ThemeProvider>
      </Provider>
    </SafeAreaView>
  );
};
