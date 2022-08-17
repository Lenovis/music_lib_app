import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {Container} from '../molecules';

export const LoadingScreenComponent = () => {
  return (
    <Container>
      <ActivityIndicatorContainer>
        <ActivityIndicator size="large" />
      </ActivityIndicatorContainer>
    </Container>
  );
};

const ActivityIndicatorContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
