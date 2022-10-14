import React from 'react'
import { PropTypes } from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { List, Title, Item } from './components'

const History = ({ history }) => {
  const changedHistory = history.map(
    item => item.split('=')[0],
  )

  return (
    <React.Fragment>
      <Title>History</Title>
      <List>
        {changedHistory.map(item => (
          <Item key={uuidv4()}>{item}</Item>
        ))}
      </List>
    </React.Fragment>
  )
}

History.propTypes = {
  history: PropTypes.array,
}

export default React.memo(History)
