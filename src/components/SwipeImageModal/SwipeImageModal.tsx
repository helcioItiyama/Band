import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, FlatList, StyleSheet} from 'react-native';
import {Overlay} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {AlbumDto} from '../../dtos/AlbumDto';
import {RootStackParamList} from '../../routes/Route';
import {SET_ALBUM} from '../../store/Album/actionTypes';
import {AlbumTypes} from '../../store/Album/types';

import {ImageButton, Image} from './_SwipeImageModal';

interface ISwipeImageModal {
  albumBand: AlbumDto[];
  showAlbumImage: boolean;
  setShowAlbumImage: (type: boolean) => void;
}

const {height} = Dimensions.get('window');

export const SwipeImageModal: React.FC<ISwipeImageModal> = ({
  albumBand,
  showAlbumImage,
  setShowAlbumImage,
}) => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation<RootStackParamList>();

  function dispatchAlbum(band: AlbumDto) {
    dispatch<AlbumTypes>({
      type: SET_ALBUM,
      payload: band,
  ;
    navigate('AlbumDetail');
  }

  return (
    <Overlay
      isVisible={showAlbumImage}
      overlayStyle={styles.overlay}
      onBackdropPress={() => setShowAlbumImage(false)}>
      <FlatList
        data={albumBand}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ImageButton onPress={() => dispatchAlbum(item)}>
            <Image source={{uri: item.image}} />
          </ImageButton>
        )}
      />
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlay: {
    height: height * 0.6,
    alignItems: 'center',
  },
});
