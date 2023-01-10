import {
  ChangeEvent,
  createContext,
  ReactNode,
  RefObject,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState
} from 'react'

import HintText, { HintTextProps } from './common/HintText'
import Input, { InputProps } from './common/Input'
import Label from './common/Label'

export interface InputBoxProps {
  children: ReactNode
  className?: string
  onChange?: InputProps['onChange']
  isInvalid?: boolean
}

export interface InputBoxContextType {
  inputRef: RefObject<HTMLInputElement>
  onChange: InputProps['onChange']
  valid: boolean
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
  const { onChange, inputRef } = useInputBoxContext() as InputBoxContextType
  return <Input ref={inputRef} onChange={onChange} {...props} />
}

const InputBoxHintText = (props: HintTextProps) => {
  const { valid } = useInputBoxContext() as InputBoxContextType
  return <HintText isInvalid={valid} {...props} />
}

const InputBox = ({
  children,
  className = '',
  onChange,
  isInvalid = false
}: InputBoxProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [valid, setValid] = useState(isInvalid)

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { pattern, value } = e.target
    onChange?.(e)
    if (!pattern) return
    const valid = new RegExp(pattern).test(value) || !value
    setValid(!valid)
  }, [])

  const value = useMemo(
    () => ({ onChange: handleChange, inputRef, valid }),
    [inputRef, valid]
  )

  return (
    <InputBoxContext.Provider value={value}>
      <div className={className}>{children}</div>
    </InputBoxContext.Provider>
  )
}

InputBox.Text = InputBoxText
InputBox.Label = Label
InputBox.HintText = InputBoxHintText

export default InputBox
