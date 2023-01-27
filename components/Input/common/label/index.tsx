import { forwardRef, LabelHTMLAttributes, ReactNode } from 'react'

import { LabelWrapper } from './index.style'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  testId?: string
  text?: ReactNode
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ htmlFor, text, testId = 'label', className = '', ...rest }, ref) => {
    return (
      <LabelWrapper
        className={className}
        ref={ref}
        htmlFor={htmlFor}
        data-cy={testId}
        {...rest}
      >
        {text}
      </LabelWrapper>
    )
  }
)

Label.displayName = 'InputLabel'

export default Label
