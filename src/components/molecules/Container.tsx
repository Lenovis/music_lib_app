import React from 'react';
import styled from 'styled-components/native';

type Props = {
  children: React.ReactNode;
};

export const Container = ({children}: Props) => {
  return <StyledSafeAreaView>{children}</StyledSafeAreaView>;
};

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #808080;
`;
