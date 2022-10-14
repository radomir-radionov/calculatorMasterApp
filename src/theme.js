const font = 'Arial, Helvetica, sans-serif'

const black = '#000000'
const blackLight = '#434343'
const gray = '#707070'
const white = '#ffffff'
const whiteDark = '#F2F2F2'
const error = '#c86464'
const primary = '#c06c84'
const secondary = '#6c5b7b'
const secondaryLight = '#6a6b7b'
const lightGreen = '#08fdd8'
const purple = 'purple'
const yellow = 'yellow'
const crimson = 'crimson'
const green = 'green'
const blue = '#E6E6FA'
const lightPurple = '#C3B1E1'
const clerPurple = '#51414F'

const boxShadows = [
  'box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)',
]

const defaultTheme = {
  boxShadows,
  font,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [
    '1.2rem',
    '1.4rem',
    '1.6rem',
    '2rem',
    '2.4rem',
    '3.2rem',
    '4.0rem',
    '5.6rem',
    '6.4rem',
    '7.2rem',
    '8.0rem',
  ],
  colors: {
    primary,
    secondary,
    secondaryLight,
    black,
    blackLight,
    gray,
    white,
    whiteDark,
    blue,
    error,
  },
}

export const lightTheme = {
  ...defaultTheme,
  btnBorder: gray,
  displayBorder: gray,
  headerBg: blackLight,
  logoColor: white,
  navLinkColor: white,
  bodyBg: white,
  textColor: black,
  btnBg: whiteDark,
  btnHoverBg: blue,
  optionBg: white,
  dropDownColor: green,
}

export const coloredTheme = {
  ...defaultTheme,
  btnBorder: purple,
  displayBorder: yellow,
  headerBg: purple,
  logoColor: yellow,
  navLinkColor: yellow,
  bodyBg: crimson,
  textColor: yellow,
  btnBg: purple,
  btnHoverBg: lightPurple,
  optionBg: purple,
  dropDownColor: yellow,
}

export const darkTheme = {
  ...defaultTheme,
  btnBorder: lightGreen,
  displayBorder: black,
  headerBg: black,
  logoColor: lightGreen,
  navLinkColor: lightGreen,
  bodyBg: gray,
  textColor: lightGreen,
  btnBg: clerPurple,
  btnHoverBg: crimson,
  optionBg: black,
  dropDownColor: lightGreen,
}

export default defaultTheme
