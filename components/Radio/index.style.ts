import styled, { css } from 'styled-components'

import { StyleRecord } from '~/common/type-utils'
import theme from '~/styles/theme'

import { RadioProps } from '.'

const sizeVariant: StyleRecord<RadioProps['size']> = {
  xs: css`
    ${theme.fonts.text_sm}

    ::before {
      width: ${({ theme }) => theme.figure * 2}px;
      height: ${({ theme }) => theme.figure * 2}px;
    }

    ::after {
      left: ${({ theme }) => theme.figure}px;
      width: ${({ theme }) => (theme.figure / 4) * 3}px;
      height: ${({ theme }) => (theme.figure / 4) * 3}px;
    }
  `,
  sm: css`
    ${theme.fonts.text_sm}

    ::before {
      width: ${({ theme }) => (theme.figure / 2) * 5}px;
      height: ${({ theme }) => (theme.figure / 2) * 5}px;
    }

    ::after {
      left: ${({ theme }) => (theme.figure / 4) * 5}px;
      width: ${({ theme }) => theme.figure}px;
      height: ${({ theme }) => theme.figure}px;
    }
  `
}

const checkedStyle = css`
  ::before {
    border-color: ${({ theme }) => theme.colors.zinc_600};
  }

  ::after {
    content: '';
    position: absolute;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.zinc_600};
  }
`

export const RadioWrapper = styled.label.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => defaultValidatorFn(prop)
})<Partial<RadioProps>>`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.figure}px;
  color: ${({ theme }) => theme.colors.zinc_700};
  cursor: pointer;

  ::before {
    content: '';
    border: 1px solid ${({ theme }) => theme.colors.zinc_300};
    border-radius: 100%;
  }

  ::after {
    transform: translateX(-50%);
  }

  :active {
    ::before {
      box-shadow: ${({ theme }) => theme.focus_ring.md.zinc_100};
    }
  }

  ${({ size = 'xs' }) => sizeVariant[size]}
  ${({ checked }) => checked && checkedStyle}
`
