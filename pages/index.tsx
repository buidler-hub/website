import { Header } from '../components';
import { Box, Button, Center, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <Box
            minH="100vh"
            minW="full"
            overflowX="hidden"
            bgSize="cover"
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{
                backgroundImage: 'url(/assets/bg.svg)',
            }}
        >
            <Header />

            <Box display="flex" flexDir="column" gap="10">
                <Text
                    align="center"
                    fontFamily="spartan"
                    fontWeight="900"
                    fontSize="5xl"
                    lineHeight="54px"
                >
                    A Shelter for <br />
                    Products crafted <br />
                    by our Team
                </Text>
                <Center>
                    <Button
                        h="12"
                        colorScheme="messenger"
                        w="44"
                        fontFamily="lexend"
                        fontWeight="600"
                        fontSize="xl"
                        _active={{}}
                        _focus={{}}
                    >
                        Projects
                    </Button>
                </Center>
            </Box>
        </Box>
    );
};

export default Home;
