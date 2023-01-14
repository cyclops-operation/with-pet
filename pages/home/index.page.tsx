import ButtonGroup from './src/ui/button-group'
import HeaderText from './src/ui/header-text'

export default function Home() {
  return (
    <div className='flex flex-col justify-center gap-6 px-6 py-[20vh]'>
      <HeaderText />
      <ButtonGroup />
    </div>
  )
}
