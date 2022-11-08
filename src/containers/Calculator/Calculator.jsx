import React, { useCallback, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Display from '@/components/Display'
import History from '@/components/History'
import { calculationActions } from '@/reducers/calculationSlice'

import {
  CalculatorStyled,
  Wrapper,
  HistoryContainer,
} from './components'
import Keypad from '../Keypad'

const Calculator = () => {
  const dispatch = useDispatch()
  const {
    displayValue,
    displayExpression,
    history,
  } = useSelector(state => state.calculations)

  const handleKeypadClick = useCallback(
    action =>
      dispatch(calculationActions.setCalculator(action)),
    [dispatch],
  )

  const handleClearHistory = useCallback(
    () => dispatch(calculationActions.clearHistory()),
    [dispatch],
  )

  const [showHistory] = useReducer(
    showHistory => !showHistory,
    true,
  )

  return (
    <CalculatorStyled>
      <Wrapper>
        <Display
          value={displayValue}
          expression={displayExpression}
        />
        <Keypad onClick={handleKeypadClick} />
      </Wrapper>
      <HistoryContainer
        showHistory={showHistory}
        data-test-id="history">
        {showHistory && (
          <History
            history={history}
            clearHistory={handleClearHistory}
          />
        )}
      </HistoryContainer>
    </CalculatorStyled>
  )
}

export default Calculator
