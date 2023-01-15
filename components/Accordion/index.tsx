import { HTMLAttributes, ReactNode, useMemo, useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

import { twMerge } from 'tailwind-merge'

import useOutside from '~/hooks/useOutside'

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  defaultText?: string
}

const defaultStyles = `
    flex
    flex-col
    border
    border-zinc-200
    bg-zinc-50
    rounded-[12px]
    max-h-[58px]
    overflow-hidden
    transition-all
    duration-500
`

const triggerStyles = `
    flex
    w-full
    cursor-pointer
    select-none
    items-center
    justify-between
    px-6
    py-4
    text-zinc-700
`

const iconStyles = `
    block
    h-[18px]
    w-[18px]
    text-gray-700
    rotate-[180deg]
    transition-all
    duration-500
`

const Accordion = ({
  children,
  defaultText = '입력하신 정보입니다.',
  className = ''
}: AccordionProps) => {
  const [isExtend, setIsExtend] = useState(false)

  const extendBodyStyles = useMemo(() => {
    if (isExtend) {
      return twMerge(defaultStyles, 'max-h-[600px]')
    }
    return ''
  }, [isExtend])

  const arrowStyles = useMemo(() => {
    if (isExtend) {
      return twMerge(iconStyles, 'rotate-0')
    }
    return iconStyles
  }, [isExtend])

  const { ref: accordionRef } = useOutside<HTMLDivElement>(() =>
    setIsExtend(false)
  )

  return (
    <div
      ref={accordionRef}
      className={twMerge(defaultStyles, extendBodyStyles, className)}
    >
      <strong
        role='button'
        className={triggerStyles}
        onClick={() => setIsExtend((prev) => !prev)}
      >
        {defaultText}
        <ChevronUpIcon className={arrowStyles} />
      </strong>
      <div className='px-6 py-4 pt-0'>{children}</div>
    </div>
  )
}

export default Accordion
