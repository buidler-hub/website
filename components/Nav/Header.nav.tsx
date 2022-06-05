import { Box, Button, Flex, Text } from '@chakra-ui/react';
import type { NextComponentType, NextPageContext } from 'next';
import { FaDiscord } from 'react-icons/fa';

const Header: NextComponentType<NextPageContext> = () => {
    return (
        <Box
            w="full"
            fontFamily="lexend"
            display="flex"
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            px="10"
            py="4"
            top="0"
            position="fixed"
        >
            <Text fontWeight="600" fontSize="xl">
                Builder&apos;sHub
            </Text>

            <Flex dir="row" gap="4" fontWeight="600">
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
                _focus={{}}
                _active={{}}
            >
                <FaDiscord size="22" />
                Join Discord
            </Button>
        </Box>
    );
};

export default Header;
