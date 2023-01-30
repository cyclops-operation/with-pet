import Icon from '~/components/icon'
import { InputProps } from '~/components/Input/common/input'
import InputBox from '~/components/Input/input-box'

import useCombobox from '../../use-combobox'

import { TriggerWrapper } from './index.style'

export type ComboboxTriggerProps = InputProps

const Trigger = (props: ComboboxTriggerProps) => {
  const { open, setOpen } = useCombobox()

  return (
    <InputBox>
      <TriggerWrapper
        rightIcon={
          <Icon size={20} iconName={open ? 'expand_less' : 'expand_more'} />
        }
        onClick={() => setOpen(true)}
        {...props}
      />
    </InputBox>
  )
}

export default Trigger
