import {Dimensions} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { ThemeType } from '../../store/themeReducer';

const {width} = Dimensions.get('window');

interface Props {
  type: ThemeType;
}

export const Container = styled.TouchableOpacity``;

export const Wrap = styled.View<Props>`
  align-items: flex-start;
  justify-content: center;
  padding: ${width * 0.04}px;
  background-color: ${({theme, type}) => theme.colors[type].secondaryMedium};
  border-radius: ${width * 0.06}px;
`;

export const Name = styled.Text<Props>`
  font-family: ${({theme}) => theme.fontFamily.medium};
  font-size: ${RFPercentage(2.5)}px;
  align-self: center;
  color: ${({theme, type}) => theme.colors[type].primary};
`;
