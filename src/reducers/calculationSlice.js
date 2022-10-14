import { createSlice } from '@reduxjs/toolkit'
import {
  addValueToExpression,
  addDotToValue,
  negateValue,
  closeBracket,
  openBracket,
  calculateExpression,
  resolveBrackets,
  validateValue,
} from '@/utils/index'

const initialState = {
  displayValue: '0',
  displayExpression: '',
  isUpdatedExpression: true,
  isCalculated: false,
  history: [],
}

export const calculationSlice = createSlice({
  name: 'calculation',
  initialState,
  reducers: {
    setCalculator(state, { payload }) {
      const { type, value } = payload
      if (state.isCalculated) {
        state.displayExpression = ''
      }
      const { displayExpression: prevExpression } = state
      switch (type) {
        case 'digit': {
          state.displayValue = state.isUpdatedExpression
            ? value
            : validateValue(state.displayValue + value)
          break
        }
        case 'operand': {
          if (/error/i.test(state.displayValue)) {
            state.displayValue = '0'
            break
          }
          state.displayExpression = `${
            state.displayExpression
          }${addValueToExpression(
            state.displayValue,
            state.displayExpression,
          )} ${value} `
          state.displayValue = '0'
          break
        }
        case 'leftBracket': {
          state.displayExpression = openBracket(
            state.displayExpression,
          )
          break
        }
        case 'rightBracket': {
          state.displayExpression = closeBracket(
            state.displayExpression,
            state.displayValue,
          )
          state.displayValue = '0'
          break
        }
        case 'dot': {
          state.displayValue = state.isCalculated
            ? '.'
            : addDotToValue(state.displayValue)
          break
        }
        case 'negate': {
          if (/error/i.test(state.displayValue)) {
            state.displayValue = '0'
            break
          }
          state.displayValue = negateValue(
            state.displayValue,
          )
          break
        }
        case 'clearValue': {
          state.displayValue = '0'
          break
        }
        case 'clearExp': {
          state.displayValue = '0'
          state.displayExpression = ''
          state.isCalculated = true
          break
        }
        case 'result': {
          if (/error/i.test(state.displayValue)) {
            state.displayValue = '0'
            break
          }
          const expression = state.displayExpression
            ? resolveBrackets(
                `${state.displayExpression}${state.displayValue}`,
              )
            : resolveBrackets(
                `${state.displayValue} + ${state.displayValue}`,
              )
          const result = calculateExpression(expression)
          if (result === 'Infinity')
            state.displayValue = 'Error. Memory overflow'
          else if (result === 'NaN')
            state.displayValue =
              'Error. Result cannot be determined'
          else state.displayValue = result
          state.history.push(
            `${expression} = ${state.displayValue}`,
          )
          state.displayExpression = `${expression} =`
          break
        }
        default:
          return state
      }
      state.isUpdatedExpression =
        state.displayExpression !== prevExpression ||
        type === 'clearValue' ||
        type === 'clearExp'
      state.isCalculated = type === 'result'
    },
    clearHistory(state) {
      state.history = []
    },
    clearAll(state) {
      state.history = []
      state.displayValue = '0'
      state.displayExpression = ''
      state.isUpdatedExpression = true
    },
  },
})

export const calculationActions = calculationSlice.actions

export default calculationSlice.reducer
