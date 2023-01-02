import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'

export default function Home() {
  const { theme, setTheme } = useTheme()

  console.log(theme)

  return (
    <>
      <SunIcon className='w-12' onClick={() => setTheme('light')} />
      <MoonIcon className='w-12' onClick={() => setTheme('dark')} />
    </>
  )
}
