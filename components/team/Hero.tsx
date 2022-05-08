import Member from './Member';
import { Flex, Text, VStack } from '@chakra-ui/react';
import type { NextComponentType } from 'next';

const Hero: NextComponentType = () => {
    const members = [
        {
            name: 'Anurag',
            image: '/team/Anurag.png',
            github: 'https://github.com/kr-anurag',
            twitter: 'https://twitter.com/imanuraglol',
            website: 'https://anurag.tech',
        },
        {
            name: 'Atharva Deosthele',
            image: '/team/Atharva.png',
            github: 'https://github.com/atharvadeosthale',
            twitter: 'https://twitter.com/athudeosthale',
            website: 'https://blog.atharvadeosthale.com/',
        },
        {
            name: 'Avneesh Agarwal',
            image: '/team/Avneesh.png',
            github: 'https://github.com/avneesh0612',
            twitter: 'https://twitter.com/avneesh0612',
            website: 'https://avneesh.tech',
        },
        {
            name: 'Kira',
            image: '/team/Kira.png',
            github: 'https://github.com/Kira272921/',
            twitter: 'https://twitter.com/kira_272921',
            website: 'https://www.kiradev.co/',
        },
    ];

    return (
        <VStack pb="10">
            <Text as="h1" color="white" fontSize="7xl" mb="10" align="center">
                Meet the team
            </Text>
            <Flex gap="10" mt="10" flexDir={{ base: 'column', lg: 'row' }}>
                {members.map(member => (
                    <Member key={member.name} member={member} />
                ))}
            </Flex>
        </VStack>
    );
};

export default Hero;
