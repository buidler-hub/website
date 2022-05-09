import Header from '../components/Header';
import Projects from '../components/projects';
import { VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';

const ProjectsPage: NextPage = () => {
    return (
        <VStack
            w="100vw"
            minH="100vh"
            bg="black"
            fontFamily="Monument Extended"
        >
            <Header />
            <Projects />
        </VStack>
    );
};

export default ProjectsPage;
