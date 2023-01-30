import { HTMLAttributes } from 'react'

import { ContentWrapper, LayoutWrapper } from './index.style'

const Layout = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <LayoutWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </LayoutWrapper>
  )
}

export default Layout
