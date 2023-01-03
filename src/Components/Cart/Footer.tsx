import { Box, Button, HStack, Text, VStack } from 'native-base';
import React from 'react';

const Footer = () => {
  return (
    <VStack p="4" space={4}>
      <HStack justifyContent="space-between" alignItems="center">
        <Text color="muted.500" fontSize="md" fontWeight="medium">
          Subtotal :
        </Text>
        <Text fontWeight="bold">₹800.00</Text>
      </HStack>
      <HStack justifyContent="space-between" alignItems="center">
        <Text color="muted.500" fontSize="md" fontWeight="medium">
          Delivery Fee :
        </Text>
        <Text fontWeight="bold">₹10.00</Text>
      </HStack>
      <HStack justifyContent="space-between" alignItems="center">
        <Text color="muted.500" fontSize="md" fontWeight="medium">
          Discount :
        </Text>
        <Text fontWeight="bold" color="red.600">
          ₹10%
        </Text>
      </HStack>
      <Box borderWidth={1} borderColor="muted.200" borderStyle="dashed" />
      <HStack justifyContent="space-between" alignItems="center" py="3">
        <Text color="muted.500" fontSize="md" fontWeight="medium">
          Total :
        </Text>
        <Text fontWeight="bold">₹780.00</Text>
      </HStack>
      <Button
        minH="12"
        size="lg"
        bg="yellow.400"
        _text={{ fontSize: '18', fontWeight: 'semibold', color: 'black' }}
        rounded="full"
        _pressed={{ bg: 'orange.300' }}>
        Check out
      </Button>
    </VStack>
  );
};

export default Footer;
