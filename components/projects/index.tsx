import projects from '../../data/projects';
import Project from './Project';
import { Flex, Text, VStack } from '@chakra-ui/react';
import type { NextComponentType } from 'next';

const Projects: NextComponentType = () => {
    return (
        <Flex flexDir="column">
            <Text as="h1" color="white" fontSize="7xl" mb="10" align="center">
                our projects
            </Text>
            <VStack w="100%" align="flex-start" px="10">
                {projects.map(project => (
                    <Project key={project.name} project={project} />
                ))}
            </VStack>
        </Flex>
    );
};

export default Projects;
