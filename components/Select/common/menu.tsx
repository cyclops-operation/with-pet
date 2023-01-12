import { HTMLAttributes } from 'react'

import { twMerge } from 'tailwind-merge'

import useSelect from '../use-select'

const menuStyle = `
    py-2
    rounded-lg
    bg-white
    shadow
    shadow-zinc-300
    overflow-hidden
`

interface MenuProps extends HTMLAttributes<HTMLUListElement> {}

const Menu = ({ children, className, ...rest }: MenuProps) => {
  const { open } = useSelect()

  return open ? (
    <ul className={twMerge(menuStyle, className)} {...rest}>
      {children}
    </ul>
  ) : null
}

export default Menu
