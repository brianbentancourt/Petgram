import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

// este hoc se paso a ../containers/ListOfPhotoCardsWithQuery.js

const GET_PHOTOS = gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

export const withPhotos = graphql(GET_PHOTOS)
