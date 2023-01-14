import {
  ChangeEvent,
  createContext,
  HTMLAttributes,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState
} from 'react'

import HintText, { HintTextProps } from './common/hint-text'
import Input, { InputProps } from './common/input'
import Label from './common/label'

export interface InputBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  onChange?: InputProps['onChange']
  isInvalid?: boolean
}

export interface InputBoxContextType {
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
  const { onChange } = useInputBoxContext() as InputBoxContextType
  return <Input onChange={onChange} {...props} />
}

const InputBoxHintText = (props: HintTextProps) => {
  const { valid } = useInputBoxContext() as InputBoxContextType
  return <HintText isInvalid={valid} {...props} />
}

const InputBox = ({
  className = '',
  isInvalid = false,
  children,
  onChange,
  ...rest
}: InputBoxProps) => {
  const [valid, setValid] = useState(isInvalid)

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { pattern, value } = e.target
    onChange?.(e)
    if (!pattern) return
    const valid = new RegExp(pattern).test(value) || !value
    setValid(!valid)
  }, [])

  const value = useMemo(() => ({ onChange: handleChange, valid }), [valid])

  return (
    <InputBoxContext.Provider value={value}>
      <div className={className} {...rest}>
        {children}
      </div>
    </InputBoxContext.Provider>
  )
}

InputBox.Input = InputBoxText
InputBox.Label = Label
InputBox.HintText = InputBoxHintText

export default InputBox
