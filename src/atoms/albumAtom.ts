import { atom } from "recoil";
import { AlbumDto } from "../dtos/AlbumDto";

export const albumState = atom({
  key: 'albumState',
  default: {} as AlbumDto,
})