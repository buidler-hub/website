import { ProjectCard } from '../components';
import projects from '../data/projects';
import Layout from '../layouts/Main.layout';
import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';

const ProjectsPage: NextPage = () => {
    return (
        <Layout>
            <Box
                minH="100vh"
                minW="full"
                display="flex"
                flexDir="row"
                gap="10"
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
            >
                {projects.map(project => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </Box>
        </Layout>
    );
};

export default ProjectsPage;
