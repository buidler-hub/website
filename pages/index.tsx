import Header from '../components/Header';
import { VStack } from '@chakra-ui/react';
import { FC } from 'react';

const Home: FC = () => {
    return (
        <VStack w="100vw" h="100vh" bg="#010101">
            <Header />
        </VStack>
    );
};

export default Home;
