import axios from 'axios';
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {BandName} from '../../components/BandName/BandName';
import {Header} from '../../components/Header/Header';
import {SwipeImageModal} from '../../components/SwipeImageModal/SwipeImageModal';

import {AlbumDto} from '../../dtos/AlbumDto';
import bands from '../../services/bands.json';

import {Container} from './_Home';

export const Home: React.FC = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumDto[]>([]);
  const [showAlbumImage, setShowAlbumImage] = useState(false);

  async function getBandAlbum(id: string) {
    const {data} = await axios.get(
      'https://iws-brazil-labs-iws-recruiting-bands-mobile.iwsbrazil.io/api/albums',
    );
    const selectedBandAlbum = data.filter((band: AlbumDto) => {
      return band.band === id;
    });
    setSelectedAlbum(selectedBandAlbum);
    setShowAlbumImage(true);
  }

  return (
    <Container>
      <Header title="Rock Bands" toGoBack />
      <FlatList
        data={bands.bands}
        keyExtractor={item => item.id}
        renderItem={({item}) => <BandName band={item} {...{getBandAlbum}} />}
      />
      <SwipeImageModal
        albumBand={selectedAlbum}
        {...{showAlbumImage, setShowAlbumImage}}
      />
    </Container>
  );
};
