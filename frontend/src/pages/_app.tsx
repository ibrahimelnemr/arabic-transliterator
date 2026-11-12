import React from 'react';
import "../styles/globals.scss";
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {


  return <><Head><title>Arabize | Arabic Transliterator</title><link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.ico`} /></Head><Component {...pageProps} /></>;

}
