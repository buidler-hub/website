import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/syncopate';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default MyApp;
