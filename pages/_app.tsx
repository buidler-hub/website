import theme from '../styles/theme.chakra';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/lexend/600.css';
import '@fontsource/lexend/700.css';
import '@fontsource/red-hat-display/500.css';
import '@fontsource/red-hat-display/600.css';
import '@fontsource/red-hat-display/700.css';
import '@fontsource/spartan/900.css';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <NextSeo
                canonical=""
                description=""
                openGraph={{
                    description: '',
                    images: [],
                    title: '',
                    url: '',
                }}
                title=""
                twitter={{
                    cardType: 'summary_large_image',
                    handle: '@buidlershub',
                    site: '@buidlershub',
                }}
            />
            <NextNProgress options={{ showSpinner: false }} />
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
};

export default MyApp;
