import theme from '../styles/theme.chakra';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/lexend';
import '@fontsource/red-hat-display';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Script from 'next/script';
import NextNProgress from 'nextjs-progressbar';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            {process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL &&
                process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
                    <Script
                        src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
                        data-website-id={
                            process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID
                        }
                        strategy="lazyOnload"
                    />
                )}
            <NextNProgress options={{ showSpinner: false }} />
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
};

export default MyApp;
