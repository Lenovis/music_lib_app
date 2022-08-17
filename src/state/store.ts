import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {genresApi, songsApi} from './services';
import {memorySongsReducer, selectedGenreReducer} from './slices';

export const store = configureStore({
  reducer: {
    [genresApi.reducerPath]: genresApi.reducer,
    [songsApi.reducerPath]: songsApi.reducer,
    selectedGenre: selectedGenreReducer,
    memorySongs: memorySongsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(genresApi.middleware, songsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
