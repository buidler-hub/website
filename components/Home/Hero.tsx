import { Box, Button, Center, Text } from '@chakra-ui/react';
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
    );
};

export default Hero;
