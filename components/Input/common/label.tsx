import { forwardRef, LabelHTMLAttributes, ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  testId?: string
  text?: ReactNode
}

const defaultStyles = 'cursor-pointer select-none'

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ htmlFor, text, testId = 'label', className = '', ...rest }, ref) => {
    return (
      <label
        className={twMerge(defaultStyles, className)}
        ref={ref}
        htmlFor={htmlFor}
        data-cy={testId}
        {...rest}
      >
        {text}
      </label>
    )
  }
)

Label.displayName = 'InputLabel'

export default Label