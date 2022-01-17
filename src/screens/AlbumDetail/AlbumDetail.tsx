import React, { useCallback, useRef } from 'react';
import {Animated, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import { useRecoilValue } from 'recoil';
import { albumState } from '../../atoms/albumAtom';

import { Header } from '../../components/Header/Header';

import {
  Container,
  Main,
  ImageWrap,
  Info,
  Name,
  Song,
  Release,
  Wrap,
  Duration,
} from './_AlbumDetail';

const {width} = Dimensions.get('window');

export const AlbumDetail: React.FC = () => {
  const album = useRecoilValue(albumState);
  const y = useRef(new Animated.Value(0)).current;

  const duration = useCallback((time: number) => {
    const length = time.toString().length
    if(length <= 1) {
      return "0:00"
    }
    if(length === 2) {
      return `0:${time}`
    }
    if(length > 2 && length < 4) {
      return `${time.toString().substring(0,1)}:${time.toString().substring(1)}`
    }
    return `${time.toString().substring(0,2)}:${time.toString().substring(1)}`
  }, [album]);
  
  const onScroll = Animated.event([{nativeEvent: {contentOffset: {y}}}], {useNativeDriver: false})

  const scale = y.interpolate({
    inputRange: [0, width * 0.8],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  })

  const translateY = Animated.divide(y, 2)

  return (
    <Container>
      <Header title={album.name} toGoBack/>
      <Main>
        <Animated.FlatList
          data={album.tracks}
          keyExtractor={item => item.id}
          ListHeaderComponent={() => (  
            <>
              <ImageWrap
                style={{transform: [{translateY}, {scale}]}}
              >
                {album.image ? (
                  <FastImage 
                  style={{width: '100%', height: '100%'}}
                  source={{uri: album.image, priority: FastImage.priority.high}} 
                  resizeMode={FastImage.resizeMode.contain}
                  />
                ) : (
                  <Info>No Image</Info>
                  )}
              </ImageWrap>
              <Name>{album.name}</Name>
              <Release>{album.releaseDate}</Release>
            </>

          )}
          bounces={false}
          {...{onScroll}}
          renderItem={({item}) => (
            <Wrap>
              <Song>{item.name}</Song>
              <Duration>{duration(item.duration)}</Duration>
            </Wrap>
          )}
          />
      </Main>
    </Container>
  );
};
