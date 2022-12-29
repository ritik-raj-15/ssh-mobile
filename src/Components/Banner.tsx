import { Box, Button, FlatList, HStack, Text } from 'native-base';
import React from 'react';
import { useWindowDimensions, StyleSheet, ImageBackground } from 'react-native';

const BannerData = [
  {
    id: '0',
    title: 'Get your special sale up to 50%',
    img: require('../../assets/images/handlooms.jpg'),
  },
  {
    id: '1',
    title: "Don't miss this end of season sale!",
    img: require('../../assets/images/banner_2.jpeg'),
  },
];
const Banner = () => {
  const { width } = useWindowDimensions();
  const renderBanner = ({
    item,
    index,
  }: {
    item: { title: string; id: string; img: any };
    index: number;
  }) => {
    const lines = item.title.split(' ');
    return (
      <Box width={width * 0.95} p="6" pl={index !== 0 ? 0 : 4} shadow="6">
        <ImageBackground source={item.img} style={styles.bannerContain}>
          <HStack
            justifyContent="space-between"
            alignItems="flex-end"
            flex="1"
            bg="rgba(0, 0, 0, 0.4)">
            <Box flex="1" h="full" p="3" justifyContent="flex-end">
              <Text lineHeight="xl">
                {lines.map((word, key) => (
                  <Text
                    fontWeight="extrabold"
                    fontSize="24"
                    color={
                      key === lines.length - 1 || key === lines.length - 2 ? 'yellow.300' : 'white'
                    }
                    key={key}>
                    {word + ' '}
                  </Text>
                ))}
              </Text>
            </Box>
            <Box flex="1" h="full" alignItems="flex-end" justifyContent="flex-end">
              <Button
                w="24"
                mr="4"
                mb="4"
                size="sm"
                bg="yellow.400"
                _text={{ fontSize: '14', fontWeight: 'semibold', color: 'black' }}
                rounded="md"
                _pressed={{ bg: 'orange.300' }}
                // isDisabled={isDisabled}
                // isLoading={authLoading}
                // onPress={onPress}
                // accessibilityLabel={text}
              >
                Shop now
              </Button>
            </Box>
          </HStack>
        </ImageBackground>
      </Box>
    );
  };
  return (
    <FlatList
      data={BannerData}
      renderItem={renderBanner}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  bannerContain: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 15,
  },
});

export default React.memo(Banner);
