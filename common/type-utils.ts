import { UseQueryOptions } from 'react-query'
import { css } from 'styled-components'

export type ValueOf<T> = T[keyof T]

export type StyleRecord<T extends string | number | undefined> = Record<
  Exclude<T, undefined>,
  ReturnType<typeof css>
>

export type OptionalStyleRecord<T extends string | number | undefined> =
  Partial<StyleRecord<T>>

export type UseQueryParams<P> = {
  params: P
  options?:
    | Omit<
        UseQueryOptions<unknown, unknown, unknown, (string | P)[]>,
        'queryKey' | 'queryFn'
      >
    | undefined
}
