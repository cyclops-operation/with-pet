import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import InputBox, { InputBoxProps } from './input-box'

export default {
  title: 'Components/Input',
  component: InputBox,
  argTypes: {}
} as ComponentMeta<typeof InputBox>

const emailPattern = '[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*'

export const Default: ComponentStory<typeof InputBox> = () => (
  <InputBox className='flex max-w-[320px] flex-col gap-2'>
    <InputBox.Label text='Email' htmlFor='input-2' />
    <InputBox.Text id='input-2' placeholder='olivia@untitledui.com' />
    <InputBox.HintText text='This is a hint text to help user.' />
  </InputBox>
)

export const Invalid: ComponentStory<typeof InputBox> = () => (
  <InputBox className='flex max-w-[320px] flex-col gap-2'>
    <InputBox.Label text='Email' htmlFor='input-2' />
    <InputBox.Text id='input-2' placeholder='olivia@untitledui.com' required />
    <InputBox.HintText isInvalid text='This is a hint text to help user.' />
  </InputBox>
)

export const InvalidFocus: ComponentStory<typeof InputBox> = () => (
  <InputBox className='flex max-w-[320px] flex-col gap-2'>
    <InputBox.Label text='Email' htmlFor='input-2' />
    <InputBox.Text
      id='input-2'
      placeholder='olivia@untitledui.com'
      autoFocus
      required
    />
    <InputBox.HintText isInvalid text='This is a hint text to help user.' />
  </InputBox>
)
