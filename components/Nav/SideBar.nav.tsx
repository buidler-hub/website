import { Box, Text, Link as ChakraLink, Button } from '@chakra-ui/react';
import { NextComponentType } from 'next';
import { FaDiscord } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';

const SideBar: NextComponentType = () => {
    return (
        <>
            <Box
                w="48"
                bgColor="#ffffff66"
                minH="100vh"
                right="0"
                top="0"
                zIndex="10"
                position="absolute"
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                fontFamily="redHat"
                fontWeight="700"
                fontSize="lg"
                gap="4"
            >
                <Box
                    minH="100vh"
                    w="3"
                    bgColor="#ffffff66"
                    position="absolute"
                    left="0"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box
                        h="7"
                        w="7"
                        rounded="full"
                        bgColor="black"
                        position="absolute"
                        display="grid"
                        placeItems="center"
                        border="3px solid"
                        borderColor="white"
                        cursor="pointer"
                        textColor="white"
                    >
                        <IoIosArrowBack size="18" />
                    </Box>
                </Box>

                <Text>Home</Text>
                <Text>Our Projects</Text>
                <Text>GitHub</Text>
                <Text>Team</Text>

                <ChakraLink href="https://discord.gg/buidlershub" isExternal>
                    <Button
                        display="flex"
                        flexDir="row"
                        gap="3"
                        alignItems="center"
                        justifyContent="center"
                        rounded="full"
                        h="10"
                        px="5"
                        fontFamily="lexend"
                        fontWeight="600"
                        _focus={{}}
                        _active={{}}
                        bg="rgba(255, 255, 255, 0.5)"
                        _hover={{
                            bg: 'rgba(255, 255, 255, 0.7)',
                        }}
                        backdropFilter="blur(10px)"
                    >
                        <FaDiscord size="22" />
                        Join Discord
                    </Button>
                </ChakraLink>
            </Box>
        </>
    );
};

export default SideBar;
