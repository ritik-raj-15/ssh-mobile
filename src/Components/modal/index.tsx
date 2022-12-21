import React, { useEffect, useRef, useState } from 'react';
import { useWindowDimensions, StyleSheet } from 'react-native';
import {
  Center,
  Modal,
  Text,
  Button,
  FlatList,
  Box,
  HStack,
  View,
  Heading,
  VStack,
  Image,
} from 'native-base';
import { storageKeys } from '../../Storage/storageKeys';
import { settingStorage } from '../../Storage';

const SlideData = [
  {
    id: 1,
    icon: require('../../../assets/images/welcome.png'),
    heading: 'Jai Sachidanand Ji',
    title: 'Welcome to Shri Swaroop Handlooms, we hope to ease your experience in handlooms.',
  },
  {
    id: 2,
    icon: require('../../../assets/images/handlooms.jpg'),
    heading: 'Explore',
    title:
      'Complement your room with our finest Bed sheets, Towels, Curtains, Sofa Covers, Carpets and more!',
  },
  {
    id: 3,
    icon: require('../../../assets/images/offers.jpg'),
    heading: 'Enjoy',
    title:
      'Shop our best products up to 20% off and you’ll be smiling all the way to your next adventure.',
  },
];

export const OnboardingModal = () => {
  const { width } = useWindowDimensions();
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<any>(null);

  useEffect(() => {
    try {
      let res = settingStorage.getBoolean(storageKeys.APP_FIRST_LAUNCH);

      if (res === undefined) {
        settingStorage.set(storageKeys.APP_FIRST_LAUNCH, true);
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    } catch (_) {}
  }, []);

  const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: any }) => {
    setCurrentIndex(viewableItems[0]?.index);
  }).current;

  const handleNextSlide = () => {
    slideRef?.current?.scrollToIndex({
      animated: true,
      index: currentIndex + 1,
    });
  };

  const renderSlides = ({
    item,
  }: {
    item: { id: number; heading: string; title: string; icon: any };
  }) => {
    return (
      <Box width={width} alignItems="center" justifyContent="space-evenly">
        <View
          style={{
            width: width * 0.8,
            ...styles.slideView,
          }}>
          <Image source={item.icon} alt="welcome" style={styles.image} />
        </View>
        <VStack w="100%" space={4}>
          <Heading textAlign="center">{item.heading}</Heading>
          <Text textAlign="center" py="1" px="8" fontSize="20" fontStyle="italic">
            {item.title}
          </Text>
        </VStack>
      </Box>
    );
  };
  const isLastSlide = currentIndex === SlideData.length - 1;

  return (
    <Center>
      <Modal isOpen={isFirstLaunch} size="full" bg="#FEF8F4" justifyContent="flex-end" pb="10">
        <Box flex={0.7}>
          <FlatList
            ref={slideRef}
            data={SlideData}
            renderItem={renderSlides}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={item => item.id.toString()}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
            initialNumToRender={1}
          />
        </Box>
        <HStack justifyContent="center" flex={0.2} space={4}>
          {SlideData.map((el, index) => (
            <Center
              h="2.5"
              w="2.5"
              bg={currentIndex === index ? 'yellow.400' : 'yellow.200'}
              rounded="md"
              key={index}
            />
          ))}
        </HStack>
        <HStack w="95%" justifyContent={isLastSlide ? 'center' : 'space-between'}>
          <Button
            flex={isLastSlide ? 0.7 : 0}
            variant={isLastSlide ? 'solid' : 'unstyled'}
            bg={isLastSlide ? 'yellow.500' : null}
            rounded={isLastSlide ? 'full' : 'none'}
            _pressed={{ bg: isLastSlide ? 'yellow.300' : 'muted.50' }}
            size="lg"
            minH="12"
            onPress={() => {
              setIsFirstLaunch(false);
            }}
            _text={{
              fontSize: 'lg',
              fontWeight: 'bold',
            }}>
            {isLastSlide ? 'GET STARTED' : 'SKIP'}
          </Button>
          <Button
            variant="unstyled"
            _pressed={{ bg: 'muted.50' }}
            display={isLastSlide ? 'none' : 'flex'}
            size="lg"
            minH="12"
            _text={{
              fontSize: 'lg',
              fontWeight: 'bold',
            }}
            onPress={() => handleNextSlide()}>
            NEXT
          </Button>
        </HStack>
      </Modal>
    </Center>
  );
};

const styles = StyleSheet.create({
  slideView: { flex: 0.6, borderWidth: 0.5, shadowColor: '#f1e6da' },
  image: { width: '100%', height: '100%' },
});
