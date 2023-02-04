import { useMemo, useState } from 'react'

import {
  useGetCitesQuery,
  useGetDistrictsQuery,
  useGetKindsQuery,
  useGetSheltersQuery
} from '~/api/queries'
import { CommonValue } from '~/common/types'
import Radio from '~/components/Radio'
import {
  FIND_LIVESTOCK_LIST,
  FIND_NEUTERED_LIST,
  PET_CODE
} from '~/lib/domain/find'

import FormCombobox from '../modules/form-combobox'

import {
  DateRangeWrapper,
  FindFormWrapper,
  FormBox,
  FormLabel,
  RadioList,
  Tilde
} from './index.style'

interface FindFormQuery {
  start: string
  end: string
  livestock: number
  kind: string
  city: number | null
  district: number | null
  shelter: number | null
  neutered: boolean
}

const FindForm = () => {
  const [query, setQuery] = useState<FindFormQuery>({
    start: '',
    end: '',
    livestock: PET_CODE.DOG,
    kind: '',
    city: null,
    district: null,
    shelter: null,
    neutered: true
  })

  const { data: kindData } = useGetKindsQuery({
    params: {
      upKindCd: query.livestock
    },
    options: {
      staleTime: 10000000
    }
  })

  const { data: cityData } = useGetCitesQuery({
    params: { numOfRows: 17, pageNo: 1 },
    options: {
      staleTime: 10000000
    }
  })

  const { data: districtData } = useGetDistrictsQuery({
    params: { uprCd: Number(query.city) },
    options: {
      enabled: !!query.city,
      staleTime: 10000000
    }
  })

  const { data: shelterData } = useGetSheltersQuery({
    params: { uprCd: Number(query.city), ogrCd: Number(query.district) },
    options: {
      enabled: !!(query.city && query.district),
      staleTime: 10000000
    }
  })

  const kindOptions = useMemo(() => {
    if (kindData) {
      return kindData.response.body.items.item.map(({ kindCd, knm }) => ({
        label: knm,
        value: kindCd
      }))
    }

    return []
  }, [kindData])

  const cityOptions = useMemo(() => {
    if (cityData) {
      return cityData.response.body.items.item.map(({ orgCd, orgdownNm }) => ({
        label: orgdownNm,
        value: orgCd
      }))
    }

    return []
  }, [cityData])

  const districtOptions = useMemo(() => {
    if (districtData) {
      return districtData.response.body.items.item.map(
        ({ orgCd, orgdownNm }) => ({
          label: orgdownNm,
          value: orgCd
        })
      )
    }

    return []
  }, [districtData])

  const shelterOptions = useMemo(() => {
    if (shelterData) {
      return shelterData.response.body.items.item.map(
        ({ careRegNo, careNm }) => ({
          label: careNm,
          value: careRegNo
        })
      )
    }

    return []
  }, [shelterData])

  const selectQuery = (key: keyof FindFormQuery, value: CommonValue) => {
    setQuery((prev) => ({ ...prev, [key]: value }))
  }

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
          {FIND_LIVESTOCK_LIST.map(({ label, value }) => (
            <Radio
              key={`animal-species-${value}`}
              checked={query.livestock === value}
              onChange={() => selectQuery('livestock', value)}
            >
              {label}
            </Radio>
          ))}
        </RadioList>
      </FormBox>
      <FormBox>
        <FormLabel>품종</FormLabel>
        <FormCombobox options={kindOptions} placeholder='품종을 선택해주세요' />
      </FormBox>
      <FormBox>
        <FormLabel>지역</FormLabel>
        <FormCombobox
          options={cityOptions}
          placeholder='지역을 선택해주세요'
          onSelect={({ value }) => selectQuery('city', Number(value))}
        />
      </FormBox>
      <FormBox>
        <FormLabel>시군구</FormLabel>
        <FormCombobox
          options={districtOptions}
          placeholder='지역을 선택해주세요'
          disabled={districtOptions.length === 0}
          onSelect={({ value }) => selectQuery('district', Number(value))}
        />
      </FormBox>
      <FormBox>
        <FormLabel>보호소</FormLabel>
        <FormCombobox
          options={shelterOptions}
          placeholder='보호소를 선택해주세요'
          disabled={districtOptions.length === 0}
          onSelect={({ value }) => selectQuery('shelter', Number(value))}
        />
      </FormBox>
      <FormBox $gap={16}>
        <FormLabel>중성화 여부</FormLabel>
        <RadioList>
          {FIND_NEUTERED_LIST.map(({ label, value }) => (
            <Radio
              key={`animal-species-${value}`}
              checked={query.neutered === value}
              onChange={() => selectQuery('neutered', value)}
            >
              {label}
            </Radio>
          ))}
        </RadioList>
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
