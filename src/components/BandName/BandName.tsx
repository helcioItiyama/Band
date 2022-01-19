import React from 'react';
import {StyleSheet, Animated, Dimensions} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {useRecoilValue} from 'recoil';

import {themeType, Theme} from '../../atoms/typeAtom';
import theme from '../../global/styles/theme';

import {Container, Wrap,Name} from './_BandName';

interface IBandName {
  band: {
    id: string;
    name: string;
  };
  y: Animated.Value;
  index: number;
  getBandAlbum: (bandId: string) => void;
};

const {height} = Dimensions.get('window');

export const BandName: React.FC<IBandName> = ({band, getBandAlbum, y, index}) => {
  const type = useRecoilValue(themeType);
  const sizeOfItem = height * 0.1;
  const position = Animated.subtract(index * sizeOfItem, y);
  const isDisappearing = - sizeOfItem;
  const isTop = 0;
  const isBottom = height - (sizeOfItem * 4);
  const isAppearing = height -( sizeOfItem * 2);

  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: 'clamp'
  });
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: 'clamp'
  });
  return (
    <Animated.View style={[{opacity, height: sizeOfItem}, {transform: [{scale}]}]}>
      <Container onPress={() => getBandAlbum(band.id)}>
        <DropShadow style={styles(type).shadow}>
          <Wrap {...{type}}>
            <Name{...{type}}>{band.name}</Name>
          </Wrap>
        </DropShadow>
      </Container>
    </Animated.View>
  );
};

const styles = (type: Theme) => StyleSheet.create({
  shadow: {
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowColor: theme.colors[type].secondary
  }
});
