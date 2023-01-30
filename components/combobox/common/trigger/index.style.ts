import styled from 'styled-components'

import InputBox from '~/components/Input/input-box'

export const TriggerWrapper = styled(InputBox.Input)`
  border-color: ${({ theme }) => theme.colors.zinc_300};
`
