import { ButtonHTMLAttributes } from 'react'

import { CommonSize } from '~/common/types'

import { TextButtonWrapper } from './index.style'

export interface TextButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Exclude<CommonSize, 'xs'>
}

const TextButton = ({ children, ...rest }: TextButtonProps) => {
  return <TextButtonWrapper {...rest}>{children}</TextButtonWrapper>
}

export default TextButton
