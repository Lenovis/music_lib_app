import React from 'react';
import styled from 'styled-components/native';

type Props = {
  children: React.ReactNode;
};

export const StorageContainer = ({children}: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.View`
  margin-left: 15px;
`;
