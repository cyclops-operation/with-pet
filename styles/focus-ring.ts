import lightTheme from './light-theme'
import { FocusRing } from './types'
import { getFocusRings } from './utils'

export const focusRingSize = {
  /* 일단 기본 사이즈를 md으로 지정하고 추후 포커스 링 사이즈가 추가되면 이를 확장하기 위해 객체 형식으로 작성 */
  md: '0px 0px 0px 4px'
}

export const focusRing = (colorTheme: typeof lightTheme.colors): FocusRing => {
  return {
    md: getFocusRings(focusRingSize.md, colorTheme)
  }
}
