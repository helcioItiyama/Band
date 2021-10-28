import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {AlbumState} from '../../store/Album/types';
import {RootState} from '../../store/store';

import {
  Container,
  Image,
  Name,
  Release,
  Wrap,
  Photo,
  Duration,
} from './_AlbumDetail';

export const AlbumDetail: React.FC = () => {
  const {album} = useSelector<RootState, AlbumState>(state => state.album);

  console.log('album', album);
  return (
    <Container>
      <Image source={{uri: album.image}} />
      <Name>{album.name}</Name>
      <Release>{album.releaseDate}</Release>
      <FlatList
        data={album.tracks}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Wrap>
            <Photo source={{uri: item.image}} />
            <Name>{item.name}</Name>
            <Duration>{item.duration}</Duration>
          </Wrap>
        )}
      />
    </Container>
  );
};
