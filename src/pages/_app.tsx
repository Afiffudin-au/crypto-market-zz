import '../styles/globals.css'
import { AppProps } from 'next/app'
import React from 'react'
function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
