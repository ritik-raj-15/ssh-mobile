import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { TabParamList } from './types/BottomTab.types';
import { HomeScreen } from '../Pages';
import { AppIcon } from '../Utils/AppIcons';
import MyCart from '../Pages/MyCart';
import Whishlist from '../Pages/Whishlist';
import Profile from '../Pages/Profile';

const Tab = createBottomTabNavigator<TabParamList>();

type TTabBarOption<T extends string> =
  | BottomTabNavigationOptions
  | ((props: { route: RouteProp<ParamListBase, T>; navigation: any }) => BottomTabNavigationOptions)
  | undefined;

export const BottomTabRoute = () => {
  const HomeTabOptions: TTabBarOption<'Home'> = {
    headerShown: false,
  };
  const MyCartTabOptions: TTabBarOption<'MyCart'> = {
    headerShown: true,
    title: 'My Cart',
  };
  const WhishlistTabOptions: TTabBarOption<'Whishlist'> = {
    headerShown: true,
  };

  const ProfileTabOptions: TTabBarOption<'Profile'> = {
    headerShown: false,
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Home') {
            return focused
              ? AppIcon.Home({ size: 25 })
              : AppIcon.Home({ name: 'home-variant-outline', size: 25, color: 'muted.500' });
          } else if (route.name === 'MyCart') {
            return focused
              ? AppIcon.Cart({ size: 25 })
              : AppIcon.Cart({ name: 'ios-cart-outline', size: 25, color: 'muted.500' });
          } else if (route.name === 'Whishlist') {
            return focused
              ? AppIcon.Heart({ size: 25 })
              : AppIcon.Heart({ name: 'md-heart-outline', size: 25, color: 'muted.500' });
          } else {
            return focused
              ? AppIcon.Profile({ size: 25 })
              : AppIcon.Profile({ name: 'md-person-outline', size: 25, color: 'muted.500' });
          }
        },
        tabBarShowLabel: false,
      })}>
      <Tab.Screen options={HomeTabOptions} name="Home" component={HomeScreen} />
      <Tab.Screen options={MyCartTabOptions} name="MyCart" component={MyCart} />
      <Tab.Screen options={WhishlistTabOptions} name="Whishlist" component={Whishlist} />
      <Tab.Screen options={ProfileTabOptions} name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
