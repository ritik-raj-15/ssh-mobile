import { HStack, VStack, Text, Center, Divider, Button, Box } from 'native-base';
import React from 'react';
import { AppIcon } from '../Utils/AppIcons';

const options = [
  { name: 'Personal Detail', icon: 'account-details', as: 'MaterialCommunityIcons' },
  { name: 'E-Statement', icon: 'md-card', as: 'Ionicons' },
  { name: 'Help Desk', icon: 'md-help-circle', as: 'Ionicons' },
];
const Profile = () => {
  const renderOptions = (item: { name: string; icon: any; as: string }, index: number) => {
    return (
      <HStack py="4" px="8" alignItems="center" key={index}>
        <Center bg="muted.200" w="12" h="12" rounded="md">
          {AppIcon.Media({ name: item.icon, size: 5, as: item.as })}
        </Center>
        <Text ml="4" fontSize="md" fontWeight="medium" color="gray.500">
          {item.name}
        </Text>
      </HStack>
    );
  };
  return (
    <VStack flex="1" safeArea justifyContent="center">
      <HStack py="4" px="8" alignItems="center">
        <Center bg="muted.200" w="16" h="16" rounded="md">
          {AppIcon.Profile({ size: 10 })}
        </Center>
        <Text ml="4" fontSize="20" fontWeight="semibold">
          Hey!, Ritik Raj
        </Text>
      </HStack>
      <Divider
        alignSelf="center"
        w="90%"
        _light={{
          bg: 'muted.300',
        }}
        _dark={{
          bg: 'muted.50',
        }}
      />
      <VStack>{options.map((el, index) => renderOptions(el, index))}</VStack>
      <Divider
        alignSelf="center"
        w="90%"
        _light={{
          bg: 'muted.300',
        }}
        _dark={{
          bg: 'muted.50',
        }}
      />
      <Box p="8">
        <Button
          leftIcon={AppIcon.LogOut({ size: 6, color: 'white' })}
          shadow={1}
          minH="12"
          size="lg"
          bg="#ab8442"
          _text={{ fontSize: '18', fontWeight: 'semibold' }}
          rounded="md"
          _pressed={{ bg: 'muted.400' }}
          // isDisabled={isDisabled}
          // isLoading={authLoading}
          // onPress={onPress}
          // accessibilityLabel={text}
        >
          Log Out
        </Button>
        <Text mt="5" fontSize="md" fontWeight="medium" alignSelf="center" color="muted.400">
          App version 1.0
        </Text>
      </Box>
    </VStack>
  );
};

export default Profile;
