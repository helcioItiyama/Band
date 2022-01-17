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
import theme from './src/global/styles/theme';
import {Route} from './src/routes/Route';
import {RecoilRoot} from 'recoil';

export const App: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Route />
        </ThemeProvider>
      </RecoilRoot>
    </SafeAreaView>
  );
};
