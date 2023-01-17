import {
  forwardRef,
  InputHTMLAttributes,
  memo,
  ReactNode,
  useMemo
} from 'react'

import { twMerge } from 'tailwind-merge'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  testId?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const inputWrapperStyle = `
  relative
  flex
  gap-2
  overflow-hidden
  rounded-lg
  border
  border-zinc-300
  px-3.5
  py-2.5
  shadow-sm
  input-group-invalid:border-red-300
  input-group-invalid-focus:border-red-300
  input-group-invalid-focus:ring-red-50
  input-group-focus:border-sky-300
  input-group-focus:ring-4
  input-group-focus:ring-sky-50
`

const inputStyle = 'inline-block w-full h-full text-zinc-900 outline-none'

const iconStyles =
  'flex justify-center items-center w-[20px] h-[20px] select-none'

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
      <div className={twMerge(inputWrapperStyle, className)}>
        {leftIcon && <i className={iconStyles}>{leftIcon}</i>}
        <input
          className={inputStyle}
          ref={ref}
          id={id}
          name={name}
          onChange={onChange}
          disabled={disabled}
          data-cy={testId}
          autoComplete={autoComplete}
          {...rest}
        />
        {rightIcon && <i className={iconStyles}>{rightIcon}</i>}
      </div>
    )
  }
)

Input.displayName = 'InputField'

export default memo(Input)
