import styled from 'styled-components'

export const ResultAccordionWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`

export const ResultAccordionItem = styled.li`
  display: flex;
  padding: 6px 0;
  cursor: default;
  &:not(:first-of-type) {
    border-top: ${({ theme }) => `1px solid ${theme.colors.zinc_100}`};
  }
`

export const ResultAccordionTitle = styled.strong`
  display: inline-block;
  min-width: ${({ theme }) => `${theme.figure * 10}px`};
  ${({ theme }) => theme.fonts.text_sm}
  color: ${({ theme }) => theme.colors.zinc_500};
`

export const ResultAccordionDesc = styled.p`
  display: inline-block;
  ${({ theme }) => theme.fonts.text_sm};
  color: ${({ theme }) => theme.colors.zinc_700};
`
