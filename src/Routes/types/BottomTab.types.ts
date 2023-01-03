import { NavigatorScreenParams } from '@react-navigation/native';
import { RootStackParamList } from './Main.types';

export type TabParamList = {
  Home: NavigatorScreenParams<RootStackParamList>;
  MyCart: undefined;
  Whishlist: undefined;
  Profile: { userId?: string };
};
