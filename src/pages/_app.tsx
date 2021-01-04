import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from 'styles/global';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta name="description" content="Simple next js boilerplate" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
