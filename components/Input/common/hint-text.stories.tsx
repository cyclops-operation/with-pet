import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import HintText, { HintTextProps } from './hint-text'

export default {
  title: 'Components/Input/common/HintText',
  component: HintText,
  argTypes: {}
} as ComponentMeta<typeof HintText>

export const Default: ComponentStory<typeof HintText> = (
  props: HintTextProps
) => <HintText {...props} />

Default.args = {
  text: 'This is a hint text to help user.'
}

export const Invalid: ComponentStory<typeof HintText> = (
  props: HintTextProps
) => <HintText {...props} />

Invalid.args = {
  isInvalid: true,
  text: 'This is an error message.'
}
