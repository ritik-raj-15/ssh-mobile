import {
  Box,
  Text,
  Image,
  VStack,
  Button,
  HStack,
  Center,
  Pressable,
  ScrollView,
} from 'native-base';
import React from 'react';
import { AppIcon } from '../Utils/AppIcons';

const ProductDetail = () => {
  return (
    <Box flex="1" bg="muted.600">
      <Box h="50%">
        <Image
          source={require('../../assets/images/pillows.jpeg')}
          alt="pillow"
          w="full"
          h="full"
        />
      </Box>
      <Box bg="white" h="full" borderTopLeftRadius={20} borderTopRightRadius={20} bottom="3" p="5">
        <ScrollView flexGrow={0.5}>
          <VStack space={2}>
            <Text fontSize="28" fontWeight="bold">
              Nike Blazer Mid '77
            </Text>
            <Text color="muted.500">Women's Shoes</Text>
            <Text fontSize="24" fontWeight="semibold">
              $100.99
            </Text>
          </VStack>
          <VStack space={2}>
            <Text fontSize="16" color="muted.800">
              Description:-
            </Text>
            <Text noOfLines={2} color="muted.500">
              Styled for the '70s. Loved in the '80s. Classic in the '90s. Ready for the future. The
              Nike Blazer Mid '77 Next the next to be come yet
            </Text>
            <Text>Read more...</Text>
          </VStack>
        </ScrollView>
        <HStack space="4">
          <Center
            flexDir="row"
            bg="muted.100"
            minW="32"
            rounded="full"
            p="3"
            justifyContent="space-between">
            <Pressable _pressed={{ opacity: '50' }} accessibilityLabel="aria-notification-bell">
              {AppIcon.Plus({
                name: 'minus-circle',
                size: 8,
              })}
            </Pressable>
            <Text>10</Text>
            <Pressable
              _pressed={{ opacity: '50' }}
              accessibilityLabel="aria-notification-bell"
              bg="black"
              rounded="full">
              {AppIcon.Plus({
                size: 8,
                color: 'white',
              })}
            </Pressable>
          </Center>
          <Button
            flex="1"
            minH="12"
            size="lg"
            bg="yellow.400"
            _text={{ fontSize: '18', fontWeight: 'semibold', color: 'black' }}
            rounded="full"
            _pressed={{ bg: 'orange.300' }}>
            Add to cart
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductDetail;
