import team from '../../data/team';
import Member from './Member';
import { Flex, Text, VStack } from '@chakra-ui/react';
import type { NextComponentType } from 'next';

const Hero: NextComponentType = () => {
    return (
        <VStack pb="10">
            <Text as="h1" color="white" fontSize="7xl" mb="10" align="center">
                Meet the team
            </Text>
            <Flex gap="10" mt="10" flexDir={{ base: 'column', lg: 'row' }}>
                {team.map(member => (
                    <Member key={member.name} member={member} />
                ))}
            </Flex>
        </VStack>
    );
};

export default Hero;
