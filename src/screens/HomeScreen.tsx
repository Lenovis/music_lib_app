import React from 'react';
import {ScrollView} from 'react-native';
import {Text} from '../components/atoms';
import {Container} from '../components/molecules';
import {SongsContainer} from '../components/organisms';
import {useGenresQuery} from '../state/services';

export const HomeScreen = () => {
  const {data, error, isLoading} = useGenresQuery();

  if (isLoading) {
    return <Text type="h2" text="Loading..." />;
  }

  if (error || !data) {
    return <Text type="h2" text="Error" />;
  }

  return (
    <Container>
      <ScrollView>
        {data.map((genre, idx) => (
          <SongsContainer key={idx} songGenre={genre} />
        ))}
        <Text type="h1" text="Storage" />
      </ScrollView>
    </Container>
  );
};
