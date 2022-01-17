import { useFocusEffect } from '@react-navigation/native';
import React, {useCallback, useRef, useState} from 'react';
import {Alert, Animated, Dimensions} from 'react-native';
import {BandName} from '../../components/BandName/BandName';
import {Header} from '../../components/Header/Header';
import {SwipeImageModal} from '../../components/SwipeImageModal/SwipeImageModal';
import bands from '../../services/bands.json';
import {AlbumDto} from '../../dtos/AlbumDto';
import { api } from '../../services/api';

import {Container} from './_Home';

const {width, height} = Dimensions.get('window');

export const Home: React.FC = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumDto[]>([]);
  const [showAlbumImage, setShowAlbumImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const y = useRef(new Animated.Value(0)).current;

  useFocusEffect(useCallback(() => {
    return () => {
      setShowAlbumImage(false)
     }
  }, []))

  const getBandAlbum = async (id: string) => {
    try {
      setLoading(true)
      setShowAlbumImage(true);
      const {data} = await api.get('/');
      const selectedBandAlbum = data.filter((band: AlbumDto) => {
        return band.band === id;
      });
      setSelectedAlbum(selectedBandAlbum);
    } catch(err) {
      Alert.alert('Aviso','Houve algum imprevisto. Por favor, tente mais tarde, novamente.')
    } finally {
      setLoading(false)
    }
  }

  const onScroll = Animated.event([{nativeEvent: {contentOffset: {y}}}], {useNativeDriver: true})

  return (
    <Container>
      <Header title="Rock Bands" />
      <Animated.FlatList
        data={bands.bands}
        bounces={false}
        scrollEventThrottle={16}
        keyExtractor={item => item.id}
        contentContainerStyle={{marginHorizontal: width * 0.06, marginVertical: height * 0.04}}
        renderItem={({item, index}) => (
          <BandName band={item} {...{getBandAlbum, y, index}} />
        )}
        {...{onScroll}}
      />
      <SwipeImageModal
        albumBand={selectedAlbum}
        {...{showAlbumImage, setShowAlbumImage, loading}}
      />
    </Container>
  );
};
