import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Radio, { RadioProps } from '.'

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    value: {
      control: 'text'
    },
    size: {
      control: 'select'
    }
  }
} as ComponentMeta<typeof Radio>

export const Default: ComponentStory<typeof Radio> = (props: RadioProps) => (
  <Radio {...props}>Radio</Radio>
)
