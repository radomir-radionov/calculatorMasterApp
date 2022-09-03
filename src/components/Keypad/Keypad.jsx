import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { KeypadStyled } from './components'
import Button from '../Button'

const Keypad = () => {
  const keypadOptions = [
    { kind: 'operation', value: 'C' },
    { kind: 'digit', value: '7' },
    { kind: 'digit', value: '8' },
    { kind: 'digit', value: '9' },
    { kind: 'operation', value: '*' },
    { kind: 'operation', value: '-' },
    { kind: 'digit', value: '4' },
    { kind: 'digit', value: '5' },
    { kind: 'digit', value: '6' },
    { kind: 'operation', value: '\\' },
    { kind: 'operation', value: '+' },
    { kind: 'operation', value: '1' },
    { kind: 'operation', value: '2' },
    { kind: 'operation', value: '3' },
    { kind: 'operation', value: '=' },
    { kind: 'operation', value: '.' },
    { kind: 'operation', value: '(' },
    { kind: 'operation', value: '0' },
    { kind: 'operation', value: ')' },
    { kind: 'operation', value: 'CE' },
  ]

  return (
    <KeypadStyled>
      {keypadOptions.map(option => (
        <Button key={uuidv4()} value={option.value} />
      ))}
    </KeypadStyled>
  )
}

export default Keypad
