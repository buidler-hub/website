import { Box, Button, Image, Text, Link as ChakraLink } from '@chakra-ui/react';
import type { NextComponentType } from 'next';
import Link from 'next/link';

const Hero: NextComponentType = () => {
    return (
        <Box textAlign="center" display="flex" flexDir="column" gap="10">
            <Text fontSize="48px" lineHeight="50px" color="white">
                a shelter for <br />
                products crafted <br />
                by our team
            </Text>

            <Link href="/projects">
                <Button
                    w="48"
                    bgColor="blue.600"
                    textColor="white"
                    h="44px"
                    rounded="lg"
                    fontSize="md"
                    _focus={{}}
                    _hover={{ bgColor: 'blue.500' }}
                    _active={{}}
                    mx="auto"
                >
                    our projects
                </Button>
            </Link>

            <Image
                src="/assets/blob1.svg"
                height="60"
                width="60"
                position="absolute"
                bottom="0"
                left="0"
                alt=""
            />

            <ChakraLink
                isExternal
                href="https://vercel.com?utm_source=buidlers-hub&utm_campaign=oss"
                position="absolute"
                bottom="5"
                left="42%"
            >
                <Image
                    src="/assets/powered-by-vercel.svg"
                    height="50"
                    border="1px solid #5E5E5E"
                    width="250"
                    alt="powered by vercel"
                    borderRadius="8px"
                    objectFit="contain"
                />
            </ChakraLink>

            <Image
                src="/assets/blob2.svg"
                height="60"
                width="60"
                position="absolute"
                bottom="0"
                right="0"
                alt=""
            />
        </Box>
    );
};

export default Hero;
