import { ReactNode } from 'react'

import { Color, Size, Width } from './enums'
import { ValueOf } from './type-utils'

/**
 * Base
 */

export type CommonWidth = ValueOf<typeof Width>

export type CommonColor = ValueOf<typeof Color>

export type CommonSize = ValueOf<typeof Size>

export type CommonLabel = string | number

export type CommonValue = string | number | boolean

export interface Option {
  label: CommonLabel
  value: CommonValue
}
