import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';

type Props = {
  children: React.ReactNode;
};

export const Container = ({children}: Props) => {
  return (
    <StyledSafeAreaView>
      <StatusBar barStyle="light-content" />
      {children}
    </StyledSafeAreaView>
  );
};

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: black;
`;
