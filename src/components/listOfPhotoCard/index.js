import React from 'react'
import { PhotoCard } from '../photoCard'

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}
