import team from '../../data/team';
import TeamCard from './Team.card';
import { Flex, Text, VStack } from '@chakra-ui/react';
import type { NextComponentType } from 'next';

const Hero: NextComponentType = () => {
    return (
        <VStack p="10">
            <Text
                as="h1"
                fontFamily="spartan"
                fontSize="40px"
                fontWeight="extrabold"
                my="10"
                align="center"
            >
                Our Team
            </Text>
            <Flex gap="10" mt="10" flexDir={{ base: 'column', lg: 'row' }}>
                {team.map(member => (
                    <TeamCard key={member.name} {...member} />
                ))}
            </Flex>
        </VStack>
    );
};

export default Hero;
