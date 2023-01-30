import { HTMLAttributes } from 'react'

import Icon from '~/components/icon'

import { OptionWrapper } from './index.style'

export interface OptionProps extends HTMLAttributes<HTMLLIElement> {
  isSelected: boolean
}

const Option = ({ children, isSelected, ...rest }: OptionProps) => (
  <OptionWrapper isSelected={isSelected} {...rest}>
    {children}
    {isSelected ? <Icon size={20} iconName='check' /> : null}
  </OptionWrapper>
)

export default Option
