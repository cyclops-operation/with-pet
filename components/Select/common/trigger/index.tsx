import { ButtonProps } from '~/components/Button'
import Icon from '~/components/icon'

import useSelect from '../../use-select'

import { TriggerValue, TriggerWrapper } from './index.style'

export type SelectTriggerProps = ButtonProps

const Trigger = ({ type, children, ...rest }: SelectTriggerProps) => {
  const { open, setOpen, selected } = useSelect()

  return (
    <TriggerWrapper
      width='fill'
      color='secondary'
      onClick={() => setOpen(true)}
      {...rest}
    >
      <TriggerValue>{selected?.label}</TriggerValue>
      <Icon size={20} iconName={open ? 'expand_less' : 'expand_more'} />
    </TriggerWrapper>
  )
}

export default Trigger
