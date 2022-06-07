import { ProjectProps } from '../../@types/projectprops.types';
import { LinkButton, TagOne, TagTwo } from '../Misc/ProjectCard.componnets';
import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextComponentType, NextPageContext } from 'next';

const ProjectCard: NextComponentType<NextPageContext, {}, ProjectProps> = ({
    title,
    desc,
    tag,
    platform,
    ghUrl,
    phUrl,
}) => {
    return (
        <Box
            display="flex"
            flexDir="column"
            rounded="lg"
            h="22rem"
            w="72"
            bgColor="white"
            fontFamily="lexend"
            overflow="hidden"
        >
            <Box
                h="32"
                w="full"
                roundedTop="lg"
                bgGradient="linear(90deg, #DA22FF 0%, #9733EE 100%)"
            >
                <TagOne tag={tag} />
            </Box>
            <Flex
                mt="5.5rem"
                position="absolute"
                justifyContent="space-between"
                w="72"
                alignItems="center"
            >
                <Box
                    h="20"
                    w="20"
                    rounded="full"
                    border="3px solid"
                    borderColor="white"
                    bgGradient="linear(90deg, #00F5A0 0%, #00D9F5 100%)"
                    ml="6"
                ></Box>

                <TagTwo platform={platform} />
            </Flex>

            <Box>
                <Text ml="6" fontSize="xl" mt="12" fontWeight="500">
                    {title}
                </Text>

                <Text ml="6" fontSize="md" mt="2" fontWeight="400">
                    {desc}
                </Text>
                <Flex
                    w="full"
                    justifyContent="space-between"
                    px="6"
                    py="2"
                    alignItems="center"
                >
                    <LinkButton text="GitHub" url={ghUrl} />

                    <LinkButton text="Upvote" url={phUrl} />
                </Flex>
            </Box>
        </Box>
    );
};

export default ProjectCard;
