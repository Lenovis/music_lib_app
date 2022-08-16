import React from 'react';
import styled from 'styled-components/native';
import {Text} from './Text';

type Props = {
  onPress: () => void;
  text: string;
};

export const Button = ({onPress, text}: Props) => {
  return (
    <StyledTouchableOpacity onPress={onPress}>
      <Text type="h2" text={text} />
    </StyledTouchableOpacity>
  );
};

const StyledTouchableOpacity = styled.TouchableOpacity`
  padding: 5px 20px;
  border-radius: 5px;
  background-color: purple;
  align-items: center;
  justify-content: center;
`;
