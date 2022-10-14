import React from 'react'
import { PropTypes } from 'prop-types'
import { ButtonStyled } from './components'

const Button = ({ option, handler }) => {
  const { value } = option

  const onClick = () => {
    handler(option)
  }

  return (
    <ButtonStyled onClick={onClick}>{value}</ButtonStyled>
  )
}

Button.propTypes = {
  option: PropTypes.object,
  handler: PropTypes.func,
}

export default Button
