import {Dimensions, Switch} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

import { Theme } from '../../atoms/typeAtom';

const {width, height} = Dimensions.get('window');

interface Props {
  type: Theme;
}

const statusbarHeight = Constants.statusBarHeight;

export const Container = styled.View<Props>`
  height: ${height * 0.1 + statusbarHeight}px;
  background-color: ${({theme, type}) => theme.colors[type].primary};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<Props>`
  font-family: ${({theme}) => theme.fontFamily.bold};
  font-size: ${RFPercentage(3)}px;
  color: ${({theme, type}) => theme.colors[type].secondaryLight};
`;

export const GoBack = styled.TouchableOpacity`
  z-index: 1;
  position: absolute;
  align-items: center;
  justify-content: center;
  height: ${height * 0.04}px;
  top: ${(height * 0.06 + statusbarHeight)/2}px;
  left: ${width * 0.06}px;
`;

export const Toggle = styled(Switch)`
  position: absolute;
  top: ${(height * 0.06 + statusbarHeight)/2}px;
  right: ${width * 0.06}px;
`
