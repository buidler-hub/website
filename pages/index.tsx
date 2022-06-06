import { Header } from '../components';
import Hero from '../components/Home/Hero';
import Layout from '../components/Layout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <Layout>
            <Header />
            <Hero />
        </Layout>
    );
};

export default Home;
