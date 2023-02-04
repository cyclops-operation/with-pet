import { HTMLAttributes } from 'react'

import { IconWrapper } from './index.style'

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  size: number
  iconName: string
}

const Icon = ({ iconName, className, ...rest }: IconProps) => {
  return (
    <IconWrapper className={`material-symbols-outlined ${className}`} {...rest}>
      {iconName}
    </IconWrapper>
  )
}

export default Icon
