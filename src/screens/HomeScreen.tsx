import React from 'react';
import {ScrollView} from 'react-native';
import {
  Container,
  ErrorScreenComponent,
  LoadingScreenComponent,
} from '../components/molecules';
import {SongsContainer, StorageContainer} from '../components/organisms';
import {useGenresQuery} from '../state/services';

export const HomeScreen = () => {
  const {data, error, isLoading} = useGenresQuery();

  if (isLoading) {
    return <LoadingScreenComponent />;
  }

  if (error || !data) {
    return <ErrorScreenComponent />;
  }

  return (
    <Container>
      <ScrollView>
        {data.map((genre, idx) => (
          <SongsContainer key={idx} songGenre={genre} />
        ))}
        <StorageContainer />
      </ScrollView>
    </Container>
  );
};
