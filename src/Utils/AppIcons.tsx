import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
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
  Home: (props: TSize) => BASE({ name: 'grid-sharp', as: Ionicons, ...props }),
  Settings: (props: TSize) => BASE({ name: 'settings-outline', as: Ionicons, ...props }),
  Eye: (props: TSize) => BASE({ name: 'eye', ...props }),
  EyeOff: (props: TSize) => BASE({ name: 'eye-off', ...props }),
  Plus: (props: TSize) => BASE({ name: 'plus', ...props }),
  More: (props: TSize) => BASE({ name: 'more-vertical', ...props }),
  Refresh: (props: TSize) => BASE({ name: 'refresh', ...props, as: Ionicons }),
  CloudUpload: (props: TSize) => BASE({ name: 'cloud-upload', ...props, as: Ionicons }),
  Info: (props: TSize) => BASE({ name: 'info', ...props }),
  Down: (props: TSize) => BASE({ name: 'chevron-down', ...props }),
  Close: (props: TSize) => BASE({ name: 'x', ...props }),
  File: (props: TSize) => BASE({ name: 'file', ...props }),
  Profile: (props: TSize) => BASE({ name: 'person-circle-outline', as: Ionicons, ...props }),
  Forward: (props: TSize) => BASE({ name: 'chevron-forward', as: Ionicons, ...props }),
  CaratDown: (props: TSize) => BASE({ name: 'chevron-down-outline', ...props, as: Ionicons }),
  CaratUp: (props: TSize) => BASE({ name: 'chevron-up-outline', ...props, as: Ionicons }),
  Image: (props: TSize) => BASE({ name: 'images-outline', ...props, as: Ionicons }),
  Notification: (props: TSize) => BASE({ name: 'md-notifications', ...props, as: Ionicons }),
  Filter: (props: TSize) => BASE({ name: 'filter', ...props }),
  Reminder: (props: TSize) => BASE({ name: 'alarm-outline', ...props, as: Ionicons }),
  Check: (props: TSize) => BASE({ name: 'check-circle', ...props }),
  Network: (props: TSize) => BASE({ name: 'radio', ...props }),
  Retry: (props: TSize) => BASE({ name: 'refresh-circle', ...props, as: Ionicons }),
  Flash: (props: TSize) => BASE({ name: 'flash-off-sharp', ...props, as: Ionicons }),
  Lock: (props: TSize) => BASE({ name: 'lock', ...props }),
};
