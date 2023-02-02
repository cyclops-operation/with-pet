import { CommonValue } from './types'

export const getQueryString = (queryObject: { [key: string]: CommonValue }) => {
  const queryString = Object.entries(queryObject)
    .map(([key, value]) => {
      if (value === null || value === undefined) {
        return ''
      }

      return `${key}=${value}`
    })
    .join('&')

  return queryString
}
