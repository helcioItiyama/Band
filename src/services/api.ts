import axios from 'axios';
import { AlbumDto } from '../dtos/AlbumDto';

export const api = axios.create({
  baseURL:
    'https://iws-brazil-labs-iws-recruiting-bands-mobile.iwsbrazil.io/api/albums',
});

export const getAlbums = async () => {
  const {data} = await api.get('/');
  return data;
}
