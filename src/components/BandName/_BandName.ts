import {Dimensions} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const {width, height} = Dimensions.get('window');

export const Container = styled.TouchableOpacity`
  height: ${height * 0.1}px;
  align-items: flex-start;
  justify-content: center;
  padding: ${width * 0.04}px;
  background-color: ${({theme}) => theme.colors.secondary};
  margin-horizontal: ${width * 0.06}px;
  margin-vertical: ${height * 0.02}px;
  border-radius: ${width * 0.06}px;
`;

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.medium};
  font-size: ${RFPercentage(2)}px;
  color: ${({theme}) => theme.colors.white};
`;
