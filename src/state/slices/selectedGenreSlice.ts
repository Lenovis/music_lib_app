import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SongsGenre} from '../../types';

type SelectedGenreStateProps = {
  genre?: SongsGenre;
};

const initialState = {
  genre: undefined,
} as SelectedGenreStateProps;

const selectedGenreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    setSelectedGenre: (state, action: PayloadAction<SongsGenre>) => {
      state.genre = action.payload;
    },
    clearSelectedGenre: () => initialState,
  },
});

export const {setSelectedGenre, clearSelectedGenre} =
  selectedGenreSlice.actions;
export default selectedGenreSlice.reducer;
