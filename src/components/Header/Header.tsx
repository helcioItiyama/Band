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

  function renderLeftIcon() {
    if (toGoBack) {
      return (
        <GoBack onPress={goBack}>
          <Icon name="back" type="antdesign" color={theme.colors.white} />
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
