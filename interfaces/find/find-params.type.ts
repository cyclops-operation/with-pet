/**
 * Base
 */
import { PublicResponse } from '~/common/types'

interface Kind {
  kindCd: string
  knm: string
}

interface City {
  orgCd: string
  orgdownNm: string
}

interface District {
  uprCd: string
  orgCd: string
  orgdownNm: string
}

interface Shelter {
  careRegNo: string
  careNm: string
}

/**
 * PET
 */

export interface GetKindsParams {
  upKindCd: number
}

export type GetKindsResponse = PublicResponse<{
  items: {
    item: Kind[]
  }
}>

/**
 * LOCATION
 */

export interface GetCitiesParams {
  numOfRows: number
  pageNo: number
}

export type GetCitiesResponse = PublicResponse<{
  items: {
    item: City[]
  }
  numOfRows: number
  pageNo: number
  totalCount: number
}>

export interface GetDistrictsParams {
  uprCd: number
}

export type GetDistrictsResponse = PublicResponse<{
  items: {
    item: District[]
  }
}>

export interface GetSheltersParams {
  uprCd: number
  ogrCd: number
}

export type GetSheltersResponse = PublicResponse<{
  items: {
    item: Shelter[]
  }
}>

export interface GetFindPetsParams {
  bgnde: string
  endde: string
  upkind: number
  kind: string
  upr_cd: number | null
  org_cd: number | null
  care_reg_no: number | null
}
