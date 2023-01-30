import styled from 'styled-components'

import { IconProps } from '.'

export const IconWrapper = styled.span.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => defaultValidatorFn(prop)
})<Partial<IconProps>>`
  font-size: ${({ size }) => size}px;
`
