import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {genresApi, songsApi} from './services';
import {
  filesystemSongsReducer,
  memorySongsReducer,
  selectedGenreReducer,
} from './slices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const reducers = combineReducers({
  [genresApi.reducerPath]: genresApi.reducer,
  [songsApi.reducerPath]: songsApi.reducer,
  selectedGenre: selectedGenreReducer,
  memorySongs: memorySongsReducer,
  filesystemSongs: filesystemSongsReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['filesystemSongs'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(genresApi.middleware, songsApi.middleware),
});

setupListeners(store.dispatch);

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
