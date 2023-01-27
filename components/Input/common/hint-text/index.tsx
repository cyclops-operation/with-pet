import { HTMLAttributes, ReactElement, ReactNode } from 'react'

import { HintTextWrapper } from './index.style'

export interface HintTextProps extends HTMLAttributes<HTMLParagraphElement> {
  text?: ReactNode
  className?: string
  isInvalid?: boolean
}

const HintText = ({
  text = '',
  className = '',
  isInvalid = false,
  ...rest
}: HintTextProps) => {
  return typeof text === 'string' ? (
    <HintTextWrapper className={className} isInvalid={isInvalid} {...rest}>
      {text}
    </HintTextWrapper>
  ) : (
    (text as ReactElement)
  )
}

export default HintText
