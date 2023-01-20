import styled, { keyframes } from 'styled-components'

const headerTextSlide = keyframes`
    0% { 
        transform: translateY(10vh);
        opacity: 0
    }

    50% { 
        opacity: 1
    }

    95% { 
        transform: translateY(-0.1vh)
    }

    100% { 
        transform: translateY(0px)
    }
`

export const HeaderTextWrapper = styled.p`
  color: ${({ theme }) => theme.colors.zinc_700};
  white-space: pre-line;
  font-weight: bold;

  ${({ theme }) => theme.fonts.text_2xl}

  animation: ${headerTextSlide} 1.5s ease-in-out;
`
