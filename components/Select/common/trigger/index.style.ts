import styled from 'styled-components'

import Button from '~/components/Button'

export const TriggerWrapper = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => (theme.figure / 4) * 23}px;
  padding: ${({ theme }) => (theme.figure / 4) * 5}px
    ${({ theme }) => (theme.figure / 4) * 7}px;

  :focus:enabled {
    box-shadow: ${({ theme }) => theme.focus_ring.md.zinc_100};
  }
`

export const TriggerValue = styled.p`
  ${({ theme }) => theme.fonts.text_md};
`
