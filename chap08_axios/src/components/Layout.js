import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header'

function Layout() {
  return (
    <>
      <Header></Header>

      <Outlet></Outlet>

      <div>
        <h5>Footer...</h5>
      </div>
    </>
  )
}

export default Layout