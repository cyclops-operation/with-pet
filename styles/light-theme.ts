import { defaultColors } from './colors/default'
import { red } from './colors/red'
import { sky } from './colors/sky'
import { zinc } from './colors/zinc'

const customColors = {
  ...zinc,
  ...red,
  ...sky
}

const lightTheme = {
  colors: { ...defaultColors, ...customColors }
}

export default lightTheme
