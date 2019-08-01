import React, { Fragment } from 'react'
import { ListOfCategories } from './components/listOfCategories'
import { GlobalStyle } from './styles/globalStyles'
import { ListOfPhotoCardsWithQuery } from './containers/ListOfPhotoCardsWithQuery'
import { Logo } from './components/logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <Fragment>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <Fragment>
            <ListOfCategories />
            <ListOfPhotoCardsWithQuery categoryId={1} />
          </Fragment>
      }
    </Fragment>
  )
}
