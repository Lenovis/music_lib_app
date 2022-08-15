import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native';
import {Text} from '../components/atoms';
import {
  Container,
  SongsContainer,
  SongsSwimlane,
  SongTile,
} from '../components/molecules';
import {NavigationProps} from '../navigation';

const JAZZSONGS = [
  {
    title: 'Jazz in Paris - The Essential',
    duration: '2m 40s',
    size: '10MB',
    imageUri: 'https://picsum.photos/200/300',
  },
  {
    title: 'Jazz in Paris - The Essential 2',
    duration: '2m 40s',
    size: '10MB',
    imageUri: 'https://picsum.photos/200/300',
  },
  {
    title: 'Jazz of the Century - The Essential',
    duration: '2m 40s',
    size: '10MB',
    imageUri: 'https://picsum.photos/200/300',
  },
  {
    title: 'Jazz in Paris',
    duration: '2m 40s',
    size: '10MB',
    imageUri: 'https://picsum.photos/200/300',
  },
];

const ROCKSONGS = [
  {
    title: 'Rock in Paris - The Essential',
    duration: '2m 40s',
    size: '10MB',
    imageUri: 'https://picsum.photos/200/300',
  },
  {
    title: 'Rock in Paris - The Essential',
    duration: '2m 40s',
    size: '10MB',
    imageUri: 'https://picsum.photos/200/300',
  },
  {
    title: 'Rock in Paris - The Essential',
    duration: '2m 40s',
    size: '10MB',
    imageUri: 'https://picsum.photos/200/300',
  },
  {
    title: 'Rock in Paris - The Essential',
    duration: '2m 40s',
    size: '10MB',
    imageUri: 'https://picsum.photos/200/300',
  },
  {
    title: 'Rock in Paris - The Essential',
    duration: '2m 40s',
    size: '10MB',
    imageUri: 'https://picsum.photos/200/300',
  },
  {
    title: 'Rock in Paris - The Essential',
    duration: '2m 40s',
    size: '10MB',
    imageUri: 'https://picsum.photos/200/300',
  },
];

export const HomeScreen = () => {
  const {navigate} = useNavigation<NavigationProps>();

  const navigateToCategoryScreen = () => {
    navigate('CategoryScreen');
  };
  return (
    <Container>
      <ScrollView>
        <SongsContainer title="Jazz" onPress={navigateToCategoryScreen}>
          <SongsSwimlane>
            {JAZZSONGS.slice(0, 5).map((song, idx) => (
              <SongTile key={idx} {...song} />
            ))}
          </SongsSwimlane>
        </SongsContainer>
        <SongsContainer title="Rock" onPress={navigateToCategoryScreen}>
          <SongsSwimlane>
            {ROCKSONGS.slice(0, 5).map((song, idx) => (
              <SongTile key={idx} {...song} />
            ))}
          </SongsSwimlane>
        </SongsContainer>
        <Text type="h1" text="Storage" />
      </ScrollView>
    </Container>
  );
};
