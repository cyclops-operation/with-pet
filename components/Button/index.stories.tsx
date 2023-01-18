import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button, { ButtonProps } from '.'

export default {
  title: 'Components/Button/Button',
  component: Button,
  argTypes: {
    color: {
      control: { type: 'select' }
    },
    size: {
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof Button>

export const Default: ComponentStory<typeof Button> = (props: ButtonProps) => (
  <Button {...props}>Button</Button>
)
