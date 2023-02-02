/**
 * Base
 */

interface City {
  orgCd: string
  orgdownNm: string
}

/**
 * Location
 */

export interface GetCityParams {
  numOfRows: number
  pageNo: number
}

export interface GetCityResponse {
  items: {
    item: City[]
  }
  numOfRows: number
  pageNo: number
  totalCount: number
}
