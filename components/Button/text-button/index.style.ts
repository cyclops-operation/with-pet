import styled, { css } from 'styled-components'

import { StyleRecord } from '~/common/type-utils'

import { TextButtonProps } from '.'

const sizeVariant: StyleRecord<TextButtonProps['size']> = {
  sm: css`
    ${({ theme }) => theme.fonts.text_sm}
  `,
  md: css`
    ${({ theme }) => theme.fonts.text_md}
  `,
  lg: css`
    ${({ theme }) => theme.fonts.text_lg}
  `,
  xl: css`
    ${({ theme }) => theme.fonts.text_xl}
  `
}

export const TextButtonWrapper = styled.button.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => defaultValidatorFn(prop)
})<TextButtonProps>`
  border: none;
  color: ${({ theme }) => theme.colors.zinc_700};
  background-color: inherit;

  ${({ size = 'sm' }) => sizeVariant[size]}

  :hover {
    color: ${({ theme }) => theme.colors.zinc_800};
  }

  :disabled {
    color: ${({ theme }) => theme.colors.zinc_300};
  }
`
