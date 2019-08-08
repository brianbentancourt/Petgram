import React from 'react'
import { PhotoCard } from '../components/photoCard'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`
export const ListOfPhotoCardsWithQuery = ({ categoryId }) => (
  <Query query={GET_PHOTOS} variables={{ categoryId }}>
    {
      ({ loading, error, data }) => {
        const { photos = [] } = data
        return (
          <ul>
            {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
          </ul>
        )
      }
    }
  </Query>
)
