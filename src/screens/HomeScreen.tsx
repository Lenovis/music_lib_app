import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native';
import {Text} from '../components/atoms';
import {
  Container,
  StorageContainer,
  StorageListItem,
} from '../components/molecules';
import {SongsContainer} from '../components/organisms';
import {NavigationProps} from '../navigation';
import {useGenresQuery} from '../state/services';

export const HomeScreen = () => {
  const {navigate} = useNavigation<NavigationProps>();
  const {data, error, isLoading} = useGenresQuery();

  if (isLoading) {
    return <Text type="h2" text="Loading..." />;
  }

  if (error || !data) {
    return <Text type="h2" text="Error" />;
  }

  const navigateToMemoryScreen =
    (screen: 'FileSystemScreen' | 'MemoryScreen') => () => {
      navigate(screen);
    };

  return (
    <Container>
      <ScrollView>
        {data.map((genre, idx) => (
          <SongsContainer key={idx} songGenre={genre} />
        ))}
        <StorageContainer>
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
        </StorageContainer>
      </ScrollView>
    </Container>
  );
};
