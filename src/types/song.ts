export type Song = {
  id: string;
  title: string;
  duration: string;
  size: string;
  imageUri: string;
  genre: SongsGenre;
};

export type SongsGenre = 'rock' | 'pop' | 'jazz' | 'classical' | 'country';

export enum SongsGenreNames {
  rock = 'Rock',
  pop = 'Pop',
  jazz = 'Jazz',
  classical = 'Classical',
  country = 'Country',
}
