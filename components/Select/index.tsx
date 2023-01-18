import {
  createContext,
  Dispatch,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
  useState
} from 'react'

import { CommonValue, Option as OptionType } from '~/common/types'
import useOutside from '~/hooks/useOutside'

import Menu, { MenuProps } from '../menu'
import Option from '../option'

import Trigger from './common/trigger'
import { SelectWrapper } from './index.style'
import useSelect from './use-select'

export interface SelectProps {
  children: ReactNode
  defaultValue?: OptionType
  onSelect?: (value: OptionType) => void
}

interface SelectContextType extends Partial<SelectProps> {
  open: boolean
  setOpen: Dispatch<SetStateAction<SelectContextType['open']>>
  selected: OptionType | null
  setSelected: Dispatch<SetStateAction<SelectContextType['selected']>>
}

interface SelectOptionProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode
  value: CommonValue
}

export const SelectContext = createContext<SelectContextType | undefined>(
  undefined
)

const Select = ({ children, onSelect, defaultValue, ...rest }: SelectProps) => {
  const [open, setOpen] = useState<SelectContextType['open']>(false)
  const [selected, setSelected] = useState<SelectContextType['selected']>(
    defaultValue ?? null
  )

  const { ref } = useOutside<HTMLDivElement>(() => setOpen(false))

  return (
    <SelectContext.Provider
      value={{ open, setOpen, selected, setSelected, onSelect }}
    >
      <SelectWrapper ref={ref} {...rest}>
        {children}
      </SelectWrapper>
    </SelectContext.Provider>
  )
}

Select.Trigger = Trigger

Select.Menu = function SelectMenu({ children, ...rest }: MenuProps) {
  const { open } = useSelect()

  return open ? <Menu {...rest}>{children}</Menu> : null
}

Select.Option = function SelectOption({
  children,
  value,
  ...rest
}: SelectOptionProps) {
  const { setOpen, selected, setSelected, onSelect } = useSelect()

  const isSelected = selected?.value === value

  const selectOption = (value: CommonValue) => {
    setSelected({ label: String(children), value })
    onSelect?.({ label: String(children), value })
    setOpen(false)
  }

  return (
    <Option
      isSelected={isSelected}
      onClick={() => selectOption(value)}
      {...rest}
    >
      {children}
    </Option>
  )
}

export default Select
