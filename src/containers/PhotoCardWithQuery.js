import React from 'react'
import { PhotoCard } from '../components/photoCard'
import { Spinner } from '../components/spinner'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <Spinner />
  if (error) {
    return <div>
      <h2>Error! :(</h2>
      <p>{error.message}</p>
    </div>
  }
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {
      renderProp
    }
  </Query>
)
