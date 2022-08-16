import React from 'react';
import styled from 'styled-components/native';
import {Song} from '../../types';
import {Text} from '../atoms';

type Props = Song;

export const SongsCategoryListItem = ({title, size, duration}: Props) => {
  const openSongScreen = () => {
    console.log('TODO: open song screen');
  };
  return (
    <Container onPress={openSongScreen}>
      <Text text={title} type="h2" />
      <InfoContainer>
        <Text text={size} type="h3" />
        <Text text=" - " type="h3" />
        <Text text={duration} type="h3" />
      </InfoContainer>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  padding: 10px 10px 10px 0;
`;

const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
