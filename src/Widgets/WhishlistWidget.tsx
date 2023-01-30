import { Box, FlatList, Text, Image, VStack, Heading, Center, Pressable } from 'native-base';
import React from 'react';
import { AppIcon } from '../Utils/AppIcons';

const BannerData = [
  {
    id: '0',
    productName: 'Nike Blazer Low "77" Jumbo',
    category: "Men's Shoes",
    price: ' ₹499',
    wishlist: 0,
    img: require('../../assets/images/towels.jpeg'),
  },
  {
    id: '1',
    productName: 'Nike Air Force 1 "07" LV8 Next Nature',
    category: "Women's Shoes",
    price: ' ₹999',
    wishlist: 1,
    img: require('../../assets/images/mats.jpeg'),
  },
  {
    id: '2',
    productName: 'Nike Blazer Low "77" Jumbo',
    category: "Men's Shoes",
    price: ' ₹599',
    wishlist: 1,
    img: require('../../assets/images/pillows.jpeg'),
  },
  {
    id: '3',
    productName: 'Nike Air Force 1 "07" LV8 Next Nature',
    category: "Women's Shoes",
    price: ' ₹799',
    wishlist: 0,
    img: require('../../assets/images/mats.jpeg'),
  },
  {
    id: '4',
    productName: 'Nike Blazer Low "77" Jumbo',
    category: "Men's Shoes",
    price: ' ₹899',
    wishlist: 1,
    img: require('../../assets/images/towels.jpeg'),
  },
];
const WishlistWidget = () => {
  const renderBanner = ({
    item,
  }: {
    item: {
      productName: string;
      id: string;
      img: any;
      category: string;
      price: string;
      wishlist: number;
    };
  }) => {
    return (
      <Box borderBottomWidth="1" borderColor="muted.200" alignItems="center" flexDir="row" p="4">
        <Image
          source={item.img}
          alt="New Arrival"
          width="24"
          h="24"
          borderRadius="20"
          bg="amber.300"
          resizeMode="cover"
          borderWidth="1"
          borderColor="muted.200"
        />
        <VStack justifyContent="center" flex="1" px="2" space={2}>
          <Heading fontSize="md" noOfLines={1}>
            {item.productName}
          </Heading>
          <Text fontWeight="normal" color="muted.500">
            {item.category}
          </Text>
          <Text fontWeight="semibold">{item.price}</Text>
        </VStack>
        <Box flexDir="row" alignItems="center" justifyContent="center">
          <Pressable
            _pressed={{ opacity: '50' }}
            accessibilityLabel="aria-notification-bell"
            bg="black"
            rounded="full">
            <Center bg="muted.100" w="8" h="8" rounded="full">
              {AppIcon.Heart({
                name: item.wishlist === 0 ? 'md-heart-outline' : 'md-heart-sharp',
                size: 5,
                color: item.wishlist === 0 ? 'none' : 'red.500',
              })}
            </Center>
          </Pressable>
        </Box>
      </Box>
    );
  };

  return (
    <VStack flex={1}>
      <FlatList
        data={BannerData}
        showsVerticalScrollIndicator={false}
        renderItem={renderBanner}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </VStack>
  );
};

export default React.memo(WishlistWidget);
