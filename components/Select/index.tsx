import {
  createContext,
  Dispatch,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
  useState
} from 'react'

import { twMerge } from 'tailwind-merge'

import { CommonValue } from '~/common/types'
import useOutside from '~/hooks/useOutside'

import Menu from './common/menu'
import Option from './common/option'
import Trigger from './common/trigger'
import useSelect from './use-select'

interface SelectContextType {
  open: boolean
  setOpen: Dispatch<SetStateAction<SelectContextType['open']>>
  selected: CommonValue[]
  setSelected: Dispatch<SetStateAction<SelectContextType['selected']>>
}

export interface SelectProps extends HTMLAttributes<HTMLDivElement> {}

interface OptionProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode
  value: string | number | boolean
}

export const SelectContext = createContext<SelectContextType | undefined>(
  undefined
)

const selectWrapperDefaultStyle = `
  relative
`

const Select = ({ children, className, ...rest }: SelectProps) => {
  const [open, setOpen] = useState<SelectContextType['open']>(false)
  const [selected, setSelected] = useState<SelectContextType['selected']>([])

  const { ref } = useOutside<HTMLDivElement>(() => setOpen(false))

  return (
    <SelectContext.Provider value={{ open, setOpen, selected, setSelected }}>
      <div
        ref={ref}
        className={twMerge(selectWrapperDefaultStyle, className)}
        {...rest}
      >
        {children}
      </div>
    </SelectContext.Provider>
  )
}

Select.Trigger = Trigger
Select.Menu = Menu

Select.Option = function SelectOption({
  children,
  value,
  ...rest
}: OptionProps) {
  const { selected, setSelected } = useSelect()

  const selectOption = (selectedValue: CommonValue) => {
    setSelected((prev) => {
      const hasOption = prev.includes(selectedValue)

      if (hasOption) {
        return prev.filter((value) => value !== selectedValue)
      }

      return [...prev, selectedValue]
    })
  }

  const isSelected = selected.includes(value)

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
