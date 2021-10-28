import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {height} = Dimensions.get('window');

export const Container = styled.View`
  height: ${height * 0.04}px;
  align-items: flex-start;
  background-color: ${({theme}) => theme.colors.secondary};
`;

export const Image = styled.Image``;

export const Name = styled.Text``;

export const Release = styled.Text``;

export const Wrap = styled.View``;

export const Photo = styled.Image``;

export const Duration = styled.Text``;
