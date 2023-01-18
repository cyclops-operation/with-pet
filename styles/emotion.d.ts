import { ThemeType } from './types'

import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
