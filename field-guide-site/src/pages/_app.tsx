"use client";
import { AppProps } from 'next/app'
import '../styles/index.css'
import { useEffect } from 'react';



export default function MyApp({ Component, pageProps }: AppProps) {

useEffect(() => {
  navigator.serviceWorker
    .register('/react-py-sw.js')
    .then((registration) =>
      console.log(
        'Service Worker registration successful with scope: ',
        registration.scope
      )
    )
    .catch((err) => console.log('Service Worker registration failed: ', err))
}, [])
  return <Component className=" bg-gray-100" {...pageProps} />
}
