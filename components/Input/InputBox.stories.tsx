import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import InputBox, { InputBoxProps } from './InputBox'

export default {
  title: 'Components/Input',
  component: InputBox,
  argTypes: {}
} as ComponentMeta<typeof InputBox>

export const Default: ComponentStory<typeof InputBox> = (
  agrs: InputBoxProps
) => (
  <InputBox className='flex max-w-[320px] flex-col gap-2'>
    <InputBox.Label text='Email' htmlFor='input-2' />
    <InputBox.Text id='input-2' placeholder='olivia@untitledui.com' />
    <InputBox.HintText text='This is a hint text to help user.' />
  </InputBox>
)

Default.storyName = 'InputBox'

Default.args = {}
