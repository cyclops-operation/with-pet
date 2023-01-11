import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Input, { InputProps } from './input'

export default {
  title: 'Components/Input/common/Text',
  component: Input,
  argTypes: {}
} as ComponentMeta<typeof Input>

export const Default: ComponentStory<typeof Input> = (props: InputProps) => (
  <Input {...props} />
)

Default.args = {
  placeholder: 'olivia@untitledui.com'
}

export const Focus: ComponentStory<typeof Input> = (props: InputProps) => (
  <Input {...props} />
)

Focus.args = {
  autoFocus: true,
  placeholder: 'olivia@untitledui.com'
}

export const Disabled: ComponentStory<typeof Input> = (props: InputProps) => (
  <Input {...props} />
)

Disabled.args = {
  disabled: true,
  placeholder: 'olivia@untitledui.com'
}
