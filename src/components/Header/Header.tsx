import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Icon} from 'react-native-elements';
import theme from '../../global/styles/theme';

import {Container, Title, GoBack} from './_Header';

interface IHeader {
  title: string;
  toGoBack?: boolean;
}

export const Header: React.FC<IHeader> = ({title, toGoBack}) => {
  const {goBack} = useNavigation();

  const renderLeftIcon = () => {
    if (toGoBack) {
      return (
        <GoBack onPress={goBack}>
          <Icon name="chevron-back-outline" type="ionicon" color={theme.colors.secondaryLight} />
        </GoBack>
      );
    }
  }

  return (
    <Container>
      {renderLeftIcon()}
      <Title>{title}</Title>
    </Container>
  );
};
