import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.figure * 3}px;
  padding-top: 20vh;
`
