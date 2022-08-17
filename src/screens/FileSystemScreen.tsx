import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Text} from '../components/atoms';
import {Container} from '../components/molecules';
import {SongsCategoryListItem} from '../components/molecules/SongsCategotyListItem';
import {useGetAllSongsQuery} from '../state/services';
import {addSong, removeSong} from '../state/slices/filesystemSongsSlice';
import {RootState} from '../state/store';
import {Song} from '../types';

export const FilesystemScreen = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const {songs: savedSongs} = useSelector(
    (state: RootState) => state.filesystemSongs,
  );

  const {data: songs, error, isLoading} = useGetAllSongsQuery(page);

  const fetchMoreSongs = () => {
    if (!(songs && songs.length < 20)) {
      setPage(page + 1);
    }
  };

  if (isLoading) {
    return <Text type="h2" text="Loading..." />;
  }

  if (error || !songs) {
    return <Text type="h2" text="Error" />;
  }

  const saveSong = (song: Song) => () => {
    dispatch(addSong(song));
  };

  const deleteSong = (song: Song) => () => {
    dispatch(removeSong(song.id));
  };

  const getSongSaveStatus = (song: Song) => {
    if (savedSongs.find(savedSong => savedSong.id === song.id)) {
      return 'saved';
    }
    return 'toSave';
  };

  return (
    <Container>
      <Text type="h1" text="Memory" />
      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        data={songs}
        renderItem={({item}) => {
          return (
            <SongsCategoryListItem
              {...item}
              type={getSongSaveStatus(item)}
              onSavePress={saveSong(item)}
              onDeletePress={deleteSong(item)}
            />
          );
        }}
        onEndReachedThreshold={0.2}
        onEndReached={fetchMoreSongs}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
