import { Color, Size, Width } from './enums'
import { ValueOf } from './type-utils'

/**
 * Base
 */

export type CommonWidth = ValueOf<typeof Width>

export type CommonColor = ValueOf<typeof Color>

export type CommonSize = ValueOf<typeof Size>