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
 import {ThemeProvider} from 'styled-components';
 import {RecoilRoot} from 'recoil';
 
 import theme from './src/global/styles/theme';
 import {Route} from './src/routes/Route';
 
 export const App: React.FC = () => {
   return (
     <RecoilRoot>
       <ThemeProvider {...{theme}}>
         <Route />
       </ThemeProvider>
     </RecoilRoot>
   );
 };
