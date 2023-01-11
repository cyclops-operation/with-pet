import { ForwardedRef, forwardRef, HTMLAttributes } from 'react'

import { twMerge } from 'tailwind-merge'

import { CommonSize } from '~/common/types'

export interface RadioProps extends HTMLAttributes<HTMLInputElement> {
  value: string | number | boolean
  checked?: boolean
  size?: Exclude<CommonSize, 'md' | 'lg' | 'xl'>
}

const defaultStyle = `
    relative
    flex
    items-center
    gap-2
    cursor-pointer
    text-zinc-700
    before:content-['']
    before:border 
    before:border-zinc-300 
    before:rounded-full
    after:translate-x-[-50%]
    focus:ring-2
    before:ring-zinc-100
    active:before:ring-4`

const sizeVariant = {
  xs: `
    text-sm
    before:w-4 
    before:h-4
    after:left-2
    after:h-1.5
    after:w-1.5`,
  sm: `
    text-md
    before:w-5
    before:h-5
    after:left-2.5
    after:h-2
    after:w-2`
}

const checkedVariant = `
    before:border-zinc-600
    after:absolute
    after:content-['']
    after:rounded-full
    after:bg-zinc-600`

const Radio = forwardRef(
  (
    { children, id, value, size = 'xs', checked, ...rest }: RadioProps,
    ref: ForwardedRef<HTMLLabelElement>
  ) => {
    return (
      <label
        ref={ref}
        className={twMerge(
          defaultStyle,
          sizeVariant[size],
          checked ? checkedVariant : ''
        )}
      >
        <input type='radio' className='blind' checked={checked} {...rest} />
        {children}
      </label>
    )
  }
)

Radio.displayName = 'Radio'

export default Radio
