import { HTMLAttributes } from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'

import { OptionWrapper } from './index.style'

export interface OptionProps extends HTMLAttributes<HTMLLIElement> {
  isSelected: boolean
}

const Option = ({ children, isSelected, ...rest }: OptionProps) => (
  <OptionWrapper isSelected={isSelected} {...rest}>
    {children}
    {isSelected ? <CheckIcon className='h-3 w-3' /> : null}
  </OptionWrapper>
)

export default Option
