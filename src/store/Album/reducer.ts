import {AlbumDto} from '../../dtos/AlbumDto';
import {SET_ALBUM} from './actionTypes';
import {AlbumState, AlbumTypes} from './types';

const INITIAL_STATE: AlbumState = {
  album: {} as AlbumDto,
};

const reducer = (state = INITIAL_STATE, action: AlbumTypes) => {
  switch (action.type) {
    case SET_ALBUM:
      return {
        album: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
