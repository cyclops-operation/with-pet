import { HTMLAttributes, ReactElement, ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'

export interface HintTextProps extends HTMLAttributes<HTMLParagraphElement> {
  text?: ReactNode
  className?: string
}

const defaultStyles =
  'cursor-default select-none text-[14px] text-zinc-500 leading-[17px]'

const HintText = ({ text = '', className = '', ...rest }: HintTextProps) => {
  return typeof text === 'string' ? (
    <p className={twMerge(defaultStyles, className)} {...rest}>
      {text}
    </p>
  ) : (
    (text as ReactElement)
  )
}

export default HintText
