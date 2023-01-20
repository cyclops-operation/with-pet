import styled, { css } from 'styled-components'

import { StyleRecord } from '~/common/type-utils'

import { ButtonProps } from '.'

const widthVariant: StyleRecord<ButtonProps['width']> = {
  hug: css`
    width: fit-content;
  `,
  fill: css`
    width: 100%;
  `
}

const sizeVariant = {
  sm: css`
    padding: ${({ theme }) => theme.figure}px
      ${({ theme }) => (theme.figure / 4) * 7}px;

    ${({ theme }) => theme.fonts.text_sm}
  `,
  md: css`
    padding: ${({ theme }) => (theme.figure / 4) * 5}px
      ${({ theme }) => theme.figure * 2}px;

    ${({ theme }) => theme.fonts.text_sm}
  `,
  lg: css`
    padding: ${({ theme }) => (theme.figure / 4) * 5}px
      ${({ theme }) => (theme.figure / 4) * 9}px;

    ${({ theme }) => theme.fonts.text_md}
  `,
  xl: css`
    padding: ${({ theme }) => (theme.figure / 2) * 3}px
      ${({ theme }) => (theme.figure / 2) * 5}px;

    ${({ theme }) => theme.fonts.text_md}
  `
}

const colorVariant = {
  primary: css`
    border: 1px solid ${({ theme }) => theme.colors.zinc_900};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.zinc_900};

    :hover:enabled {
      border-color: ${({ theme }) => theme.colors.zinc_800};
      background-color: ${({ theme }) => theme.colors.zinc_800};
    }

    :active:enabled {
      border-color: ${({ theme }) => theme.colors.zinc_600};
      background-color: ${({ theme }) => theme.colors.zinc_600};
    }

    :disabled {
      border-color: ${({ theme }) => theme.colors.zinc_200};
      background-color: ${({ theme }) => theme.colors.zinc_200};
    }
  `,
  secondary: css`
    border: 1px solid ${({ theme }) => theme.colors.zinc_300};
    color: ${({ theme }) => theme.colors.zinc_800};
    background-color: ${({ theme }) => theme.colors.white};

    :hover:enabled {
      background-color: ${({ theme }) => theme.colors.zinc_50};
    }

    :disabled {
      border-color: ${({ theme }) => theme.colors.zinc_200};
      color: ${({ theme }) => theme.colors.zinc_300};
      background-color: ${({ theme }) => theme.colors.white};
    }
  `
}

export const ButtonWrapper = styled.button.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => defaultValidatorFn(prop)
})<ButtonProps>`
  border-radius: ${({ theme }) => theme.figure}px;
  user-select: none;

  :active:enabled {
    box-shadow: ${({ theme }) => theme.focus_ring.md.zinc_100};
  }

  ${({ width = 'hug' }) => widthVariant[width]}
  ${({ size = 'sm' }) => sizeVariant[size]}
  ${({ color = 'primary' }) => colorVariant[color]}
`
