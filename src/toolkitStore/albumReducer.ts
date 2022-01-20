import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { AlbumDto } from '../dtos/AlbumDto';
import { RootState } from './store';

export interface AlbumState {
  album: AlbumDto;
}

const initialState: AlbumState = {
  album: {} as AlbumDto
}

export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    setAlbum: (state, {payload}:PayloadAction<AlbumDto>) => {
      state.album = {...state.album, ...payload}
    }
  }
});

export const {setAlbum} = albumSlice.actions;
export const albumState = ((state: RootState) => state.album);
export default albumSlice.reducer;