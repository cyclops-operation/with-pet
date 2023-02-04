import dayjs from 'dayjs'

import { ValueOf } from '~/common/type-utils'

dayjs().locale('ko')

export const DateFormat = {
  ['YYYYMMDD']: 'YYYYMMDD',
  ['YYYY/MM/DD']: 'YYYY/MM/DD'
}

export type DateFormat = ValueOf<typeof DateFormat>

export const dateFormat = (
  dateString: string,
  format: DateFormat = DateFormat['YYYY/MM/DD']
) => {
  return dayjs(dateString).format(format)
}
