import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

const Home: FC = () => {
    return (
        <Flex
            flexDir="column"
            alignItems="center"
            w="100%"
            h="100%"
            minH="100vh"
            justifyContent="center"
        >
            <Text as="h2" fontFamily="sans-serif" fontSize="5xl">
                Next.js + Chakra Starter Template
            </Text>
            <Text
                _hover={{
                    background: '#3a0ca3',
                }}
                as="a"
                href="https://github.com/avneesh0612/next-chakra"
                target="_blank"
                rel="noopener noreferrer"
                background="#3f37c9"
                color="white"
                variant="outline"
                size="lg"
                marginTop="1rem"
                textDecoration="none"
                padding="0.5rem 1rem"
                borderRadius="0.5rem"
            >
                View repository
            </Text>
        </Flex>
    );
};

export default Home;
