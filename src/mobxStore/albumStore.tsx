import { makeAutoObservable } from "mobx";
import { AlbumDto } from "../dtos/AlbumDto";

class AlbumStore {
  album: AlbumDto = {} as AlbumDto;

  constructor() {
    makeAutoObservable(this);
  }

  setAlbum(data: AlbumDto) {
    this.album = {...data};
  }
}

const albumStore = new AlbumStore();

export default albumStore;

