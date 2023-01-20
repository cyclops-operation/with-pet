import styled from 'styled-components'

export const MenuWrapper = styled.ul`
  padding: ${({ theme }) => theme.figure}px 0;
  border-radius: 0 ${({ theme }) => theme.figure}px;
  box-shadow: ${({ theme }) => theme.shadow.sm};
  background-color: ${({ theme }) => theme.colors.white};
  overflow: scroll;
`
