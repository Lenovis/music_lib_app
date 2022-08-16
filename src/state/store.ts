import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {genresApi, songsApi} from './services';

export const store = configureStore({
  reducer: {
    [genresApi.reducerPath]: genresApi.reducer,
    [songsApi.reducerPath]: songsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(genresApi.middleware, songsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
