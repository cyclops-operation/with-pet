import { forwardRef, InputHTMLAttributes, ReactNode, useMemo } from 'react'

import { twMerge } from 'tailwind-merge'
import { classnames, padding } from 'tailwindcss-classnames'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  testId?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const defaultStyle =
  'inline-block rounded-lg border border-zinc-300 w-full h-full text-zinc-900 outline-none focus:border-sky-300 focus:ring-4 focus:ring-sky-50 focus:filter-none drop-shadow-default'

const leftIconStyles =
  'flex justify-center items-center w-[20px] h-[20px] absolute left-2.5 top-[50%] translate-y-[-50%] select-none z-10'

const rightIconStyles = twMerge(leftIconStyles, 'left-auto', 'right-2.5')

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      onChange,
      disabled,
      testId = 'input',
      className = '',
      leftIcon = '',
      rightIcon = '',
      ...rest
    },
    ref
  ) => {
    const paddingStyles = useMemo(() => {
      const fullIcons = Boolean(leftIcon) && Boolean(rightIcon)
      if (fullIcons) {
        return classnames(padding('py-2.5', 'px-10'))
      }
      if (leftIcon) {
        return classnames(padding('py-2.5', 'pl-10', 'pr-3.5'))
      }
      if (rightIcon) {
        return classnames(padding('py-2.5', 'pl-3.5', 'pr-10'))
      }
      return classnames(padding('py-2.5', 'px-3.5'))
    }, [leftIcon, rightIcon])

    return (
      <div className='relative'>
        {leftIcon && <i className={leftIconStyles}>{leftIcon}</i>}
        <input
          className={twMerge(defaultStyle, paddingStyles)}
          ref={ref}
          id={id}
          name={name}
          onChange={onChange}
          disabled={disabled}
          data-cy={testId}
          {...rest}
        />
        {rightIcon && <i className={rightIconStyles}>{rightIcon}</i>}
      </div>
    )
  }
)

Input.displayName = 'InputField'

export default Input
