import { black, green, red, white, pink, dark } from './colors'

export enum Themes {
  DARK_MODE = 'darkmode',
  LIGHT_MODE = 'lightmode'
}

export interface Theme {
  borderRadius: number
  color: object
  siteWidth: number
  spacing: object
  topBarSize: number
}

const theme: Theme = {
  borderRadius: 12,
  color: pink,
  siteWidth: 1200,
  spacing: {
    1: 4,
    2: 8,
    3: 16,
    4: 24,
    5: 32,
    6: 48,
    7: 64,
  },
  topBarSize: 72,
}

export const lightmode: Theme = {
  ...theme,
  color: pink,
}

export const darkmode: Theme = {
  ...theme,
  color: dark,
}

const ThemeMap = { 'darkmode': darkmode, 'lightmode': lightmode }
export default ThemeMap