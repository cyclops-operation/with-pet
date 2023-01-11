import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import InputBox from './input-box'

export default {
  title: 'Components/Input',
  component: InputBox,
  argTypes: {}
} as ComponentMeta<typeof InputBox>

export const Default: ComponentStory<typeof InputBox> = () => (
  <InputBox className='flex max-w-[320px] flex-col gap-2'>
    <InputBox.Label text='Email' htmlFor='input-1' />
    <InputBox.Input id='input-1' placeholder='olivia@untitledui.com' />
    <InputBox.HintText text='This is a hint text to help user.' />
  </InputBox>
)

export const Invalid: ComponentStory<typeof InputBox> = () => (
  <InputBox className='flex max-w-[320px] flex-col gap-2'>
    <InputBox.Label text='Email' htmlFor='input-2' />
    <InputBox.Input id='input-2' placeholder='olivia@untitledui.com' required />
    <InputBox.HintText isInvalid text='This is a hint text to help user.' />
  </InputBox>
)

export const InvalidFocus: ComponentStory<typeof InputBox> = () => (
  <InputBox className='flex max-w-[320px] flex-col gap-2'>
    <InputBox.Label text='Email' htmlFor='input-3' />
    <InputBox.Input
      id='input-3'
      placeholder='olivia@untitledui.com'
      autoFocus
      required
    />
    <InputBox.HintText isInvalid text='This is a hint text to help user.' />
  </InputBox>
)

export const LeftIcon: ComponentStory<typeof InputBox> = () => (
  <InputBox className='flex max-w-[320px] flex-col gap-2'>
    <InputBox.Label text='Email' htmlFor='input-4' />
    <InputBox.Input
      id='input-4'
      placeholder='olivia@untitledui.com'
      leftIcon={<span className='h-[20px] w-[20px] rounded-full bg-red-700' />}
    />
    <InputBox.HintText text='This is a hint text to help user.' />
  </InputBox>
)

export const RightIcon: ComponentStory<typeof InputBox> = () => (
  <InputBox className='flex max-w-[320px] flex-col gap-2'>
    <InputBox.Label text='Email' htmlFor='input-5' />
    <InputBox.Input
      id='input-5'
      placeholder='olivia@untitledui.com'
      rightIcon={<span className='h-[20px] w-[20px] rounded-full bg-red-700' />}
    />
    <InputBox.HintText text='This is a hint text to help user.' />
  </InputBox>
)

export const FullIcon: ComponentStory<typeof InputBox> = () => (
  <InputBox className='flex max-w-[320px] flex-col gap-2'>
    <InputBox.Label text='Email' htmlFor='input-6' />
    <InputBox.Input
      id='input-6'
      placeholder='olivia@untitledui.com'
      leftIcon={<span className='h-[20px] w-[20px] rounded-full bg-red-700' />}
      rightIcon={<span className='h-[20px] w-[20px] rounded-full bg-red-700' />}
    />
    <InputBox.HintText text='This is a hint text to help user.' />
  </InputBox>
)
