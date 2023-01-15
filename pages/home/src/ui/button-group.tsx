import { useCallback } from 'react'
import { useRouter } from 'next/router'

import Button from '~/components/Button'
import { ROUTER } from '~/lib/config/router'

const ButtonGroup = () => {
  const { push } = useRouter()

  const goFind = () => {
    push(ROUTER.find)
  }

  const goRegist = () => {
    push(ROUTER.regist)
  }

  return (
    <div className='flex animate-fade-in flex-col gap-4'>
      <p className='text-sm text-zinc-400'>어떻게 오셨나요?</p>
      <Button width='fill' size='xl' onClick={goFind}>
        유기동물 찾기
      </Button>
      <Button width='fill' size='xl' onClick={goRegist}>
        유기동물 신고
      </Button>
    </div>
  )
}

export default ButtonGroup
