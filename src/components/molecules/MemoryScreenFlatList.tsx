import {FlatList} from 'react-native';
import styled from 'styled-components/native';

export const MemoryScreenFlatList = styled.FlatList.attrs(() => ({
  contentContainerStyle: {flexGrow: 1},
  onEndReachedThreshold: 0.2,
  showsVerticalScrollIndicator: false,
}))`` as unknown as typeof FlatList;
