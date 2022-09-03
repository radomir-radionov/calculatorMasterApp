import React from 'react'
import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'

const Loyout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  )
}

export default Loyout
