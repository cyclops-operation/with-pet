import { HTMLAttributes } from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'

import { twMerge } from 'tailwind-merge'

const optionDefaultStyle = `
  flex
  justify-between
  items-center
  gap-2
  cursor-pointer
  bg-white
  py-2.5
  px-4
  text-sm
  text-zinc-900
  hover:bg-zinc-50
  cursor-pointer
`

const optionSelectedStyle = `
  bg-zinc-50
`

export interface OptionProps extends HTMLAttributes<HTMLLIElement> {
  isSelected: boolean
}

const Option = ({ className, children, isSelected, ...rest }: OptionProps) => (
  <li
    className={twMerge(
      optionDefaultStyle,
      isSelected ? optionSelectedStyle : '',
      className
    )}
    {...rest}
  >
    {children}
    {isSelected ? <CheckIcon className='h-3 w-3' /> : null}
  </li>
)

export default Option
