import { Colors } from './types'

export const getFocusRings = (size: string, colors: Colors) =>
  Object.entries(colors).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: `${size} ${value}` }),
    {}
  )
