import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Song} from '../../types';

type FilesystemSongsStateProps = {
  songs: Song[];
};

const initialState = {
  songs: [],
} as FilesystemSongsStateProps;

const filesystemSongsSlice = createSlice({
  name: 'filesystemSongs',
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

export const {addSong, removeSong, clearSongs} = filesystemSongsSlice.actions;
export default filesystemSongsSlice.reducer;
