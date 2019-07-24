import React from 'react'
import { ListOfCategories } from './components/listOfCategories'
import { GlobalStyle } from './globalStyles'
import { PhotoCard } from './components/photoCard'

export const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <ListOfCategories />
    <PhotoCard />
  </React.Fragment>

)
