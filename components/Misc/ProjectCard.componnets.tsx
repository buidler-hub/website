import { Box, Button } from '@chakra-ui/react';
import type { NextComponentType } from 'next';

const TagOne: NextComponentType = () => {
    return (
        <Box
            w="28"
            h="8"
            rounded="lg"
            bgColor="#F2F4F766"
            m="3"
            cursor="pointer"
            border="2px solid"
            borderColor="#E8EAED66"
            display="grid"
            placeItems="center"
            textColor="white"
            fontWeight="400"
        >
            #web3
        </Box>
    );
};

const TagTwo: NextComponentType = () => {
    return (
        <Box
            h="8"
            w="20"
            bgColor="green.100"
            roundedTopLeft="full"
            roundedBottomLeft="full"
            mt="10"
            display="grid"
            placeItems="center"
            fontWeight="500"
            border="2px solid"
            borderColor="green.200"
            cursor="pointer"
        >
            web
        </Box>
    );
};

const GithubButton: NextComponentType = () => {
    return (
        <Button
            w="32"
            h="9"
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
    );
};

export { TagOne, TagTwo, GithubButton };
