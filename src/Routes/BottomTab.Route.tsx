import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { TabParamList } from './types/BottomTab.types';
import { HomeScreen } from '../Pages';

const Tab = createBottomTabNavigator<TabParamList>();

type TTabBarOption<T extends string> =
  | BottomTabNavigationOptions
  | ((props: { route: RouteProp<ParamListBase, T>; navigation: any }) => BottomTabNavigationOptions)
  | undefined;

export const BottomTabRoute = () => {
  const HomeTabOptions: TTabBarOption<'Home'> = {
    headerShown: false,
  };

  //   const ProfileTabOptions: TTabBarOption<'Profiles'> = {
  //     headerShown: false,
  //   };

  return (
    <Tab.Navigator>
      <Tab.Screen options={HomeTabOptions} name="Home" component={HomeScreen} />
      {/* <Tab.Screen options={ProfileTabOptions} name="Profile" component={ProfileScreenRouter} /> */}
    </Tab.Navigator>
  );
};
