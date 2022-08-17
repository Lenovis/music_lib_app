import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Song, SongsGenre} from '../../types';

export const songsApi = createApi({
  reducerPath: 'songsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
  endpoints: builder => ({
    getSongsByType: builder.query<Song[], SongsGenre | undefined>({
      query: type => `allSongs?genre=${type}`,
    }),
    // TODO: find a way to use propper pagination
    getAllSongs: builder.query<Song[], number | void>({
      // query: (page = 1) => `allSongs?_page=${page}&_limit=20`,
      query: (page = 1) => 'allSongs',
    }),
  }),
});

export const {useGetSongsByTypeQuery, useGetAllSongsQuery} = songsApi;
