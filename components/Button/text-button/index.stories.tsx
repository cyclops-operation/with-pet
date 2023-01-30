import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import TextButton, { TextButtonProps } from '.'

export default {
  title: 'Components/Button/TextButton',
  component: TextButton,
  argTypes: {
    size: {
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof TextButton>

export const Default: ComponentStory<typeof TextButton> = (
  props: TextButtonProps
) => <TextButton {...props}>TextButton</TextButton>
