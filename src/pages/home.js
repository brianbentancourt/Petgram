import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/listOfCategories'
import { ListOfPhotoCardsWithQuery } from '../containers/ListOfPhotoCardsWithQuery'

export const Home = ({ id }) => {
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCardsWithQuery categoryId={id} />
    </Fragment>
  )
}
