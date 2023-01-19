import { CSSObject } from 'styled-components'

import { fonts } from './default'
import lightTheme from './light-theme'

export interface ThemeType {
  figure: number
  fonts: { [token in keyof typeof fonts]: CSSObject }
  colors: { [token in keyof typeof lightTheme.colors]: string }
  shadow: { [token in keyof typeof lightTheme.shadow]: string }
}
