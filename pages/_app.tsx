import { Providers } from '@/providers';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS - Template</title>
        <meta name="description" content="A comprehensive Next.js application template with modern architecture and best practices." />
        <meta name="keywords" content="nextjs,template,react,typescript,styled-components,prisma,nextauth,zustand,axios,eslint,prettier,t3ng221" />
        <meta name="author" content="t3ng221" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="white" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
      </Head>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  );
}
