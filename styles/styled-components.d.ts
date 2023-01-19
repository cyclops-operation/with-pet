import { ThemeType } from './types'

import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
