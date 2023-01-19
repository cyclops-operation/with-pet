import { DefaultTheme } from 'styled-components'

import { figure, fonts } from './default'
import lightTheme from './light-theme'

const theme: DefaultTheme = {
  figure,
  ...lightTheme,
  fonts
}

export default theme
