import { NavOption, JoinButton } from './Nav.components';
import navOptions from './navOptions';
import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextComponentType, NextPageContext } from 'next';

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
                Builder&apos;s Hub
            </Text>

            <Flex
                gap="4"
                fontWeight="600"
                display={{ base: 'none', md: 'flex' }}
            >
                {navOptions.map(option => (
                    <NavOption key={option.label} {...option} />
                ))}
            </Flex>
            <JoinButton display={{ base: 'none', md: 'flex' }} />
        </Box>
    );
};

export default Header;
