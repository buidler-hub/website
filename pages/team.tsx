import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/team/Hero';
import { VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Team: NextPage = () => {
    return (
        <VStack w="100vw" minH="100vh" fontFamily="syncopate" bg="black">
            <Header />
            <Hero />
            <Footer />
        </VStack>
    );
};

export default Team;
