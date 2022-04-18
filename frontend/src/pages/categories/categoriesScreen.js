import React from 'react'
import { Banner } from './banner'
import { CategoryList } from './categoryList'

export const CategoriesScreen = () => {
  return (
    <>
      <Banner />

      <CategoryList category="Familiar" titulo="Familiar" />
      <CategoryList category="Adultos" titulo="Adultos" />
    </>
  )
}
