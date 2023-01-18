import styled from 'styled-components'

export const FindFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.figure * 2}px;
`

export const FormBox = styled.div<{ $gap?: number }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme, $gap }) => $gap ?? (theme.figure / 4) * 3}px;
`

export const FormLabel = styled.label`
  color: ${({ theme }) => theme.colors.zinc_700};

  ${({ theme }) => theme.fonts.text_sm};
`

export const DateRangeWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.figure}px;
  width: 100%;
`

export const Tilde = styled.p`
  padding-top: ${({ theme }) => (theme.figure / 4) * 3}px;
  color: ${({ theme }) => theme.colors.zinc_500};

  ${({ theme }) => theme.fonts.text_sm}
`

export const RadioList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.figure * 3}px;
`
