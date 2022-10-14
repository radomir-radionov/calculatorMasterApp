import { combineReducers } from 'redux'
import calculations from './calculationSlice'
import theme from './themeSlice'

export const rootReducer = combineReducers({
  calculations,
  theme,
})
