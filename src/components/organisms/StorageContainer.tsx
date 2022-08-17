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
  const {songs} = useSelector((state: RootState) => state.memorySongs);

  const totalDuration = songs.reduce((acc, song) => acc + song.duration, 0);
  const totalDurationFormated = songTimeFormater(totalDuration);

  const navigateToMemoryScreen =
    (screen: 'FileSystemScreen' | 'MemoryScreen') => () => {
      navigate(screen);
    };

  return (
    <Container>
      <Text type="h1" text="Storage" />
      <StorageListItem
        text="Memory"
        songLength={totalDurationFormated}
        onPress={navigateToMemoryScreen('MemoryScreen')}
      />
      <StorageListItem
        text="Filesystem"
        // TODO: count the number of songs in the filesystem
        songLength="1:00"
        onPress={navigateToMemoryScreen('FileSystemScreen')}
      />
    </Container>
  );
};

const Container = styled.View`
  margin-left: 15px;
`;
