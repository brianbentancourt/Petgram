import React from 'react'
import { ListOfCategories } from './components/listOfCategories'
import { GlobalStyle } from './styles/globalStyles'
import { ListOfPhotoCards } from './components/listOfPhotoCard'
import { Logo } from './components/logo'

export const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </React.Fragment>

)
