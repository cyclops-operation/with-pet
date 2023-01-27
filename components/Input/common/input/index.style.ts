import styled from 'styled-components'

// TODO 아래 스타일 추가 필요 (InputWrapper)
// input-group-invalid-focus:ring-red-50
// input-group-focus:ring-4
// input-group-focus:ring-sky-50

export const InputWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  gap: ${({ theme }) => `${theme.figure}px`};
  padding: 10px 14px;
  border: ${({ theme }) => `1px solid ${theme.colors.zinc_300}`};
  border-radius: ${({ theme }) => `${theme.figure}px`};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  &:has(input:invalid),
  &:has(input:invalid:focus) {
    border: ${({ theme }) => `1px solid ${theme.colors.red_300}`};
  }
  &:has(input:focus) {
    border: ${({ theme }) => `1px solid ${theme.colors.sky_300}`};
  }
`

export const InputStyled = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.zinc_900};
  outline: none;
`

export const InputIconStyled = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  user-select: none;
`
