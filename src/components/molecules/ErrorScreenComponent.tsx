import React from 'react';
import styled from 'styled-components/native';
import {Text} from '../atoms';
import {Container} from '.';

export const ErrorScreenComponent = () => {
  return (
    <Container>
      <TextContainer>
        <Text type="h1" text="Something went wrong" />
        <Text type="h2" text="Please try again later" />
      </TextContainer>
    </Container>
  );
};

const TextContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
