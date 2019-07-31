import React from 'react'
import { PhotoCard } from '../photoCard'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {
        [1, 2, 3, 4, 5, 6, 7, 8].map(photo => <PhotoCard key={photo} />)
      }
    </ul>
  )
}
