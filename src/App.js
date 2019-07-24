import React from 'react'
import { ListOfCategories } from './components/listOfCategories'
import { GlobalStyle } from './globalStyles'
import { ListOfPhotoCards } from './components/listOfPhotoCard'

export const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />
  </React.Fragment>

)
