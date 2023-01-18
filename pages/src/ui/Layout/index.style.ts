import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
`

export const ContentWrapper = styled.main`
  padding: ${({ theme }) => theme.figure * 3}px;
  width: ${({ theme }) => (theme.figure / 2) * 107}px;
`
