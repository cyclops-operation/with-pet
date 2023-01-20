import { ButtonHTMLAttributes } from 'react'

import { CommonColor, CommonSize, CommonWidth } from '~/common/types'

import { ButtonWrapper } from './index.style'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: CommonWidth
  color?: CommonColor
  size?: Exclude<CommonSize, 'xs'>
}

const Button = ({
  children,
  width = 'hug',
  color = 'primary',
  size = 'sm',
  ...rest
}: ButtonProps) => {
  return (
    <ButtonWrapper width={width} color={color} size={size} {...rest}>
      {children}
    </ButtonWrapper>
  )
}

export default Button
