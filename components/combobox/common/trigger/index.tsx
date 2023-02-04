import { InputProps } from '~/components/Input/common/input'
import InputBox from '~/components/Input/input-box'

import useCombobox from '../../use-combobox'

import { TriggerIcon, TriggerWrapper } from './index.style'

export type ComboboxTriggerProps = InputProps

const Trigger = (props: ComboboxTriggerProps) => {
  const { open, setOpen, selected } = useCombobox()

  const openMenu = () => {
    if (props.disabled) return

    setOpen(true)
  }

  const toggleMenu = () => {
    if (props.disabled) return

    setOpen((prev) => !prev)
  }

  return (
    <InputBox>
      <TriggerWrapper
        defaultValue={selected?.label}
        rightIcon={
          <TriggerIcon
            size={20}
            iconName={open ? 'expand_less' : 'expand_more'}
            onClick={toggleMenu}
            disabled={props.disabled}
          />
        }
        onClick={openMenu}
        {...props}
      />
    </InputBox>
  )
}

export default Trigger
