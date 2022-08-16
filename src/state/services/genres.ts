import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {SongsGenre} from '../../types';

export const genresApi = createApi({
  reducerPath: 'genresApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
  endpoints: builder => ({
    genres: builder.query<SongsGenre[], void>({
      query: () => 'genres',
    }),
  }),
});

export const {useGenresQuery} = genresApi;
