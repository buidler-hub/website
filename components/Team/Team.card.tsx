import { Socials } from './Team.components';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';

interface ITeamCardProps {
    name: string;
    image: string;
    twitter: string;
    github: string;
    website: string;
}

const TeamCard: FC<ITeamCardProps> = ({
    name,
    image,
    twitter,
    github,
    website,
}) => {
    return (
        <Link isExternal href={website} _hover={{ textDecor: 'none' }}>
            <Flex
                flexDir="column"
                align="center"
                bg="rgba(255, 255, 255, 0.5)"
                backdropFilter="blur(10px)"
                p="10"
                rounded="lg"
            >
                <Box width="200px" height="200px" pos="relative" rounded="lg">
                    <Image
                        objectFit="cover"
                        style={{ borderRadius: '6px' }}
                        alt={name}
                        src={image}
                        layout="fill"
                    />
                </Box>
                <Text
                    as="h3"
                    fontSize="2xl"
                    fontWeight="bold"
                    my="2"
                    align="center"
                >
                    {name}
                </Text>
                <Socials twitter={twitter} github={github} website={website} />
            </Flex>
        </Link>
    );
};
export default TeamCard;
