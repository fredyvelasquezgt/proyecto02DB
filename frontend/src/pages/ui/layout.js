import React from 'react'
import { Footer } from './footer'
import { Menu } from './menu'

export const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <br />
      <br />
      <br />
      <div>{children}</div>
      <br />
      <br />
      {/* <Footer /> */}
    </>
  )
}
