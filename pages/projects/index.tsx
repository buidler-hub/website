import { ProjectCard } from '../../components';
import Layout from '../../layouts/Main.layout';
import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';

const ProjectsPage: NextPage = () => {
    return (
        <>
            <Layout>
                <Box
                    minH="100vh"
                    minW="full"
                    display="flex"
                    flexDir="row"
                    gap="6"
                    justifyContent="center"
                    alignItems="center"
                >
                    <ProjectCard
                        title="Thirdsnips"
                        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestias"
                        tag="#web3"
                        platform="web"
                        ghUrl="https://github.com/builder-hub/thirdsnips"
                        phUrl="hhafwmn"
                        logo="uwu"
                    />
                </Box>
            </Layout>
        </>
    );
};

export default ProjectsPage;
