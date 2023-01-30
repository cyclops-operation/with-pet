import { useRouter } from 'next/router'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

import TextButton from '~/components/Button/text-button'

const Navigation = () => {
  const { back } = useRouter()

  const goBack = () => {
    back()
  }

  return (
    <TextButton className='flex items-center gap-1' onClick={goBack}>
      <ChevronLeftIcon className='h-4' />
      뒤로
    </TextButton>
  )
}

export default Navigation
