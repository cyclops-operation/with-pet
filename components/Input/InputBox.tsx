import { createContext, ReactNode, useContext, useMemo } from 'react'

import Input, { InputProps } from './common/Input'
import Label, { LabelProps } from './common/Label'

export interface InputBoxProps {
  children: ReactNode
  className?: string
  onChange?: InputProps['onChange']
}

export interface InputBoxContextType {
  onChange?: InputProps['onChange']
}

export const InputBoxContext = createContext<InputBoxContextType | undefined>(
  undefined
)

const useInputBoxContext = () => {
  const context = useContext(InputBoxContext) as InputBoxContextType
  if (!context) {
    throw Error('useInputBoxContext는 InputBox 안에서 사용 되어야 합니다.')
  }
  return context
}

const InputBoxText = (props: InputProps) => {
  const { onChange } = useInputBoxContext() as InputBoxContextType
  return <Input onChange={onChange} {...props} />
}

const InputBoxLabel = (props: LabelProps) => <Label {...props} />

const InputBox = ({ children, className = '', onChange }: InputBoxProps) => {
  const value = useMemo(() => ({ onChange }), [])
  return (
    <InputBoxContext.Provider value={value}>
      <div className={className}>{children}</div>
    </InputBoxContext.Provider>
  )
}

InputBox.Text = InputBoxText
InputBox.Label = InputBoxLabel

export default InputBox
