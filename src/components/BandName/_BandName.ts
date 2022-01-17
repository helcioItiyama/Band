import {Dimensions} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const {width} = Dimensions.get('window');

export const Container = styled.TouchableOpacity``;

export const Wrap = styled.View`
  align-items: flex-start;
  justify-content: center;
  padding: ${width * 0.04}px;
  background-color: ${({theme}) => theme.colors.secondaryLight};
  border-radius: ${width * 0.06}px;
`;

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.medium};
  font-size: ${RFPercentage(2.5)}px;
  align-self: center;
  color: ${({theme}) => theme.colors.primary};
`;
