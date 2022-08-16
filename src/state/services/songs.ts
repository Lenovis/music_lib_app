import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Song, SongsGenre} from '../../types';

export const songsApi = createApi({
  reducerPath: 'songsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
  endpoints: builder => ({
    getSongsByType: builder.query<Song[], SongsGenre | undefined>({
      query: type => `allSongs?genre=${type}`,
    }),
  }),
});

export const {useGetSongsByTypeQuery} = songsApi;
