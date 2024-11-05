import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../styles/globals.scss";
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    // typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, []);


  return <Component {...pageProps} />;

}