import { useQuery } from 'react-query'

import { UseQueryParams } from '~/common/type-utils'
import { GetCityParams } from '~/interfaces/axios'
import { queryKeys } from '~/lib/config/query-key'

import { Location } from './axios'

export const useGetCityQuery = ({
  params,
  options
}: UseQueryParams<GetCityParams>) => {
  return useQuery(
    [queryKeys.LOCATION.GET_PETS, params],
    () => Location.getCity(params),
    options
  )
}
