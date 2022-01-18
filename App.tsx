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
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {RecoilRoot} from 'recoil';

import theme from './src/global/styles/theme';
import {Route} from './src/routes/Route';
import { themeType } from './src/atoms/typeAtom';

export const App: React.FC = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Route />
      </ThemeProvider>
    </RecoilRoot>
  );
};
