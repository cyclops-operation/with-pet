import styled, { css } from 'styled-components'

import Icon from '~/components/icon'
import InputBox from '~/components/Input/input-box'

const triggerIconDisabled = css`
  color: ${({ theme }) => theme.colors.zinc_400};
  cursor: auto;
`

export const TriggerWrapper = styled(InputBox.Input)`
  border-color: ${({ theme }) => theme.colors.zinc_300};
`

export const TriggerIcon = styled(Icon)<{ disabled?: boolean }>`
  cursor: pointer;

  ${({ disabled }) => disabled && triggerIconDisabled}
`
