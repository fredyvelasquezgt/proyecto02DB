import React from 'react'
import { Favorites } from './favorites'
import { Featured } from './featured'
import { Recommendations } from './recommendations'
import { Watching } from './watching'

export const HomeScreen = () => {

  return (
    <>
      <Featured />

      <Watching />
      <Recommendations />
      <Favorites />
    </>
  )
}
