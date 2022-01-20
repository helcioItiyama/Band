import { useFocusEffect } from '@react-navigation/native';
import React, {useCallback, useRef, useState} from 'react';
import {Alert, Animated, Dimensions} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { useRecoilValue } from 'recoil';

import {BandName} from '../../components/BandName/BandName';
import {Header} from '../../components/Header/Header';
import {SwipeImageModal} from '../../components/SwipeImageModal/SwipeImageModal';
import { getAlbums } from '../../services/api';
import { themeType } from '../../atoms/typeAtom';
import { storage } from '../../utils/storage';
import { MainStack } from '../../routes/Route';
import {AlbumDto} from '../../dtos/AlbumDto';
import bands from '../../services/bands.json';

import {Container} from './_Home';

const {width, height} = Dimensions.get('window');

type BandNames = {
  id: string;
  name: string;
}

interface HomeProps {
  navigation: MainStack;
}

export const Home: React.FC<HomeProps> = ({navigation}) => {
  const [albums, setAlbums] = useState<AlbumDto[]>([]);
  const [bandNames, setBandNames] = useState<BandNames[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumDto[]>([]);
  const [showAlbumImage, setShowAlbumImage] = useState(false);
  const type = useRecoilValue(themeType);
  const y = useRef(new Animated.Value(0)).current;

  useFocusEffect(useCallback(() => {
    return () => {
      setShowAlbumImage(false);
     }
  }, []));

  useFocusEffect(useCallback(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      getBandNames(state.isConnected);
      getAllAlbums(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []));

  const getBandNames = async (connected: boolean | null) => {
    try {
      const items = await storage.get('bands');
      if(items) {
        setBandNames(items);
        return;
      }
      if(connected) {
        await storage.set<BandNames[]>('bands', bands.bands);
        setBandNames(bands.bands);
      }
    } catch(err: any) {
      Alert.alert('Aviso', 'Houve um imprevisto. Por favor, tente mais tarde novamente.');
    }
  };

  const getAllAlbums = async (connected: boolean | null) => {
    try {
      const items = await storage.get('albums');
      if(items) {
        setAlbums(items);
        return;
      }
      if(connected) {
        const allAlbums = await getAlbums();
        await storage.set<AlbumDto[]>('albums', allAlbums);
        setAlbums(allAlbums);
      }
    } catch(err: any) {
      Alert.alert('Aviso','Houve algum imprevisto. Por favor, tente mais tarde, novamente.');
    }
  };
  
  const getBandAlbum = (id: string) => {
    try {
      const selectedBandAlbum = albums.filter((band: AlbumDto) => {
        return band.band === id;
      }); 
      setSelectedAlbum(selectedBandAlbum);
      setShowAlbumImage(true);
    } catch(err) {
      Alert.alert('Aviso','Houve algum imprevisto. Por favor, tente mais tarde, novamente.');
    }
  };

  const onScroll = Animated.event([{nativeEvent: {contentOffset: {y}}}], {useNativeDriver: true});

  return (
    <Container {...{type}}>
      <Header title="Rock Bands" />
      <Animated.FlatList
        data={bandNames}
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
        {...{showAlbumImage, setShowAlbumImage, navigation}}
      />
    </Container>
  );
};