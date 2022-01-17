import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {width} = Dimensions.get('window');

export const ImageButton = styled.TouchableOpacity`
  width: ${width * 0.8}px;
  height: ${width * 0.8}px;
  align-self: center;
`;
