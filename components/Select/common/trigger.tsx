import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

import { twMerge } from 'tailwind-merge'

import { InputProps } from '~/components/Input/common/input'
import InputBox from '~/components/Input/input-box'

import useSelect from '../use-select'

const triggerDefaultStyle = `
  text-start
`

const triggerDirectionStyle = `
  w-3
  h-3
`

const Trigger = ({ className, ...rest }: InputProps) => {
  const { open, setOpen } = useSelect()

  return (
    <InputBox>
      <InputBox.Input
        className={twMerge(triggerDefaultStyle, className)}
        rightIcon={
          open ? (
            <ChevronUpIcon className={triggerDirectionStyle} />
          ) : (
            <ChevronDownIcon className={triggerDirectionStyle} />
          )
        }
        onClick={() => setOpen(true)}
        {...rest}
      />
    </InputBox>
  )
}

export default Trigger
