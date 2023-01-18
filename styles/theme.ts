import { Theme } from '@emotion/react'

import { figure, fonts } from './default'
import lightTheme from './light-theme'

const theme: Theme = {
  figure,
  ...lightTheme,
  fonts
}

export default theme
