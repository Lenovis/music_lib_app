export type Song = {
  id: string;
  title: string;
  duration: number;
  size: string;
  imageUri: string;
  genre: SongsGenre;
};

export type SongsGenre =
  | 'rock'
  | 'pop'
  | 'jazz'
  | 'classical'
  | 'country'
  | 'podcast';

export enum SongsGenreNames {
  rock = 'Rock',
  pop = 'Pop',
  jazz = 'Jazz',
  classical = 'Classical',
  country = 'Country',
  podcast = 'Podcast',
}
