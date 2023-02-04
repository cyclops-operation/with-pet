import { UseQueryParams } from '~/common/type-utils'
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
import { queryKeys } from '~/lib/config/query-key'

import Api from './axios'
import { useQuery } from './default-query'

export const useGetKindsQuery = ({
  params,
  options
}: UseQueryParams<GetKindsParams, GetKindsResponse>) => {
  return useQuery<GetKindsResponse>(
    [queryKeys.PET.GET_KINDS, params],
    () => Api.Pet.getKinds(params),
    options
  )
}

export const useGetCitesQuery = ({
  params,
  options
}: UseQueryParams<GetCitiesParams, GetCitiesResponse>) => {
  return useQuery<GetCitiesResponse>(
    [queryKeys.LOCATION.GET_CITIES, params],
    () => Api.Location.getCities(params),
    options
  )
}

export const useGetDistrictsQuery = ({
  params,
  options
}: UseQueryParams<GetDistrictsParams, GetDistrictsResponse>) => {
  return useQuery<GetDistrictsResponse>(
    [queryKeys.LOCATION.GET_DISTRICTS, params],
    () => Api.Location.getDistricts(params),
    options
  )
}

export const useGetSheltersQuery = ({
  params,
  options
}: UseQueryParams<GetSheltersParams, GetSheltersResponse>) => {
  return useQuery<GetSheltersResponse>(
    [queryKeys.LOCATION.GET_SHELTERS, params],
    () => Api.Location.getShelters(params),
    options
  )
}
