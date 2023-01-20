import { HTMLAttributes } from 'react'

import useSelect from '../../use-select'

import { MenuWrapper } from './index.style'

interface MenuProps extends HTMLAttributes<HTMLUListElement> {}

const Menu = ({ children, ...rest }: MenuProps) => {
  const { open } = useSelect()

  return open ? <MenuWrapper {...rest}>{children}</MenuWrapper> : null
}

export default Menu
