import { Box, Button, Flex, Text } from '@chakra-ui/react';
import type { NextComponentType, NextPageContext } from 'next';

const Header: NextComponentType<NextPageContext> = () => {
    return (
        <Box fontFamily="lexend">
            <Text>Builder&apos;sHub</Text>

            <Flex dir="row" gap="4">
                <Text>Home</Text>
                <Text>Our Projects</Text>
                <Text>Team</Text>
                <Text>Github</Text>
            </Flex>

            <Button
                display="flex"
                flexDir="row"
                gap="3"
                alignItems="center"
                justifyContent="center"
                rounded="full"
                h="10"
                px="6"
            >
                Join Discord
            </Button>
        </Box>
    );
};

export default Header;
