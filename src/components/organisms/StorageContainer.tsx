import {useNavigation} from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import {NavigationProps} from '../../navigation';
import {Text} from '../atoms';
import {StorageListItem} from '../molecules/StorageListItem';

export const StorageContainer = () => {
  const {navigate} = useNavigation<NavigationProps>();

  const navigateToMemoryScreen =
    (screen: 'FileSystemScreen' | 'MemoryScreen') => () => {
      navigate(screen);
    };

  return (
    <Container>
      <Text type="h1" text="Storage" />
      <StorageListItem
        text="Memory"
        // TODO: count the number of songs in the memory
        songLength="1:00"
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
