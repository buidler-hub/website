import Header from '../components/Header';
import { VStack, Box, Text, Button, Flex } from '@chakra-ui/react';
import { FC } from 'react';

const Home: FC = () => {
    return (
        <VStack
            w="100vw"
            h="100vh"
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
            </Box>
        </VStack>
    );
};

export default Home;
