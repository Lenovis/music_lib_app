import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';

import {
  CategoryScreen,
  FileSystemScreen,
  HomeScreen,
  MemoryScreen,
} from '../screens';

type RootStackParamList = {
  HomeScreen: undefined;
  CategoryScreen: undefined;
  FileSystemScreen: undefined;
  MemoryScreen: undefined;
};

export type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="HomeScreen">
        <RootStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="CategoryScreen"
          component={CategoryScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="FileSystemScreen"
          component={FileSystemScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="MemoryScreen"
          component={MemoryScreen}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
