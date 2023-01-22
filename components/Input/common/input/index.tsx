import { forwardRef, InputHTMLAttributes, memo, ReactNode } from 'react'

import { InputIconStyled, InputStyled, InputWrapper } from './index.style'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  testId?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      onChange,
      disabled,
      autoComplete = 'off',
      testId = 'input',
      className = '',
      leftIcon = '',
      rightIcon = '',
      ...rest
    },
    ref
  ) => {
    return (
      <InputWrapper>
        {leftIcon && <InputIconStyled>{leftIcon}</InputIconStyled>}
        <InputStyled
          ref={ref}
          className={className}
          id={id}
          name={name}
          onChange={onChange}
          disabled={disabled}
          data-cy={testId}
          autoComplete={autoComplete}
          {...rest}
        />
        {rightIcon && <InputIconStyled>{rightIcon}</InputIconStyled>}
      </InputWrapper>
    )
  }
)

Input.displayName = 'InputField'

export default memo(Input)
