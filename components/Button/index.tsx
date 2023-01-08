import { ButtonHTMLAttributes } from 'react'

import { twMerge } from 'tailwind-merge'
import {
  backgrounds,
  borders,
  classnames,
  fontSize,
  padding,
  textColor,
  width
} from 'tailwindcss-classnames'

import { CommonColor, CommonSize, CommonWidth } from '~/common/types'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: CommonWidth
  color?: CommonColor
  size?: Exclude<CommonSize, 'xs'>
}

const defaultStyle =
  'rounded-lg ring-zinc-200 select-none active:enabled:ring-2'

const widthVariant = {
  hug: width('w-fit'),
  fill: width('w-full')
}

const sizeVariant = {
  sm: padding('px-3.5', 'py-2'),
  md: padding('px-4', 'py-2.5'),
  lg: padding('px-4.5', 'py-2.5'),
  xl: padding('px-5', 'py-3')
}

const colorVariant = {
  primary: classnames(
    borders(
      'border',
      'border-zinc-600',
      'hover:border-zinc-800',
      'disabled:border-zinc-200'
    ),
    backgrounds('bg-zinc-600', 'hover:bg-zinc-800', 'disabled:bg-zinc-200'),
    textColor('text-white'),
    fontSize('text-sm')
  ),
  secondary: classnames(
    borders('border', 'border-zinc-300', 'disabled:border-zinc-200'),
    backgrounds('bg-white', 'hover:bg-zinc-50', 'disabled:bg-white'),
    textColor('text-zinc-800', 'disabled:text-zinc-300'),
    fontSize('text-sm')
  )
}

const Button = ({
  children,
  className,
  width = 'hug',
  color = 'primary',
  size = 'sm',
  type = 'button',
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        defaultStyle,
        widthVariant[width],
        colorVariant[color],
        sizeVariant[size],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
