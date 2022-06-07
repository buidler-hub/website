import { IProjectProps } from '../../@types/projectProps.types';
import {
    LinkButton,
    Logo,
    TagOne,
    TagTwo,
} from '../Misc/ProjectCard.components';
import { Box, Flex, Text } from '@chakra-ui/react';
import type { NextComponentType, NextPageContext } from 'next';

const ProjectCard: NextComponentType<NextPageContext, {}, IProjectProps> = ({
    title,
    description,
    logo,
    tag,
    platform,
    GitHub,
    ProductHunt,
}) => {
    return (
        <Box
            display="flex"
            flexDir="column"
            rounded="lg"
            h="24rem"
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
                <Logo logo={logo} title={title} />
                <TagTwo platform={platform} />
            </Flex>

            <Box>
                <Text ml="6" fontSize="xl" mt="12" fontWeight="500">
                    {title}
                </Text>

                <Text m="6" fontSize="md" my="2" fontWeight="400">
                    {description}
                </Text>

                <Flex
                    w="full"
                    justifyContent="space-between"
                    px="6"
                    py="2"
                    alignItems="center"
                >
                    <LinkButton text="GitHub" url={GitHub} />
                    <LinkButton text="Upvote" url={ProductHunt} />
                </Flex>
            </Box>
        </Box>
    );
};

export default ProjectCard;
