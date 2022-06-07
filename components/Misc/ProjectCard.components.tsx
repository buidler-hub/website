import { Box, Button, Link } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';

const TagOne = ({ tag }: { tag: string }) => {
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
            {tag}
        </Box>
    );
};

const TagTwo = ({ platform }: { platform: string }) => {
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
            {platform}
        </Box>
    );
};

const LinkButton = ({ url, text }: { url: string; text: string }) => {
    return (
        <Link href={url} isExternal>
            <Button
                w="28"
                h="9"
                bgColor="#E5E7EBB2"
                border="2px solid"
                borderColor="#D1D5DBB2"
                _hover={{ bgColor: '#D1D5DBB2' }}
                _focus={{}}
                _active={{}}
                transition="all 0.2s"
            >
                {text}
            </Button>
        </Link>
    );
};

interface ILogoProps {
    logo: string;
    title: string;
}

const Logo: FC<ILogoProps> = ({ logo, title }) => {
    return (
        <Box
            h="20"
            w="20"
            rounded="full"
            border="3px solid"
            borderColor="white"
            ml="3"
            pos="relative"
        >
            <Image
                style={{
                    borderRadius: '50%',
                }}
                src={logo}
                alt={title}
                layout="fill"
            />
        </Box>
    );
};

export { TagOne, TagTwo, LinkButton, Logo };
