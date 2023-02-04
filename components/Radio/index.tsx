import { ForwardedRef, forwardRef, HTMLAttributes } from 'react'

import { CommonSize } from '~/common/types'

import { RadioWrapper } from './index.style'

export interface RadioProps extends HTMLAttributes<HTMLInputElement> {
  checked?: boolean
  size?: Exclude<CommonSize, 'md' | 'lg' | 'xl'>
}

const Radio = forwardRef(
  (
    { children, id, size = 'xs', checked, ...rest }: RadioProps,
    ref: ForwardedRef<HTMLLabelElement>
  ) => {
    return (
      <RadioWrapper ref={ref} size={size} checked={checked}>
        <input type='radio' className='blind' checked={checked} {...rest} />
        {children}
      </RadioWrapper>
    )
  }
)

Radio.displayName = 'Radio'

export default Radio
