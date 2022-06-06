import Hero from '../components/Team/Hero';
import Layout from '../layouts/Main.layout';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

const Team: NextPage = () => {
    return (
        <Layout>
            <NextSeo title="Our Team" />
            <Hero />
        </Layout>
    );
};

export default Team;
