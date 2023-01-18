import styled, { keyframes } from 'styled-components'

const buttonGroupFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const ButtonGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.figure * 2}px;
  animation: ${buttonGroupFadeIn} 1.5s ease-in-out;
`

export const ButtonGroupLabel = styled.p`
  color: ${({ theme }) => theme.colors.zinc_400};

  ${({ theme }) => theme.fonts.text_sm}
`
