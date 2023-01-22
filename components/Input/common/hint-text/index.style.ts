import styled from 'styled-components'

import { HintTextProps } from '.'

export const HintTextWrapper = styled.p<HintTextProps>`
  ${({ theme }) => theme.fonts.text_sm}
  color: ${({ theme, isInvalid }) =>
    isInvalid ? theme.colors.red_500 : theme.colors.zinc_500};
  user-select: none;
  cursor: default;
`
