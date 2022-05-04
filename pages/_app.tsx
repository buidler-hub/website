import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider>
            <NextNProgress color="#000" options={{ showSpinnner: false }} />
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default MyApp;
