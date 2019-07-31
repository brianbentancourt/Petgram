import React from 'react'
import { PhotoCard } from '../photoCard'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {
        [1, 2, 3, 4].map(photo => <PhotoCard key={photo} />)
      }
    </ul>
  )
}
