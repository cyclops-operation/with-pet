import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Label, { LabelProps } from './Label'

export default {
  title: 'Components/Input/common/Label',
  component: Label,
  argTypes: {}
} as ComponentMeta<typeof Label>

export const Default: ComponentStory<typeof Label> = (props: LabelProps) => (
  <Label {...props} />
)

Default.storyName = 'Label'

Default.args = {
  text: 'Email'
}
