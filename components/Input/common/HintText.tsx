import { HTMLAttributes, ReactElement, ReactNode, useMemo } from 'react'

import { twMerge } from 'tailwind-merge'
import { classnames, textColor } from 'tailwindcss-classnames'

export interface HintTextProps extends HTMLAttributes<HTMLParagraphElement> {
  text?: ReactNode
  className?: string
  isInvalid?: boolean
}

const defaultStyles =
  'cursor-default select-none text-[14px] text-zinc-500 leading-[17px]'

const HintText = ({
  text = '',
  className = '',
  isInvalid = false,
  ...rest
}: HintTextProps) => {
  const validStyles = useMemo(() => {
    if (isInvalid) {
      return twMerge(defaultStyles, classnames(textColor('text-red-500')))
    }
    return ''
  }, [isInvalid])

  return typeof text === 'string' ? (
    <p className={twMerge(defaultStyles, validStyles, className)} {...rest}>
      {text}
    </p>
  ) : (
    (text as ReactElement)
  )
}

export default HintText
