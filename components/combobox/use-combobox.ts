import { useContext } from 'react'

import { ComboboxContext } from '.'

const useCombobox = () => {
  const context = useContext(ComboboxContext)

  if (!context) {
    throw Error('"useCombobox"는 <Combobox /> 안에서 사용되어야 합니다.')
  }

  return context
}

export default useCombobox
