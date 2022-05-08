import Header from '../components/Header';
import { VStack, Box, Text, Button, Flex, Image } from '@chakra-ui/react';
import { FC } from 'react';

const Home: FC = () => {
    return (
        <VStack
            minW="100vw"
            minH="100vh"
            overflowX="hidden"
            gap="28"
            bg="#010101"
            fontFamily="Monument Extended"
            fontWeight="extrabold"
        >
            <Header />

            <Box textAlign="center" display="flex" flexDir="column" gap="10">
                <Text fontSize="48px" lineHeight="50px" color="white">
                    a shelter for <br />
                    products crafted <br />
                    by our team
                </Text>

                <Flex justifyContent="center">
                    <Button
                        w="48"
                        bgColor="blue.600"
                        textColor="white"
                        h="44px"
                        rounded="lg"
                        fontSize="md"
                        _focus={{}}
                        _hover={{ bgColor: 'blue.500' }}
                        _active={{}}
                    >
                        our projects
                    </Button>
                </Flex>

                <Image
                    src="/assets/blob1.svg"
                    height="60"
                    width="60"
                    position="absolute"
                    bottom="0"
                    left="0"
                />

                <Image
                    src="/assets/blob2.svg"
                    height="60"
                    width="60"
                    position="absolute"
                    bottom="0"
                    right="0"
                />
            </Box>
        </VStack>
    );
};

export default Home;
