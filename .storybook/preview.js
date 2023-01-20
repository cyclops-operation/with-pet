import { ThemeProvider } from 'styled-components'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

import '../styles/globals.css'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  nextRouter: {
    Provider: RouterContext.Provider
  }
}
