import React from 'react'
import { PropTypes } from 'prop-types'
import { ButtonStyled } from './components'

const Button = ({ type, value, handler, dataTestId }) => {
  const onClickHandler = () => {
    handler({ type, value })
  }

  return (
    <ButtonStyled
      data-test-id={dataTestId}
      onClick={onClickHandler}>
      {value}
    </ButtonStyled>
  )
}

Button.propTypes = {
  dataTestId: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  handler: PropTypes.func,
}

export default Button
