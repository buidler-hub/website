import Layout from '../components/Layout';
import Hero from '../components/Team/Hero';
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
