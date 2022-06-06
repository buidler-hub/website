import { Header } from '../components';
import Hero from '../components/Home/Hero';
import Layout from '../components/Layout';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Builder's Hub</title>
            </Head>
            <Header />
            <Hero />
        </Layout>
    );
};

export default Home;
