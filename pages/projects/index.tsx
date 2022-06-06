import { ProjectCard } from '../../components';
import Layout from '../../layouts/Main.layout';
import type { NextPage } from 'next';

const ProjectsPage: NextPage = () => {
    return (
        <>
            <Layout>
                <ProjectCard />
            </Layout>
        </>
    );
};

export default ProjectsPage;
