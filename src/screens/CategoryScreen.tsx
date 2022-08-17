import React from 'react';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {Text} from '../components/atoms';
import {
  Container,
  ErrorScreenComponent,
  LoadingScreenComponent,
} from '../components/molecules';
import {SongsCategoryListItem} from '../components/molecules/SongsCategotyListItem';
import {useGetSongsByTypeQuery} from '../state/services';
import {RootState} from '../state/store';
import {SongsGenreNames} from '../types';

export const CategoryScreen = () => {
  const {genre} = useSelector((state: RootState) => state.selectedGenre);

  const {data: songs, error, isLoading} = useGetSongsByTypeQuery(genre);

  if (isLoading) {
    return <LoadingScreenComponent />;
  }

  if (error || !songs || !genre) {
    return <ErrorScreenComponent />;
  }

  return (
    <Container>
      <CategoryContainer>
        <TextContainer>
          <Text type="h1" text={SongsGenreNames[genre]} />
        </TextContainer>
        <ScrollView showsVerticalScrollIndicator={false}>
          {songs.map((song, idx) => (
            <SongsCategoryListItem {...song} key={idx} />
          ))}
        </ScrollView>
      </CategoryContainer>
    </Container>
  );
};

const TextContainer = styled.View`
  margin-bottom: 15px;
`;

const CategoryContainer = styled.View`
  margin-left: 15px;
  flex: 1;
`;
