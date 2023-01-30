import { HTMLAttributes } from 'react'

import { MenuWrapper } from './index.style'

export type MenuProps = HTMLAttributes<HTMLUListElement>

const Menu = ({ children, ...rest }: MenuProps) => {
  return <MenuWrapper {...rest}>{children}</MenuWrapper>
}

export default Menu
