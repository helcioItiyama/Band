import {AlbumDto} from '../../dtos/AlbumDto';
import {SET_ALBUM} from './actionTypes';

export interface AlbumState {
  album: AlbumDto;
}

export interface SetAlbum {
  type: typeof SET_ALBUM;
  payload: AlbumDto;
}

export type AlbumTypes = SetAlbum;
