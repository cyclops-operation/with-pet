import { useRouter } from 'next/router'

import Button from '~/components/Button'
import { ROUTER } from '~/lib/config/router'

import { ButtonGroupLabel, ButtonGroupWrapper } from './index.style'

const ButtonGroup = () => {
  const { push } = useRouter()

  const goFind = () => {
    push(ROUTER.find)
  }

  const goRegist = () => {
    push(ROUTER.regist)
  }

  return (
    <ButtonGroupWrapper>
      <ButtonGroupLabel>어떻게 오셨나요?</ButtonGroupLabel>
      <Button width='fill' size='xl' onClick={goFind}>
        유기동물 찾기
      </Button>
      <Button width='fill' size='xl' onClick={goRegist}>
        유기동물 신고
      </Button>
    </ButtonGroupWrapper>
  )
}

export default ButtonGroup
