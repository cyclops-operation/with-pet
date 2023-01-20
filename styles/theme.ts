import { DefaultTheme } from 'styled-components'

import { figure, fonts, shadow } from './default'
import { focusRing } from './focus-ring'
import lightTheme from './light-theme'

const theme: DefaultTheme = {
  figure,
  fonts,
  shadow,
  ...lightTheme,
  focus_ring: focusRing(lightTheme.colors)
}

export default theme
