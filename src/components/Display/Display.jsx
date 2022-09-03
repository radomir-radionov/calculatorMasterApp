import React from 'react'
import { DisplayStyled, Result } from './components'

const Display = ({ value = 4500.233 }) => {
  return (
    <DisplayStyled>
      <Result>{value}</Result>
    </DisplayStyled>
  )
}

export default Display
