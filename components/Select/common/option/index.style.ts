import styled, { css } from 'styled-components'

import { OptionProps } from '.'

const selectedStyle = css`
  background-color: ${({ theme }) => theme.colors.zinc_50};
`

export const OptionWrapper = styled.li.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => defaultValidatorFn(prop)
})<Partial<OptionProps>>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.figure * 2}px;
  padding: ${({ theme }) => (theme.figure / 4) * 5}px
    ${({ theme }) => (theme.figure / 2) * 3}px;
  color: ${({ theme }) => theme.colors.zinc_900};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  ${({ theme }) => theme.fonts.text_sm}

  :hover {
    background-color: ${({ theme }) => theme.colors.zinc_50};
  }

  ${({ isSelected }) => isSelected && selectedStyle}
`
