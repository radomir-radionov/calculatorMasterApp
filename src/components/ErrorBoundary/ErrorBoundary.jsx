import React from 'react'
import { ErrorWrapper } from './components'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false,
    }
  }

  static getDerivedStateFromError() {
    return {
      error: true,
    }
  }

  render() {
    const { error } = this.state
    const { fallback, children } = this.props

    if (error) {
      return <ErrorWrapper>{fallback}</ErrorWrapper>
    }

    return children
  }
}
