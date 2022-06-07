import { Box, Button, Text } from '@chakra-ui/react';
import type { NextComponentType, NextPageContext } from 'next';

interface Props {}

const ProjectCard: NextComponentType<NextPageContext, {}, Props> = () => {
    return (
        <Box
            display="flex"
            flexDir="column"
            rounded="lg"
            h="22rem"
            w="72"
            bgColor="white"
            m="20"
            fontFamily="argentum"
        >
            <Box
                h="32"
                w="full"
                roundedTop="lg"
                bgGradient="linear(90deg, #DA22FF 0%, #9733EE 100%)"
            >
                <Box
                    w="28"
                    h="8"
                    rounded="lg"
                    bgColor="#F2F4F766"
                    m="3"
                    cursor="pointer"
                    border="2px solid"
                    borderColor="#E8EAED66"
                ></Box>
            </Box>

            <Box
                h="20"
                w="20"
                rounded="full"
                border="3px solid"
                borderColor="white"
                bgGradient="linear(90deg, #00F5A0 0%, #00D9F5 100%)"
                position="absolute"
                ml="6"
                mt="24"
            ></Box>

            <Text ml="6" fontSize="xl" mt="12" fontWeight="500">
                Title
            </Text>

            <Text ml="6" fontSize="md" mt="2" fontWeight="400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias
            </Text>

            <Button
                w="32"
                h="9"
                ml="6"
                my="2"
                bgColor="#E5E7EBB2"
                border="2px solid"
                borderColor="#D1D5DBB2"
                _hover={{ bgColor: '#D1D5DBB2' }}
                _focus={{}}
                _active={{}}
                transition="all 0.2s"
            >
                GitHub
            </Button>
        </Box>
    );
};

export default ProjectCard;
