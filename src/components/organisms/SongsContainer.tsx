import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import {NavigationProps} from '../../navigation';
import {useGetSongsByTypeQuery} from '../../state/services';
import {setSelectedGenre} from '../../state/slices/selectedGenreSlice';
import {SongsGenre, SongsGenreNames} from '../../types';
import {Button, Text} from '../atoms';
import {SongsSwimlane} from '../molecules/SongsSwimlane';
import {SongTile} from '../molecules/SongTile';

type Props = {
  songGenre: SongsGenre;
};

export const SongsContainer = ({songGenre}: Props) => {
  const {navigate} = useNavigation<NavigationProps>();
  const {data: songs, error} = useGetSongsByTypeQuery(songGenre);
  const dispatch = useDispatch();

  const navigateToCategoryScreen = useCallback(() => {
    navigate('CategoryScreen');
  }, [navigate]);

  if (error || !songs) {
    return null;
  }

  const onPress = () => {
    dispatch(setSelectedGenre(songGenre));
    navigateToCategoryScreen();
  };

  if (songs.length) {
    return (
      <Container>
        <Header>
          <Text text={SongsGenreNames[songGenre]} type="h1" />
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
