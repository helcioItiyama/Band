import {Dimensions} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const {width, height} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
`;

export const Main = styled.View`
  flex: 1;
  padding: ${width * 0.04}px;
  background-color: ${({theme}) => theme.colors.secondary};
`;

export const ImageWrap = styled.View`
  align-self: center;
  background-color: ${({theme}) => theme.colors.grey};
  width: ${width * 0.8}px;
  height: ${width * 0.8}px;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.medium};
  color: ${({theme}) => theme.colors.primary};
  font-size: ${RFPercentage(3)}px;
`;

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.bold};
  font-size: ${RFPercentage(3)}px;
  color: ${({theme}) => theme.colors.primary};
  text-align: center;
  margin-top: ${height * 0.02}px;
  text-decoration: underline;
`;

export const Song = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.regular};
  color: ${({theme}) => theme.colors.primary};
  font-size: ${RFPercentage(2)}px;
  flex: 1;
`;

export const Release = styled.Text``;

export const Wrap = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${height * 0.01}px;
  padding-horizontal: ${width * 0.04}px;
`;

export const Duration = styled.Text``;
