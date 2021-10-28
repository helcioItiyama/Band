import React from 'react';
import {StyleSheet} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import theme from '../../global/styles/theme';

import {Container, Name} from './_BandName';

interface IBandName {
  band: {
    id: string;
    name: string;
  };
  getBandAlbum: (bandId: string) => void;
}

export const BandName: React.FC<IBandName> = ({band, getBandAlbum}) => {
  return (
    <DropShadow style={styles.shadow}>
      <Container onPress={() => getBandAlbum(band.id)}>
        <Name>{band.name}</Name>
      </Container>
    </DropShadow>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowColor: theme.colors.primary10,
  },
});
