import React from 'react'
import { HomeStyled } from './components'
import ErrorBoundary from '@/components/ErrorBoundary'
import Calculator from '@/containers/Calculator'

const Home = () => {
  return (
    <HomeStyled>
      <ErrorBoundary fallback="Something went wrong. Try to reload the page, please!">
        <Calculator />
      </ErrorBoundary>
    </HomeStyled>
  )
}

export default Home
