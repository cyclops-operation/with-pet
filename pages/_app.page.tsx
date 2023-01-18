import type { AppProps } from 'next/app'
import { Global, ThemeProvider } from '@emotion/react'

import { global } from '~/styles/global'
import theme from '~/styles/theme'

import Layout from './src/ui/Layout'

import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={global} />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
