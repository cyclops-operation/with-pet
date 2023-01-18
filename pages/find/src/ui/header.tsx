const Header = () => {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='whitespace-pre-line text-2xl font-bold text-zinc-700'>
        {`찾고있는 반려동물의 \n정보를 입력해 주세요`}
      </h1>
      <h1 className='text-sm text-zinc-400'>
        정확한 정보를 입력할 수록 빠르게 찾을 수 있습니다.
      </h1>
    </div>
  )
}

export default Header
