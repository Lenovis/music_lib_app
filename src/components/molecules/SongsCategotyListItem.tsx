import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';
import {songTimeFormater} from '../../helpers';
import {Song} from '../../types';
import {Text} from '../atoms';

type Props = Song & {
  type?: 'saved' | 'toSave';
  containerPressDisabled?: boolean;
  onSavePress?: () => void;
  onDeletePress?: () => void;
};

export const SongsCategoryListItem = ({
  title,
  size,
  duration,
  type,
  containerPressDisabled = true,
  onSavePress,
  onDeletePress,
}: Props) => {
  const openSongScreen = () => {
    console.log('TODO: open song screen');
  };

  const durationFormated = songTimeFormater(duration);

  return (
    <Container onPress={openSongScreen} disabled={containerPressDisabled}>
      <TextInfoContainer>
        <Text text={title} type="h2" />
        <InfoContainer>
          <Text text={size} type="h3" />
          <Text text=" - " type="h3" />
          <Text text={durationFormated} type="h3" />
        </InfoContainer>
      </TextInfoContainer>
      {type === 'toSave' && (
        <IconContainer onPress={onSavePress}>
          <Icon name="save" size={25} color="#fff" />
        </IconContainer>
      )}
      {type === 'saved' && (
        <IconContainer onPress={onDeletePress}>
          <Icon name="check" size={25} color="#fff" />
        </IconContainer>
      )}
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  padding: 10px 10px 10px 0;
`;

const TextInfoContainer = styled.View``;

const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

const IconContainer = styled.TouchableOpacity`
  justify-content: center;
`;
