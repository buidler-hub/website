import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/assets/logo.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
