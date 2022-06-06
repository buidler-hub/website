import Hero from '../components/Home/Hero';
import Layout from '../layouts/Main.layout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <Layout>
            <Hero />
        </Layout>
    );
};

export default Home;
