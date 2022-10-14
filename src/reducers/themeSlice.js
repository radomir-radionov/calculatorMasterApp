import { createSlice } from '@reduxjs/toolkit'
import { themes } from '@/constants'
import {
  lightTheme,
  coloredTheme,
  darkTheme,
} from '@/theme'

const initialState = {
  theme: themes.light,
  config: lightTheme,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, { payload }) {
      switch (payload) {
        case themes.light: {
          state.theme = payload
          state.config = lightTheme
          break
        }
        case themes.colored: {
          state.theme = payload
          state.config = coloredTheme
          break
        }
        case themes.dark: {
          state.theme = payload
          state.config = darkTheme
          break
        }
      }
    },
  },
})

export const themeActions = themeSlice.actions

export default themeSlice.reducer
