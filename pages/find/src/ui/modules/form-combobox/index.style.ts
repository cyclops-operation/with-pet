import styled from 'styled-components'

import Combobox from '~/components/combobox'

export const FormComboboxMenu = styled(Combobox.Menu)`
  position: absolute;
  top: ${({ theme }) => (theme.figure / 2) * 13}px;
  width: 100%;
  max-height: ${({ theme }) => theme.figure * 25}px;
  overflow-y: scroll;
`
