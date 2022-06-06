import { HeaderOption, JoinButton } from './Header.components';
import { Box, Flex, Text, Show, Hide } from '@chakra-ui/react';
import type { NextComponentType, NextPageContext } from 'next';

const Header: NextComponentType<NextPageContext> = () => {
    const headerOptions = [
        {
            href: '/',
            label: 'Home',
        },
        {
            href: '/projects',
            label: 'Our Projects',
        },
        {
            href: '/team',
            label: 'Team',
        },
        {
            isExternal: true,
            href: 'https://github.com/buidler-hub/',
            label: 'Github',
        },
    ];

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
            <Flex
                dir="row"
                gap="4"
                fontWeight="600"
                fontSize={{ base: 0, md: 'md' }}
            >
                {headerOptions.map(option => (
                    <HeaderOption key={option.label} {...option} />
                ))}
            </Flex>

            <JoinButton />
        </Box>
    );
};

export default Header;
