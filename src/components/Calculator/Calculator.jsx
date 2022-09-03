import React from 'react'
import Display from '../Display'

import Keypad from '../Keypad'
import { CalculatorStyled } from './components'

const Calculator = () => {
  return (
    <CalculatorStyled>
      <Display />
      <Keypad />
    </CalculatorStyled>
  )
}

export default Calculator
