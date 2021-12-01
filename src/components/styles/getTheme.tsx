import {useTheme as _useTheme} from '@shopify/restyle'
import {Theme} from './theme'

const getTheme = () => _useTheme<Theme>()
export default getTheme