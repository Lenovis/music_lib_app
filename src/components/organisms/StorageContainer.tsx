import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {songTimeFormater} from '../../helpers';
import {NavigationProps} from '../../navigation';
import {RootState} from '../../state/store';
import {Text} from '../atoms';
import {StorageListItem} from '../molecules/StorageListItem';

export const StorageContainer = () => {
  const {navigate} = useNavigation<NavigationProps>();
  const {songs: memorySongs} = useSelector(
    (state: RootState) => state.memorySongs,
  );
  const {songs: filesystemSongs} = useSelector(
    (state: RootState) => state.filesystemSongs,
  );

  const totalMemoryDuration = memorySongs.reduce(
    (acc, song) => acc + song.duration,
    0,
  );
  const totalFilesystemDuration = filesystemSongs.reduce(
    (acc, song) => acc + song.duration,
    0,
  );

  const totalMemoryDurationFormated = totalMemoryDuration
    ? songTimeFormater(totalMemoryDuration)
    : undefined;
  const totalFilesystemDurationFormated = totalFilesystemDuration
    ? songTimeFormater(totalFilesystemDuration)
    : undefined;

  const navigateToMemoryScreen =
    (screen: 'FilesystemScreen' | 'MemoryScreen') => () => {
      navigate(screen);
    };

  return (
    <Container>
      <Text type="h1" text="Storage" />
      <StorageListItem
        text="Memory"
        songLength={totalMemoryDurationFormated}
        onPress={navigateToMemoryScreen('MemoryScreen')}
      />
      <StorageListItem
        text="Filesystem"
        songLength={totalFilesystemDurationFormated}
        onPress={navigateToMemoryScreen('FilesystemScreen')}
      />
    </Container>
  );
};

const Container = styled.View`
  margin-left: 15px;
`;
