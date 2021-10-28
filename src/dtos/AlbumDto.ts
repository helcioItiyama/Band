export type Tracks = {
  name: string;
  id: string;
  image: string;
  duration: number;
};

export interface AlbumDto {
  band: string;
  id: string;
  image: string;
  name: string;
  releaseDate: string;
  tracks: Tracks[];
}
