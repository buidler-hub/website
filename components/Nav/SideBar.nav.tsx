import { NavOption, JoinButton } from './Nav.components';
import navOptions from './navOptions';
import { Box, Flex } from '@chakra-ui/react';
import { NextComponentType } from 'next';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

const SideBar: NextComponentType = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            {!showSidebar && (
                <Box
                    pos="absolute"
                    top="4"
                    right="4"
                    zIndex="10"
                    onClick={() => setShowSidebar(true)}
                    display={{ base: 'flex', md: 'none' }}
                >
                    <GiHamburgerMenu size="1.5rem" />
                </Box>
            )}
            <Box
                w="56"
                bg="rgba(255,255,255,0.95)"
                minH="100vh"
                right="0"
                top="0"
                zIndex="10"
                position="fixed"
                display={{ base: 'flex', md: 'none' }}
                flexDir="column"
                gap="4"
                justifyContent="center"
                px="4"
                transform={showSidebar ? 'translateX(0)' : 'translateX(100%)'}
                transition="all 0.3s ease-in-out"
            >
                <Box pos="absolute" top="4" right="4">
                    <AiOutlineClose
                        size="2rem"
                        onClick={() => setShowSidebar(false)}
                    />
                </Box>
                <Flex align="start" direction="column" gap="4" fontWeight="600">
                    {navOptions.map(option => (
                        <NavOption key={option.label} {...option} />
                    ))}
                    <JoinButton />
                </Flex>
            </Box>
        </>
    );
};

export default SideBar;
