import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Select, { SelectProps } from '.'

export default {
  title: 'Components/Select',
  component: Select
} as ComponentMeta<typeof Select>

export const Default: ComponentStory<typeof Select> = (props: SelectProps) => (
  <Select {...props}>
    <Select.Trigger
      placeholder='Choose your pet'
      leftIcon={<MagnifyingGlassIcon className='h-4 w-4 text-zinc-500' />}
    />
    <Select.Menu className='absolute top-12 w-full'>
      <Select.Option value='option-1'>Korean short hair</Select.Option>
      <Select.Option value='option-2'>British short hair</Select.Option>
      <Select.Option value='option-3'>Pomeranian</Select.Option>
      <Select.Option value='option-4'>Bichon Frisé</Select.Option>
    </Select.Menu>
  </Select>
)
