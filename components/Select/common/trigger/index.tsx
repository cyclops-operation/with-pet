import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

import { InputProps } from '~/components/Input/common/input'
import InputBox from '~/components/Input/input-box'

import useSelect from '../../use-select'

import { TriggerInput } from './index.style'

const triggerDirectionStyle = `
  w-3
  h-3
`

const Trigger = (props: InputProps) => {
  const { open, setOpen } = useSelect()

  return (
    <InputBox>
      <TriggerInput
        rightIcon={
          open ? (
            <ChevronUpIcon className={triggerDirectionStyle} />
          ) : (
            <ChevronDownIcon className={triggerDirectionStyle} />
          )
        }
        onClick={() => setOpen(true)}
        {...props}
      />
    </InputBox>
  )
}

export default Trigger
