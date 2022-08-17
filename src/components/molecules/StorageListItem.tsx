import React from 'react';
import styled from 'styled-components/native';
import {Text} from '../atoms';
import Icon from 'react-native-vector-icons/Feather';

type Props = {
  text: string;
  songLength?: string;
  onPress: () => void;
};

export const StorageListItem = ({text, songLength, onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      <Text text={text} type="h2" />
      <InfoContainer>
        {songLength && <Text text={songLength} type="h3" />}
        <Icon name="chevron-right" size={20} color="#fff" />
      </InfoContainer>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  padding: 10px 10px 10px 0;
`;

const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
