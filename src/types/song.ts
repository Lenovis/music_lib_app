export type Song = {
  title: SongsGenre;
  duration: string;
  size: string;
  imageUri: string;
};

export type SongsGenre = 'rock' | 'pop' | 'jazz' | 'classical' | 'country';

export enum SongsGenreNames {
  rock = 'Rock',
  pop = 'Pop',
  jazz = 'Jazz',
  classical = 'Classical',
  country = 'Country',
}
