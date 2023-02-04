import { z } from 'zod'

import { PublicResponse } from '~/common/types'
import { dateFormat } from '~/lib/config/date'

const PetSexType = z.enum(['M', 'F', 'Q'])
export type PetSexType = z.infer<typeof PetSexType>
export const PetSexTypeByText: { readonly [key in PetSexType]: string } = {
  [PetSexType.Values.M]: '수컷',
  [PetSexType.Values.F]: '암컷',
  [PetSexType.Values.Q]: '미상'
}

const PetNeuterType = z.enum(['Y', 'N', 'U'])
export type PetNeuterType = z.infer<typeof PetNeuterType>
export const PetNatureTypeByText: { readonly [key in PetNeuterType]: string } =
  {
    [PetNeuterType.Values.Y]: '중성화 O',
    [PetNeuterType.Values.N]: '중성화 X',
    [PetNeuterType.Values.U]: '미상'
  }

const FindPets = z.object({
  desertionNo: z.string(),
  filename: z.string().url(),
  happenDt: z
    .string()
    .min(8)
    .max(8)
    .transform((value) => dateFormat(value)),
  happenPlace: z.string(),
  kindCd: z.string(),
  colorCd: z.string(),
  age: z.string(),
  weight: z.string(),
  noticeNo: z.string(),
  noticeSdt: z
    .string()
    .min(8)
    .max(8)
    .transform((value) => dateFormat(value)),
  noticeEdt: z
    .string()
    .min(8)
    .max(8)
    .transform((value) => dateFormat(value)),
  popfile: z.string().url(),
  processState: z.string(),
  sexCd: PetSexType.transform((value) => PetSexTypeByText[value]),
  neuterYn: PetNeuterType.transform(
    (value) => `(${PetNatureTypeByText[value]})`
  ),
  specialMark: z.string(),
  careNm: z.string(),
  careTel: z.string(),
  careAddr: z.string(),
  orgNm: z.string(),
  chargeNm: z.string(),
  officetel: z.string()
})

/**
 * @description Find Result     유기동물 찾기 결과값
 *
 * @see         desertionNo     유기번호
 * @see         filename        썸네일 이미지
 * @see         happenDt        접수일(YYYYMMDD)
 * @see         happenPlace     발견장소
 * @see         kindCd          품종
 * @see         colorCd         색상
 * @see         age             나이
 * @see         weight          체중
 * @see         noticeNo        공고번호
 * @see         noticeSdt       공고시작일(YYYYMMDD)
 * @see         noticeEdt       공고종료일(YYYYMMDD)
 * @see         popfile         이미지
 * @see         processState    상태
 * @see         sexCd           M : 수컷, F : 암컷, Q : 미상
 * @see         neuterYn        Y : 예, N : 아니오, U : 미상
 * @see         specialMark     특징
 * @see         careNm          보호소이름
 * @see         careTel         보호소전화번호
 * @see         careAddr        보호장소
 * @see         orgNm           관할기관
 * @see         chargeNm        담당자
 * @see         officetel       담당자연락처
 */

export type FindPets = z.infer<typeof FindPets>
export const GetFindPetsResult = z.array(FindPets)

export type GetFindPetsResult = z.infer<typeof GetFindPetsResult>

export type GetFindPetsResponse = PublicResponse<{
  items: {
    item: GetFindPetsResult
  }
}>
