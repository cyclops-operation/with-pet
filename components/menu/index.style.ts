import styled from 'styled-components'

export const MenuWrapper = styled.ul`
  padding: ${({ theme }) => theme.figure}px 0;
  border-radius: ${({ theme }) => theme.figure}px;
  box-shadow: ${({ theme }) => theme.shadow.lg};
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  z-index: 1000;
`
