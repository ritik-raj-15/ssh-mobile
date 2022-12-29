import { Box, FlatList, HStack, Image, VStack, Heading, Pressable } from 'native-base';
import React from 'react';
import { useWindowDimensions } from 'react-native';

const Categories = [
  {
    id: '0',
    category1: 'Blankets',
    category2: 'Pillow & Covers',
    img1: require('../../assets/images/blanket.jpeg'),
    img2: require('../../assets/images/pillow.jpeg'),
  },
  {
    id: '1',
    category1: 'Curtains',
    category2: 'Quilts & Covers',
    img1: require('../../assets/images/curtain.jpeg'),
    img2: require('../../assets/images/quilt.jpeg'),
  },
  {
    id: '2',
    category1: 'Sofa Set & Covers',
    category2: 'Table Covers',
    img1: require('../../assets/images/sofa.jpeg'),
    img2: require('../../assets/images/table.jpeg'),
  },
  {
    id: '3',
    category1: 'Carpets',
    category2: 'Baby Items',
    img1: require('../../assets/images/carpet.jpeg'),
    img2: require('../../assets/images/baby_item.jpeg'),
  },
];

const Category = () => {
  const { width } = useWindowDimensions();

  const renderBanner = ({
    item,
    index,
  }: {
    item: {
      id: string;
      img1: any;
      img2: any;
      category1: string;
      category2: string;
    };
    index: number;
  }) => {
    return (
      <VStack>
        <Box width={width * 0.45} p="2" ml={index === 0 ? 2 : 0}>
          <Pressable onPress={() => console.log('hi')}>
            <VStack space={2} alignItems="center">
              <Image
                source={item.img1}
                alt="New Arrival"
                width="100%"
                h="24"
                borderRadius="20"
                resizeMode="cover"
                borderWidth="1"
                borderColor="muted.200"
              />
              <Heading fontSize="md" textAlign="center">
                {item.category1}
              </Heading>
            </VStack>
          </Pressable>
        </Box>
        <Box width={width * 0.45} p="2" ml={index === 0 ? 2 : 0}>
          <Pressable onPress={() => console.log('hi')}>
            <VStack space={2} alignItems="center">
              <Image
                source={item.img2}
                alt="New Arrival"
                width="100%"
                h="24"
                borderRadius="20"
                resizeMode="cover"
                borderWidth="1"
                borderColor="muted.200"
              />
              <Heading fontSize="md" textAlign="center">
                {item.category2}
              </Heading>
            </VStack>
          </Pressable>
        </Box>
      </VStack>
    );
  };

  return (
    <VStack flex="1">
      <HStack px="4" py="2" alignItems="center">
        <Heading fontWeight="semibold">What's on your mind?</Heading>
      </HStack>
      <FlatList
        data={Categories}
        renderItem={renderBanner}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </VStack>
  );
};

export default React.memo(Category);
