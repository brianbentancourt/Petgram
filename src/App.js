import React, { Fragment } from 'react'
import { GlobalStyle } from './styles/globalStyles'
import { Router } from '@reach/router'
import { Logo } from './components/logo'

import { Home } from './pages/home'
import { Detail } from './pages/detail'
import { User } from './pages/user'
import { Favs } from './pages/favs'
import { NotRegisteredUser } from './pages/notRegisteredUser'

import { NavBar } from './components/navBar'
import Context from './context'

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
      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
              : <Router>
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
              </Router>
        }
      </Context.Consumer>
      <NavBar />
    </Fragment>
  )
}
