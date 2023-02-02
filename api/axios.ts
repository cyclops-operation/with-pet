import { AxiosResponse } from 'axios'

import { api } from '~/common/apis'
import { API_ENCODE_KEY } from '~/common/env'
import { getQueryString } from '~/common/utils'
import { GetCityParams, GetCityResponse } from '~/interfaces/axios'

const Api = {
  Location: {
    getCity: async (params: GetCityParams) => {
      const queryString = getQueryString({ ...params })

      const { data } = await api.get<AxiosResponse<GetCityResponse>>(
        `/sido?serviceKey=${API_ENCODE_KEY}&${queryString}&_type=json`
      )

      return data
    }
  }
}

export default Api
