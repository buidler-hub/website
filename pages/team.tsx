import { Header } from '../components';
import Layout from '../components/Layout';
import Hero from '../components/Team/Hero';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

const Team: NextPage = () => {
    return (
        <Layout>
            <NextSeo title="Our Team" />
            <Header />
            <Hero />
        </Layout>
    );
};

export default Team;
