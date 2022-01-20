import styled from 'styled-components/native';
import { ThemeType } from '../../store/themeStore';

interface Props {
  type: ThemeType;
}

export const Container = styled.View<Props>`
  flex: 1;
  background-color: ${({theme, type}) => theme.colors[type].secondary};
`;
