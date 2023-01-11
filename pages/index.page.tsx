import Button from '~/components/Button'
import InputHintText from '~/components/Input/common/hint-text'
import InputBox from '~/components/Input/input-box'

export default function Home() {
  return (
    <div className='flex flex-col gap-[10px] p-[16px]'>
      <Button color='secondary'>Button CTA</Button>
      <InputBox className='flex max-w-[320px] flex-col gap-2'>
        <InputBox.Label text='라벨-1' htmlFor='input-1' />
        <InputBox.Input
          id='input-1'
          placeholder='asdkjasdk'
          leftIcon={
            <span className='h-[20px] w-[20px] rounded-full bg-red-700' />
          }
        />
      </InputBox>
      <InputBox className='flex max-w-[320px] flex-col gap-2'>
        <InputBox.Label text='라벨-2' htmlFor='input-2' />
        <InputBox.Input
          pattern='[A-Za-z0-9]{4,10}'
          id='input-2'
          placeholder='asdkjasdk'
          rightIcon={
            <span className='h-[20px] w-[20px] rounded-full bg-red-700' />
          }
        />
        <InputBox.HintText text='텍스트' />
      </InputBox>
      <InputBox className='flex max-w-[320px] flex-col gap-2'>
        <InputBox.Label text='라벨-3' htmlFor='input-3' />
        <InputBox.Input
          id='input-3'
          placeholder='asdkjasdk'
          leftIcon={
            <span className='h-[20px] w-[20px] rounded-full bg-red-700' />
          }
          rightIcon={
            <span className='h-[20px] w-[20px] rounded-full bg-red-700' />
          }
        />
      </InputBox>
    </div>
  )
}
