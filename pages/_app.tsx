import theme from '../styles/theme.chakra';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/lexend/400.css';
import '@fontsource/lexend/500.css';
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
                canonical="https://buidlershub.xyz/"
                description="This is a hub for amazing products crafted by our team!"
                openGraph={{
                    description:
                        'This is a hub for amazing products crafted by our team!',
                    images: [
                        {
                            height: 640,
                            url: '/assets/banner.png',
                            alt: "Buidler's Hub",
                            type: 'image/png',
                            width: 1280,
                        },
                    ],
                    title: "Buidler's Hub",
                    url: 'https://buidlershub.xyz/',
                }}
                title="Buidler's Hub"
                twitter={{
                    cardType: 'summary_large_image',
                    handle: '@buidlershub',
                    site: '@buidlershub',
                }}
            />
            <ChakraProvider theme={theme}>
                <NextNProgress
                    options={{ showSpinner: false }}
                    color="#805AD5"
                />
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
};

export default MyApp;
