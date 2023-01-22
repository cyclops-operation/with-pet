import { defaultColors } from './colors/default'
import { red } from './colors/red'
import { sky } from './colors/sky'
import { darkZinc } from './colors/zinc'

const customColors = {
  ...darkZinc,
  ...red,
  ...sky
}

const darkTheme = {
  colors: { ...defaultColors, ...customColors }
}

export default darkTheme
