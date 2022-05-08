import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
    const links = [
        { name: 'home', route: '/' },
        { name: 'projects', route: '/projects' },
        { name: 'team', route: '/team' },
    ];

    const router = useRouter();

    return (
        <Flex
            w="100%"
            align="center"
            justify="space-between"
            px={['10', '5']}
            py="5"
            color="white"
            fontWeight="normal"
            fontFamily="Monument Extended"
        >
            <Text as="p">buidler&apos;s hub.</Text>
            <Flex gap="6" display={{ base: 'none', lg: 'flex' }}>
                {links.map(link => (
                    <Link key={link.route} href={link.route} passHref>
                        <Text
                            color={
                                router.pathname === link.route
                                    ? '#9E00FF'
                                    : 'white'
                            }
                            cursor="pointer"
                            as="a"
                        >
                            {link.name}
                        </Text>
                    </Link>
                ))}
            </Flex>
            <Text as="p">github.</Text>
        </Flex>
    );
};
export default Header;
