import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Accordion, { AccordionProps } from '.'

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    color: {
      control: { type: 'select' }
    },
    size: {
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof Accordion>

export const Default: ComponentStory<typeof Accordion> = (
  props: AccordionProps
) => (
  <Accordion {...props}>
    <ul>
      <li>list 1</li>
      <li>list 2</li>
      <li>list 3</li>
      <li>list 4</li>
      <li>list 5</li>
    </ul>
  </Accordion>
)

Default.storyName = 'Accodion'

export const Multiple: ComponentStory<typeof Accordion> = (
  props: AccordionProps
) => (
  <div className='flex flex-col gap-3'>
    <Accordion {...props}>
      <ul>
        <li>list 1</li>
        <li>list 2</li>
        <li>list 3</li>
        <li>list 4</li>
        <li>list 5</li>
      </ul>
    </Accordion>
    <Accordion {...props}>
      <ul>
        <li>list 1</li>
        <li>list 2</li>
        <li>list 3</li>
        <li>list 4</li>
        <li>list 5</li>
      </ul>
    </Accordion>
    <Accordion {...props}>
      <ul>
        <li>list 1</li>
        <li>list 2</li>
        <li>list 3</li>
        <li>list 4</li>
        <li>list 5</li>
      </ul>
    </Accordion>
  </div>
)

Multiple.storyName = 'Multiple'
