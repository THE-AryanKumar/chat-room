import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'

import '../styles/chat.css'
import '../styles/landingPage.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>FrostBite: College Website</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
