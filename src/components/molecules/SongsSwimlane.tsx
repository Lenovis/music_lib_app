import React from 'react';
import {ScrollView} from 'react-native';

type Props = {
  children: React.ReactNode;
};

export const SongsSwimlane = ({children}: Props) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
};
