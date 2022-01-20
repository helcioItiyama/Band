import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, StatusBar} from 'react-native';
import {Icon} from 'react-native-elements';
import {useRecoilValue, useSetRecoilState} from 'recoil';

import {Theme, themeState, themeType} from '../../atoms/typeAtom';
import theme from '../../global/styles/theme';

import {Container, Title, Toggle, GoBack} from './_Header';

interface IHeader {
  title: string;
  toGoBack?: boolean;
};

const {height} = Dimensions.get('window');

export const Header: React.FC<IHeader> = ({title, toGoBack}) => {
  const type = useRecoilValue<Theme>(themeType);
  const toggle = useSetRecoilState(themeState);
  const {goBack} = useNavigation();

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
        onValueChange={() => toggle()}
      />
    </Container>
  );
};