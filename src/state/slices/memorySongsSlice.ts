import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Song} from '../../types';

type MemorySongsStateProps = {
  songs: Song[];
};

const initialState = {
  songs: [],
} as MemorySongsStateProps;

const memorySongsSlice = createSlice({
  name: 'memorySongs',
  initialState,
  reducers: {
    addSong: (state, action: PayloadAction<Song>) => {
      state.songs.push(action.payload);
    },
    removeSong: (state, action: PayloadAction<string>) => {
      state.songs = state.songs.filter(song => song.id !== action.payload);
    },
    clearSongs: () => initialState,
  },
});

export const {addSong, removeSong, clearSongs} = memorySongsSlice.actions;
export default memorySongsSlice.reducer;
