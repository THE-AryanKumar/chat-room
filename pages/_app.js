import '../styles/globals.css'
import Head from 'next/head'

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
