import React from 'react';
import styled from 'styled-components/native';
import {Song} from '../../types';
import {Text} from '../atoms';

type Props = Song & {};

export const SongTile = ({title, duration, size, imageUri}: Props) => {
  return (
    <Container>
      <Image
        source={{
          uri: imageUri,
        }}
      />
      <TextContainer>
        <Text numberOfLines={2} type="h2" text={title} />
        <SongInfoContainer>
          <Text text={size} type="h3" />
          <Text text={duration} type="h3" />
        </SongInfoContainer>
      </TextContainer>
    </Container>
  );
};

const Container = styled.View`
  width: 140px;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100px;
  border-radius: 5px;
`;

const TextContainer = styled.View`
  flex-direction: column;
  margin-top: 5px;
`;

const SongInfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
