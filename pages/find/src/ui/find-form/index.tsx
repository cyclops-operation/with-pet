import { useState } from 'react'

import Radio from '~/components/Radio'

import FormCombobox from '../modules/form-combobox'

import {
  DateRangeWrapper,
  FindFormWrapper,
  FormBox,
  FormLabel,
  RadioList,
  Tilde
} from './index.style'

const FindForm = () => {
  const [query, setQuery] = useState({
    start: '',
    end: '',
    species: '',
    kind: '',
    locale: '',
    city: '',
    neutered: ''
  })

  return (
    <FindFormWrapper>
      <FormBox>
        <FormLabel>유기날짜</FormLabel>
        <DateRangeWrapper>
          <FormCombobox options={MOCK} placeholder='년/월/일' />
          <Tilde>~</Tilde>
          <FormCombobox options={MOCK} placeholder='년/월/일' />
        </DateRangeWrapper>
      </FormBox>
      <FormBox $gap={16}>
        <FormLabel>동물 구분</FormLabel>
        <RadioList>
          {ANIMAL.map(({ label, value }) => (
            <Radio key={`animal-species-${value}`} value={value}>
              {label}
            </Radio>
          ))}
        </RadioList>
      </FormBox>
      <FormBox>
        <FormLabel>품종</FormLabel>
        <FormCombobox options={MOCK} placeholder='품종을 선택해주세요' />
      </FormBox>
      <FormBox>
        <FormLabel>지역</FormLabel>
        <FormCombobox options={MOCK} placeholder='지역을 선택해주세요' />
      </FormBox>
      <FormBox>
        <FormLabel>시군구</FormLabel>
        <FormCombobox options={MOCK} placeholder='지역을 선택해주세요' />
      </FormBox>
      <FormBox $gap={16}>
        <FormLabel>중성화 여부</FormLabel>
        <div className='flex gap-6'>
          {ANIMAL.map(({ label, value }) => (
            <Radio key={`animal-species-${value}`} value={value}>
              {label}
            </Radio>
          ))}
        </div>
      </FormBox>
    </FindFormWrapper>
  )
}

export default FindForm

const MOCK = [
  { label: '옵션 1', value: 'option-1' },
  { label: '옵션 2', value: 'option-2' },
  { label: '옵션 3', value: 'option-3' },
  { label: '옵션 4', value: 'option-4' }
]

const ANIMAL = [
  { label: '개', value: 'option-1' },
  { label: '고양이', value: 'option-2' },
  { label: '기타', value: 'option-3' }
]
