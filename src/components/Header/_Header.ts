import {Dimensions} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const {width, height} = Dimensions.get('window');

export const Container = styled.View`
  height: ${height * 0.1}px;
  background-color: ${({theme}) => theme.colors.dark3d};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.bold};
  font-size: ${RFPercentage(3)}px;
  color: ${({theme}) => theme.colors.white};
`;

export const GoBack = styled.TouchableOpacity`
  z-index: 1;
  position: absolute;
  top: ${height * 0.04}px;
  left: ${width * 0.06}px;
`;
