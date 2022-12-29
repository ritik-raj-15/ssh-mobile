import { Center, Heading, HStack, Image, Pressable, ScrollView, VStack } from 'native-base';
import React from 'react';
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import NewArrivals from '../Components/NewArrivals';
import { AppIcon } from '../Utils/AppIcons';

const Home = () => {
  return (
    <ScrollView flex="1">
      <VStack safeAreaTop flex={1}>
        <HStack h="16">
          <Center flex="0.5">
            <Image
              source={require('../../assets/icons/appIcon.jpg')}
              alt="app icon"
              w="16"
              h="16"
              resizeMode="contain"
              rounded="full"
            />
          </Center>
          <Center flex="1">
            <Heading fontWeight="semibold">Welcome!</Heading>
          </Center>
          <Center flex="0.5">
            <NotificationIcon />
          </Center>
        </HStack>
        {/* Banner Section */}
        <HStack w="full" h="48">
          <Banner />
        </HStack>
        <HStack w="full" h="72">
          <NewArrivals />
        </HStack>
        <HStack flex="1" h="full">
          <Category />
        </HStack>
      </VStack>
    </ScrollView>
  );
};

const NotificationIcon = () => (
  <Pressable
    _pressed={{ opacity: '50' }}
    accessibilityLabel="aria-notification-bell"
    // onPress={() => navigation.navigate('Notification')}
  >
    <Center bg="muted.100" w="12" h="12" rounded="full">
      {AppIcon.Notification({ size: 6 })}
      {true ? (
        <Center
          bg="white"
          w="3"
          h="3"
          rounded="md"
          alignItems="center"
          position="absolute"
          right="3"
          top="3">
          <Center bg="orange.300" w="2" h="2" rounded="md" />
        </Center>
      ) : null}
    </Center>
  </Pressable>
);

export default Home;
