import { HTMLAttributes } from 'react'

const Layout = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className='flex justify-center'>
      <main className='w-[428px]'>{children}</main>
    </div>
  )
}

export default Layout
