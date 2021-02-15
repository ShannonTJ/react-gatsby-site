import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Sidebar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
