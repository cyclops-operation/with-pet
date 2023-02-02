import type { AppProps } from 'next/app'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '~/styles/global'
import theme from '~/styles/theme'

import Layout from './src/ui/Layout'

import '../styles/globals.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  const isDevelopment = process.env.NODE_ENV !== 'production'

  return (
    <QueryClientProvider client={queryClient}>
      {isDevelopment ? <ReactQueryDevtools initialIsOpen={false} /> : null}
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
