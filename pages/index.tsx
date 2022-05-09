import Header from '../components/Header';
import Hero from '../components/Home/Hero';
import { VStack } from '@chakra-ui/react';
import { FC } from 'react';

const Home: FC = () => {
    return (
        <VStack
            minW="100vw"
            minH="100vh"
            overflowX="hidden"
            gap="28"
            bg="#010101"
            fontFamily="Monument Extended"
            fontWeight="extrabold"
        >
            <Header />
            <Hero />
        </VStack>
    );
};

export default Home;
