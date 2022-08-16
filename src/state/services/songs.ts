import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Song, SongsGenre} from '../../types';

type SongsQueryType = {
  id: string;
  genre: SongsGenre;
  songs: Song[];
};

export const songsApi = createApi({
  reducerPath: 'songsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
  endpoints: builder => ({
    getSongsByType: builder.query<SongsQueryType[], SongsGenre>({
      query: type => `songs?genre=${type}`,
    }),
  }),
});

export const {useGetSongsByTypeQuery} = songsApi;
