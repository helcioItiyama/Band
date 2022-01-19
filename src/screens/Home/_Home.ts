import styled from 'styled-components/native';
import {Theme} from '../../atoms/typeAtom';

interface Props {
  type: Theme;
}

export const Container = styled.View<Props>`
  flex: 1;
  background-color: ${({theme, type}) => theme.colors[type].secondary};
`;
