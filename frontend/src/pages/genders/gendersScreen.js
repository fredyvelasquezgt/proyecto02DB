import React from 'react'
import { Banner } from './banner'
import { GenderList } from './genderList'

export const GendersScreen = () => {
  return (
    <>
      <Banner />

      <GenderList gender="1" titulo="Acción" />
      <GenderList gender="2" titulo="Comedia" />
      <GenderList gender="3" titulo="Romance" />
    </>
  )
}
