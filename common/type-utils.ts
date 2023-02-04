import { AxiosResponse } from 'axios'
import { QueryKey, UseQueryOptions, UseQueryResult } from 'react-query'
import { css } from 'styled-components'

export type ValueOf<T> = T[keyof T]

export type StyleRecord<T extends string | number | undefined> = Record<
  Exclude<T, undefined>,
  ReturnType<typeof css>
>

export type OptionalStyleRecord<T extends string | number | undefined> =
  Partial<StyleRecord<T>>

export type UseQueryParams<P, R> = {
  params: P
  options?:
    | Omit<
        UseQueryOptions<unknown, unknown, AxiosResponse<R>['data'], QueryKey>,
        'queryKey' | 'queryFn'
      >
    | undefined
}
