import { Box, Button, Center, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <Box display="flex" flexDir="column" gap="10" margin="auto">
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
                <Link href="/projects">
                    <Button
                        h="12"
                        colorScheme="purple"
                        w="44"
                        fontFamily="lexend"
                        fontWeight="600"
                        fontSize="xl"
                        _active={{}}
                        _focus={{}}
                    >
                        Projects
                    </Button>
                </Link>
            </Center>
        </Box>
    );
};

export default Hero;
