import InputBox from '~/components/Input/input-box'

const Find = () => {
  return (
    <div>
      <InputBox className='flex max-w-[320px] flex-col gap-2'>
        <InputBox.Label text='Email' htmlFor='input-2' />
        <InputBox.Input id='input-2' placeholder='olivia@untitledui.com' />
        <InputBox.HintText text='This is a hint text to help user.' />
      </InputBox>
    </div>
  )
}

export default Find
