import {
  Box,
  Heading,
  Center,
  FormControl,
  Input,
  Link,
  VStack,
  Button,
  Text,
  HStack,
  IconButton,
} from 'native-base';
import React, { useState } from 'react';
import { AppIcon } from '../Utils/AppIcons';

export const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Box flex="1" bg="muted.100" safeAreaBottom>
      <Center flex="0.4" bg="#ab8442" borderRadius="30">
        <Heading color="white" size="xl">
          Shri Swaroop
        </Heading>
      </Center>
      <VStack flex="1" px="5" justifyContent="space-between" bottom="8">
        <VStack w="full" space={6} rounded="lg" bg="white" p="6" shadow="1">
          <Heading size="xl" color="muted.600">
            Log In
          </Heading>
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input
              // value={emailId}
              // onChangeText={nextValue => handleForm('emailId', nextValue)}
              testID="email"
              accessibilityLabel="aria-email"
              size="lg"
              autoCapitalize="none"
            />
          </FormControl>

          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type={showPassword ? 'text' : 'password'}
              InputRightElement={
                showPassword ? (
                  <IconButton
                    icon={AppIcon.Eye({ size: 5, color: 'muted.400' })}
                    onPress={() => setShowPassword(false)}
                  />
                ) : (
                  <IconButton
                    icon={AppIcon.EyeOff({ size: 5, color: 'muted.400' })}
                    onPress={() => setShowPassword(true)}
                  />
                )
              }
              // value={password}
              // onChangeText={nextValue => handleForm('password', nextValue)}
              testID="password"
              accessibilityLabel="aria-password"
              size="lg"
            />
            <Link
              isUnderlined={false}
              // onPress={() => setScreenType(screen.FORGET_PASSWORD)}
              _text={{
                fontSize: 'xs',
                fontWeight: '500',
                color: 'muted.500',
              }}
              alignSelf="flex-end"
              mt="2">
              Forgot Password?
            </Link>
          </FormControl>
          <Button
            shadow={1}
            minH="12"
            size="lg"
            bg="#ab8442"
            _text={{ fontSize: '18', fontWeight: 'semibold' }}
            rounded="md"
            _pressed={{ bg: 'orange.300' }}
            // isDisabled={isDisabled}
            // isLoading={authLoading}
            // onPress={onPress}
            // accessibilityLabel={text}
          >
            Log In
          </Button>
        </VStack>
        <VStack space="4">
          <Button
            variant="outline"
            minH="12"
            size="lg"
            bg="white"
            _text={{ fontSize: '18', fontWeight: 'semibold', color: 'muted.600' }}
            rounded="md"
            _pressed={{ bg: 'red.300' }}
            // isDisabled={isDisabled}
            // isLoading={authLoading}
            // onPress={onPress}
            // accessibilityLabel={text}
          >
            Login with Facebook
          </Button>
          <Button
            variant="outline"
            minH="12"
            size="lg"
            bg="white"
            _text={{ fontSize: '18', fontWeight: 'semibold', color: 'muted.600' }}
            rounded="md"
            _pressed={{ bg: 'red.300' }}
            // isDisabled={isDisabled}
            // isLoading={authLoading}
            // onPress={onPress}
            // accessibilityLabel={text}
          >
            Login with Google
          </Button>
        </VStack>
        <HStack justifyContent="center" alignItems="center">
          <Text>Don't have an account? </Text>
          <Link
            isUnderlined={false}
            onPress={() => {}}
            _text={{
              color: 'red.500',
              fontWeight: 'medium',
            }}>
            Register
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};
