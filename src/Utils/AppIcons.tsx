import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon, IIconProps } from 'native-base';
import { InterfaceIconProps } from 'native-base/lib/typescript/components/primitives/Icon/types';

type TSize = {
  name?: string;
  size?: number;
  color?: InterfaceIconProps['color'];
  darkColor?: InterfaceIconProps['color'];
} & IIconProps;

const BASE = ({ name, size = 30, color, darkColor, as = Feather, ...props }: TSize) => (
  <Icon
    as={as}
    name={name}
    size={size}
    color={color || 'coolGray.900'}
    _dark={{
      color: darkColor || 'coolGray.200',
    }}
    {...props}
  />
);

export const AppIcon = {
  Home: (props: TSize) => BASE({ name: 'home-variant', as: MaterialCommunityIcons, ...props }),
  Settings: (props: TSize) => BASE({ name: 'settings-outline', as: Ionicons, ...props }),
  Eye: (props: TSize) => BASE({ name: 'eye', ...props }),
  EyeOff: (props: TSize) => BASE({ name: 'eye-off', ...props }),
  Plus: (props: TSize) => BASE({ name: 'plus-circle', ...props }),
  More: (props: TSize) => BASE({ name: 'more-vertical', ...props }),
  Refresh: (props: TSize) => BASE({ name: 'refresh', ...props, as: Ionicons }),
  CloudUpload: (props: TSize) => BASE({ name: 'cloud-upload', ...props, as: Ionicons }),
  Info: (props: TSize) => BASE({ name: 'info', ...props }),
  Down: (props: TSize) => BASE({ name: 'chevron-down', ...props }),
  Close: (props: TSize) => BASE({ name: 'x', ...props }),
  LogOut: (props: TSize) => BASE({ name: 'location-exit', as: MaterialCommunityIcons, ...props }),
  Profile: (props: TSize) => BASE({ name: 'md-person', as: Ionicons, ...props }),
  Forward: (props: TSize) => BASE({ name: 'chevron-forward', as: Ionicons, ...props }),
  CaratDown: (props: TSize) => BASE({ name: 'chevron-down-outline', ...props, as: Ionicons }),
  CaratUp: (props: TSize) => BASE({ name: 'chevron-up-outline', ...props, as: Ionicons }),
  Image: (props: TSize) => BASE({ name: 'images-outline', ...props, as: Ionicons }),
  Notification: (props: TSize) => BASE({ name: 'notifications-outline', ...props, as: Ionicons }),
  Filter: (props: TSize) => BASE({ name: 'filter', ...props }),
  Heart: (props: TSize) => BASE({ name: 'md-heart', ...props, as: Ionicons }),
  Check: (props: TSize) => BASE({ name: 'check-circle', ...props }),
  Network: (props: TSize) => BASE({ name: 'radio', ...props }),
  Retry: (props: TSize) => BASE({ name: 'refresh-circle', ...props, as: Ionicons }),
  Media: (props: TSize) =>
    BASE({ ...props, as: props.as === 'Ionicons' ? Ionicons : MaterialCommunityIcons }),
  Lock: (props: TSize) => BASE({ name: 'lock', ...props }),
  Cart: (props: TSize) => BASE({ name: 'ios-cart', ...props, as: Ionicons }),
};
