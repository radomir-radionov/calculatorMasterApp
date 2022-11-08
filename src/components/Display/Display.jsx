import React from 'react'
import { PropTypes } from 'prop-types'
import { DisplayStyled, Text } from './components'

const Display = ({ value, expression }) => {
  return (
    <DisplayStyled>
      <Text data-test-id="display-expression">
        {expression}
      </Text>
      <Text data-test-id="display-value">{value}</Text>
    </DisplayStyled>
  )
}

Display.propTypes = {
  value: PropTypes.string,
  expression: PropTypes.string,
}

export default React.memo(Display)
