import {Animated, Dimensions} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { ThemeType } from '../../store/themeReducer';

const {width, height} = Dimensions.get('window');

interface Props {
  type: ThemeType;
}

export const Container = styled.View`
  flex: 1;
`;

export const Main = styled.View<Props>`
  flex: 1;
  padding: ${width * 0.04}px;
  background-color: ${({theme, type}) => theme.colors[type].secondary};
`;

export const ImageWrap = styled(Animated.View)<Props>`
  align-self: center;
  background-color: ${({theme, type}) => theme.colors[type].grey};
  align-items: center;
  justify-content: center;
  height: ${width * 0.8}px;
  width: ${width * 0.8}px;
`;

export const Info = styled.Text<Props>`
  font-family: ${({theme}) => theme.fontFamily.medium};
  color: ${({theme, type}) => theme.colors[type].primary};
  font-size: ${RFPercentage(3)}px;
`;

export const Name = styled.Text<Props>`
  font-family: ${({theme}) => theme.fontFamily.bold};
  font-size: ${RFPercentage(3)}px;
  color: ${({theme, type}) => theme.colors[type].primary};
  text-align: center;
  margin-top: ${height * 0.02}px;
  text-decoration: underline;
`;

export const Song = styled.Text<Props>`
  font-family: ${({theme}) => theme.fontFamily.regular};
  color: ${({theme, type}) => theme.colors[type].primary};
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

export const Duration = styled.Text<Props>`
  font-family: ${({theme}) => theme.fontFamily.regular};
  color: ${({theme, type}) => theme.colors[type].primary};
  font-size: ${RFPercentage(2)}px;
`;
