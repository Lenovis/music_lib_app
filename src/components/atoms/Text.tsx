import React from 'react';
import {TextProps} from 'react-native';
import styled from 'styled-components/native';

type Props = TextProps & {
  text: string;
  type: 'h1' | 'h2' | 'h3';
};

export const Text = ({text, type, ...props}: Props) => {
  return (
    <StyledText type={type} {...props}>
      {text}
    </StyledText>
  );
};

type StyledTextProps = {
  type: 'h1' | 'h2' | 'h3';
};

const StyledText = styled.Text<StyledTextProps>`
  font-size: ${({type}) => {
    switch (type) {
      case 'h1':
        return '20px';
      case 'h2':
        return '16px';
      case 'h3':
        return '14px';
      default:
        return '14px';
    }
  }};
  color: white;
  font-weight: ${({type}) => {
    switch (type) {
      case 'h1':
        return 'bold';
      case 'h2':
        return 'bold';
      case 'h3':
        return 'normal';
      default:
        return 'normal';
    }
  }};
`;
