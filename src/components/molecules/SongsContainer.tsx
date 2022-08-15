import React from 'react';
import styled from 'styled-components/native';
import {Button, Text} from '../atoms';

type Props = {
  children: React.ReactNode;
  title: string;
  onPress: () => void;
};

export const SongsContainer = ({children, title, onPress}: Props) => {
  return (
    <Container>
      <Header>
        <Text text={title} type="h1" />
        <Button onPress={onPress} text="See all" />
      </Header>
      {children}
    </Container>
  );
};

const Container = styled.View`
  margin-bottom: 15px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px;
`;
