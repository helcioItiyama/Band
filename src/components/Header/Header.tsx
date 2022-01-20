import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, StatusBar} from 'react-native';
import {Icon} from 'react-native-elements';

import theme from '../../global/styles/theme';
import { useAppDispatch, useAppSelector } from '../../toolkitStore/reduxHooks';
import { themeState, toggleTheme } from '../../toolkitStore/themeReducer';

import {Container, Title, Toggle, GoBack} from './_Header';

interface IHeader {
  title: string;
  toGoBack?: boolean;
};

const {height} = Dimensions.get('window');

export const Header = ({title, toGoBack}: IHeader) => {
  const {goBack} = useNavigation();
  const {type} = useAppSelector(themeState);
  const dipatch = useAppDispatch();
  
  const renderLeftIcon = () => {
    if (toGoBack) {
      return (
        <GoBack onPress={goBack}>
          <Icon 
            name="chevron-back-outline" 
            type="ionicon" 
            color={theme.colors[type].secondaryLight} 
            />
        </GoBack>
      );
    }
  };

  return (
    <Container {...{type}}>
      <StatusBar 
        barStyle={type === 'light' ? 'dark-content' : 'light-content' }
        translucent 
        backgroundColor='transparent'
      />
      {renderLeftIcon()}
      <Title {...{type}}>{title}</Title>
      <Toggle
        style={{height: height * 0.04}}
        value={type === 'dark'}
        onValueChange={() => {dipatch(toggleTheme())}}
      />
    </Container>
  );
};