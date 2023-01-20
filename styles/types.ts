import { CSSObject } from 'styled-components'

import { fonts, shadow } from './default'
import { focusRingSize } from './focus-ring'
import lightTheme from './light-theme'

export type ThemeToken = {
  fonts: keyof typeof fonts
  shadow: keyof typeof shadow
  colors: keyof typeof lightTheme.colors
}

export type Fonts = { [token in ThemeToken['fonts']]: CSSObject }
export type Colors = { [token in ThemeToken['colors']]: string }
export type Shadow = { [token in ThemeToken['shadow']]: string }
export type FocusRing = {
  [key in keyof typeof focusRingSize]: Partial<{
    [token in ThemeToken['colors']]: string
  }>
}

export interface ThemeType {
  figure: number
  fonts: Fonts
  colors: Colors
  shadow: Shadow
  focus_ring: FocusRing
}
