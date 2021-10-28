import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {Home} from '../screens/Home/Home';
import {AlbumDetail} from '../screens/AlbumDetail/AlbumDetail';

export type RootStackParamList = {
  Home: undefined;
  AlbumDetail: undefined;
};

export type MainStack = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Route: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AlbumDetail" component={AlbumDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
