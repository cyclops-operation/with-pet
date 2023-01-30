import { ChangeEvent, ForwardedRef, forwardRef, useState } from 'react'

import { Option } from '~/common/types'
import Combobox, { ComboboxProps } from '~/components/combobox'

import { FormComboboxMenu } from './index.style'

interface FormComboboxProps extends Partial<ComboboxProps> {
  options: Option[]
  placeholder?: string
}

const FormCombobox = ({
  placeholder,
  options,
  onSelect
}: FormComboboxProps) => {
  const [inputValue, setInputValue] = useState('')

  const filteredOptions = options.filter(({ label }) => {
    const lowerInputValue = inputValue.toLowerCase()

    return String(label).toLowerCase().includes(lowerInputValue)
  })

  const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setInputValue(value)
  }

  const selectOption: ComboboxProps['onSelect'] = (selectedOption) => {
    setInputValue(String(selectedOption.label))

    onSelect?.(selectedOption)
  }

  return (
    <Combobox onSelect={selectOption}>
      <Combobox.Trigger
        placeholder={placeholder}
        value={inputValue}
        onChange={changeInput}
      />
      {filteredOptions.length > 0 && (
        <FormComboboxMenu>
          {filteredOptions?.map(({ label, value }) => (
            <Combobox.Option
              key={`combobox-option-${value}-${label}`}
              value={value}
            >
              {label}
            </Combobox.Option>
          ))}
        </FormComboboxMenu>
      )}
    </Combobox>
  )
}

export default FormCombobox
