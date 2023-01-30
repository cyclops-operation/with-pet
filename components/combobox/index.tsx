import {
  createContext,
  Dispatch,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
  useState
} from 'react'

import { CommonLabel, CommonValue, Option as OptionType } from '~/common/types'
import useOutside from '~/hooks/useOutside'

import Menu, { MenuProps } from '../menu'
import Option from '../option'

import Trigger from './common/trigger'
import { ComboboxWrapper } from './index.style'
import useCombobox from './use-combobox'

export interface ComboboxProps {
  children: ReactNode
  defaultValue?: OptionType
  onSelect?: (value: OptionType) => void
}

export interface ComboboxContextType extends Partial<ComboboxProps> {
  open: boolean
  setOpen: Dispatch<SetStateAction<ComboboxContextType['open']>>
  selected: OptionType | null
  setSelected: Dispatch<SetStateAction<ComboboxContextType['selected']>>
}

interface ComboboxOptionProps extends HTMLAttributes<HTMLLIElement> {
  children: CommonLabel
  value: CommonValue
}

export const ComboboxContext = createContext<ComboboxContextType | undefined>(
  undefined
)

const Combobox = ({ children, defaultValue, onSelect }: ComboboxProps) => {
  const [open, setOpen] = useState<ComboboxContextType['open']>(false)
  const [selected, setSelected] = useState<ComboboxContextType['selected']>(
    defaultValue ?? null
  )

  const { ref } = useOutside<HTMLDivElement>(() => setOpen(false))

  return (
    <ComboboxContext.Provider
      value={{ open, setOpen, selected, setSelected, onSelect }}
    >
      <ComboboxWrapper ref={ref}>{children}</ComboboxWrapper>
    </ComboboxContext.Provider>
  )
}

Combobox.Trigger = Trigger

Combobox.Menu = function ComboboxMenu({ children, ...rest }: MenuProps) {
  const { open } = useCombobox()

  return open ? <Menu {...rest}>{children}</Menu> : null
}

Combobox.Option = function ComboboxOption({
  children,
  value,
  ...rest
}: ComboboxOptionProps) {
  const { setOpen, selected, setSelected, onSelect } = useCombobox()

  const isSelected = selected?.value === value

  const clickOption = () => {
    const selectedOption = { label: children, value }

    setSelected(selectedOption)
    setOpen(false)

    onSelect?.(selectedOption)
  }

  return (
    <Option isSelected={isSelected} onClick={clickOption} {...rest}>
      {children}
    </Option>
  )
}

export default Combobox
