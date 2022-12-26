import {
  Box,
  FlatList,
  HStack,
  Text,
  Image,
  VStack,
  Heading,
  Center,
  Pressable,
  Button,
} from 'native-base';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { AppIcon } from '../Utils/AppIcons';

const BannerData = [
  {
    id: '0',
    productName: 'Nike Blazer Low "77" Jumbo',
    category: "Men's Shoes",
    price: ' ₹499',
    wishlist: 0,
    img: require('../../assets/images/sneaker_1.png'),
  },
  {
    id: '1',
    productName: 'Nike Air Force 1 "07" LV8 Next Nature',
    category: "Women's Shoes",
    price: ' ₹999',
    wishlist: 1,
    img: require('../../assets/images/sneaker_2.jpg'),
  },
  {
    id: '2',
    productName: 'Nike Blazer Low "77" Jumbo',
    category: "Men's Shoes",
    price: ' ₹599',
    wishlist: 1,
    img: require('../../assets/images/sneaker_3.jpg'),
  },
  {
    id: '3',
    productName: 'Nike Air Force 1 "07" LV8 Next Nature',
    category: "Women's Shoes",
    price: ' ₹799',
    wishlist: 0,
    img: require('../../assets/images/sneaker_1.png'),
  },
  {
    id: '4',
    productName: 'Nike Blazer Low "77" Jumbo',
    category: "Men's Shoes",
    price: ' ₹899',
    wishlist: 1,
    img: require('../../assets/images/sneaker_2.jpg'),
  },
];
const NewArrivals = () => {
  const { width } = useWindowDimensions();
  const renderBanner = ({
    item,
    index,
  }: {
    item: {
      productName: string;
      id: string;
      img: any;
      category: string;
      price: string;
      wishlist: number;
    };
    index: number;
  }) => {
    return (
      <Box width={width * 0.45} p="2" ml={index === 0 ? 2 : 0}>
        <VStack h="full" space={2}>
          <Image
            source={item.img}
            alt="New Arrival"
            width="100%"
            h="32"
            borderRadius="20"
            bg="amber.300"
            resizeMode="cover"
            borderWidth="1"
            borderColor="muted.200"
          />
          <VStack>
            <Heading fontSize="md">{item.productName}</Heading>
            <HStack justifyContent="space-between" alignItems="center">
              <VStack>
                <Text fontWeight="normal" color="muted.500">
                  {item.category}
                </Text>
                <Text fontWeight="semibold">{item.price}</Text>
              </VStack>
              <Pressable
                _pressed={{ opacity: '50' }}
                accessibilityLabel="aria-notification-bell"
                // onPress={() => navigation.navigate('Notification')}
              >
                <Center bg="muted.100" w="8" h="8" rounded="full">
                  {AppIcon.Heart({
                    name: item.wishlist === 0 ? 'md-heart-outline' : 'md-heart-sharp',
                    size: 5,
                    color: item.wishlist === 0 ? 'none' : 'red.500',
                  })}
                </Center>
              </Pressable>
            </HStack>
          </VStack>
        </VStack>
      </Box>
    );
  };
  return (
    <VStack>
      <HStack justifyContent="space-between" px="4" alignItems="center">
        <Heading fontWeight="semibold">New Arrival</Heading>
        <Button variant="ghost" _text={{ color: 'muted.600' }}>
          See all
        </Button>
      </HStack>

      <FlatList
        data={BannerData}
        renderItem={renderBanner}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </VStack>
  );
};

export default React.memo(NewArrivals);
