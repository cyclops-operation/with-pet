import { AxiosResponse } from 'axios'
import {
  QueryFunction,
  QueryKey,
  useQuery as useQueryOrigin,
  UseQueryOptions
} from 'react-query'

export const useQuery = <R>(
  queryKey: QueryKey,
  queryFn: QueryFunction,
  options:
    | Omit<
        UseQueryOptions<unknown, unknown, AxiosResponse<R>['data'], QueryKey>,
        'queryKey' | 'queryFn'
      >
    | undefined
) => {
  return useQueryOrigin<unknown, unknown, AxiosResponse<R>['data'], QueryKey>(
    queryKey,
    queryFn,
    options
  )
}
