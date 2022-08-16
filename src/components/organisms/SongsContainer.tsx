// move to organisms/SongsContainer.tsx

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import {NavigationProps} from '../../navigation';
import {useGetSongsByTypeQuery} from '../../state/services';
import {SongsGenre, SongsGenreNames} from '../../types';
import {Button, Text} from '../atoms';
import {SongsSwimlane} from '../molecules/SongsSwimlane';
import {SongTile} from '../molecules/SongTile';

type Props = {
  songGenre: SongsGenre;
};

export const SongsContainer = ({songGenre}: Props) => {
  const {navigate} = useNavigation<NavigationProps>();
  const {data, error, isLoading} = useGetSongsByTypeQuery(songGenre);

  const navigateToCategoryScreen = () => {
    navigate('CategoryScreen');
  };

  if (isLoading) {
    return <Text text="isLoading" type={'h2'} />;
  }

  if (error || !data) {
    return <Text text="error" type={'h2'} />;
  }

  const {genre, songs} = data[0];

  const onPress = () => {
    navigateToCategoryScreen();
  };

  if (songs.length) {
    return (
      <Container>
        <Header>
          <Text text={SongsGenreNames[genre]} type="h1" />
          <Button onPress={onPress} text="See all" />
        </Header>
        <SongsSwimlane>
          {songs.slice(0, 5).map((song, idx) => (
            <SongTile key={idx} {...song} />
          ))}
        </SongsSwimlane>
      </Container>
    );
  }

  return null;
};

const Container = styled.View`
  margin-bottom: 15px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px;
`;
