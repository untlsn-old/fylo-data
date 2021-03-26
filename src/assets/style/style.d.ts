import 'styled-components'

declare module 'styled-components' { // Add own themes (remember to copy it to theme.ts)
  export interface DefaultTheme {
    colors: {
      white: '#ffffff',
      black: '#000000',
      cream: '#ffa399',
      pink: '#ff4d97',
      paleBlue: '#dddbff',
      grayishBlue: '#848794',
      darkBlue: '#1d2c67',
      veryDarkBlue: '#0c122c',
    }
  }
}

