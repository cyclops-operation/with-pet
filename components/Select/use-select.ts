import { useContext } from 'react'

import { SelectContext } from '.'

const useSelect = () => {
  const context = useContext(SelectContext)

  if (!context) {
    throw Error('"useSelect"는 <Select /> 안에서 사용되어야 합니다.')
  }

  return context
}

export default useSelect
