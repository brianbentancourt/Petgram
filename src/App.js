import React, { Fragment } from 'react'
import { GlobalStyle } from './styles/globalStyles'
import { Logo } from './components/logo'
import { Home } from './pages/home'
import { Router } from '@reach/router'
import { Detail } from './pages/detail'
import { NavBar } from './components/navBar'

export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')

  return (
    <Fragment>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <NavBar />
    </Fragment>
  )
}
