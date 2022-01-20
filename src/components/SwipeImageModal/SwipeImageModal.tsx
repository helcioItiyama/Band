import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Overlay} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import Swiper from 'react-native-swiper';

import {AlbumDto} from '../../dtos/AlbumDto';
import {MainStack} from '../../routes/Route';
import theme from '../../global/styles/theme';

import {ImageButton} from './_SwipeImageModal';
import { useDispatch } from 'react-redux';
import { setAlbum } from '../../toolkitStore/albumReducer';
import { useAppSelector } from '../../toolkitStore/reduxHooks';
import { themeState } from '../../toolkitStore/themeReducer';

interface ISwipeImageModal {
  albumBand: AlbumDto[];
  showAlbumImage: boolean;
  setShowAlbumImage: (type: boolean) => void;
  navigation: MainStack;
};

const {height} = Dimensions.get('window');

export const SwipeImageModal = ({
  albumBand,
  showAlbumImage,
  setShowAlbumImage,
  navigation,
}:ISwipeImageModal) => {
  const dispatch = useDispatch();
  const {type} = useAppSelector(themeState);

  const dispatchAlbum = (band: AlbumDto) => {
    dispatch(setAlbum(band))
    setTimeout(() => {
      navigation.push('AlbumDetail');
    }, 1000)
  };

  const renderPhotos = () => {
    return albumBand.map(item => (
      <ImageButton key={item.id} onPress={() => dispatchAlbum(item)}>
        <FastImage 
          style={{width: '100%', height: '100%'}}
          source={{uri: item.image, priority: FastImage.priority.high}} 
          resizeMode={FastImage.resizeMode.contain} 
          />
      </ImageButton>
    ));
  };

  return (
    <Overlay
      isVisible={showAlbumImage && !!albumBand.length}
      overlayStyle={styles.overlay}
      onBackdropPress={() => setShowAlbumImage(false)}>
        <Swiper
          showsButtons
          dotColor={theme.colors[type].secondaryLight}
          activeDotColor={theme.colors[type].secondary}>
          {renderPhotos()}
        </Swiper>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlay: {
    height: height * 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
