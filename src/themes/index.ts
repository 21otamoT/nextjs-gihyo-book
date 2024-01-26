import colors from './colors'
import fontSizes from './fontSizes'
import letterSpacings from './letterSpacings'
import lineHeights from './lineHeights'
import width from './width'
import height from './height'
import display from './display'
import border from './border'
import space from './space'

export interface DefaultTheme {
  space: string[]
  fontSizes: number[]
  letterSpacings: string[]
  lineHeights: string[]
  width: string[]
  height: string[]
  display:string[]
  border: {
    size:string,
    border:string
  }[]
  colors:{
    primary: string,
    primaryDark: string,
    primaryLight: string,
    secondary: string,
    secondaryDark: string,
    secondaryLight: string,
    border: string,
    danger: string,
    dangerDark: string,
    gray: string,
    black: string,
    white: string,
    text: string,
  }
}

export const theme: DefaultTheme = {
  space,
  fontSizes,
  letterSpacings,
  lineHeights,
  width,
  height,
  display,
  border,
  colors
} as const
