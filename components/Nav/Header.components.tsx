import { Button, Text, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';
import { FaDiscord } from 'react-icons/fa';

const JoinButton = () => {
    return (
        <ChakraLink href="https://discord.gg/buidlershub" isExternal>
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
    );
};

interface IHeaderOption {
    isExternal?: boolean;
    href: string;
    label: string;
}

const HeaderOption: FC<IHeaderOption> = ({ isExternal, href, label }) => {
    return (
        <>
            {isExternal ? (
                <ChakraLink cursor="pointer" isExternal href={href}>
                    <Text
                        _hover={{
                            textDecoration: 'underline',
                        }}
                    >
                        {label}
                    </Text>
                </ChakraLink>
            ) : (
                <Link href={href}>
                    <Text
                        cursor="pointer"
                        _hover={{
                            textDecoration: 'underline',
                        }}
                    >
                        {label}
                    </Text>
                </Link>
            )}
        </>
    );
};

export { JoinButton, HeaderOption };
