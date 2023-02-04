import { AxiosResponse } from 'axios'

import { api } from '~/common/apis'
import { API_ENCODE_KEY } from '~/common/env'
import { getQueryString } from '~/common/utils'
import {
  GetCitiesParams,
  GetCitiesResponse,
  GetDistrictsParams,
  GetDistrictsResponse,
  GetKindsParams,
  GetKindsResponse,
  GetSheltersParams,
  GetSheltersResponse
} from '~/interfaces/axios'

const Api = {
  Pet: {
    getKinds: async ({ upKindCd }: GetKindsParams) => {
      const { data } = await api.get<AxiosResponse<GetKindsResponse>>(
        `/kind?serviceKey=${API_ENCODE_KEY}&up_kind_cd=${upKindCd}&_type=JSON`
      )

      return data
    }
  },
  Location: {
    getCities: async (params: GetCitiesParams) => {
      const queryString = getQueryString({ ...params })

      const { data } = await api.get<AxiosResponse<GetCitiesResponse>>(
        `/sido?serviceKey=${API_ENCODE_KEY}&${queryString}&_type=json`
      )

      return data
    },
    getDistricts: async ({ uprCd }: GetDistrictsParams) => {
      const { data } = await api.get<AxiosResponse<GetDistrictsResponse>>(
        `/sigungu?serviceKey=${API_ENCODE_KEY}&upr_cd=${uprCd}&_type=json`
      )

      return data
    },
    getShelters: async ({ uprCd, ogrCd }: GetSheltersParams) => {
      const { data } = await api.get<AxiosResponse<GetSheltersResponse>>(
        `/shelter?serviceKey=${API_ENCODE_KEY}&upr_cd=${uprCd}&org_cd=${ogrCd}&_type=json`
      )

      return data
    }
  }
}

export default Api
