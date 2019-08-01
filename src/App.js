import React from 'react'
import { ListOfCategories } from './components/listOfCategories'
import { GlobalStyle } from './styles/globalStyles'
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
import { Logo } from './components/logo'

export const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={2} />
  </React.Fragment>

)
