/**
 * BASE
 */

export const PET_CODE = {
  DOG: 417000,
  CAT: 422400,
  OHTER: 429900
} as const

/**
 * FIND FORM
 */

export const FIND_LIVESTOCK_LIST = [
  { label: '개', value: PET_CODE.DOG },
  { label: '고양이', value: PET_CODE.CAT },
  { label: '기타', value: PET_CODE.OHTER }
]

export const FIND_NEUTERED_LIST = [
  { label: 'O', value: true },
  { label: 'X', value: false }
]
