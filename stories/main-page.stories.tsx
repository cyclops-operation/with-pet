import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Home from '~/pages/home/index.page'
import ButtonGroup from '~/pages/home/src/ui/button-group'
import HeaderText from '~/pages/home/src/ui/header-text'
import Layout from '~/pages/src/ui/Layout'

export default {
  title: 'Pages/Home',
  component: Home
} as ComponentMeta<typeof Home>

export const Default: ComponentStory<typeof Home> = () => (
  <Layout>
    <Home />
  </Layout>
)

export const Buttons: ComponentStory<typeof ButtonGroup> = () => (
  <Layout>
    <ButtonGroup />
  </Layout>
)

export const Title: ComponentStory<typeof HeaderText> = () => (
  <Layout>
    <HeaderText />
  </Layout>
)

Default.parameters = {
  nextRouter: {
    path: '/',
    asPath: '/'
  }
}
